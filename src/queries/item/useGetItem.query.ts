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

const onGetItem = async (filters: outletFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`item?${queryString}`);
};

export const useGetItem = (filters: outletFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetItem", filters],
    queryFn: () => onGetItem(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
