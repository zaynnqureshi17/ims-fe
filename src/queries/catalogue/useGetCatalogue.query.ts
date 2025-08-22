"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type outletFilter = {
  status?: string;
  brand?: string;
  outlet?: string;
  department?: string;
  search?: string;
};

const onGetCatalogue = async (filters: outletFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`catalogue?${queryString}`);
};

export const useGetCatalogue = (filters: outletFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetCatalogue", filters],
    queryFn: () => onGetCatalogue(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
