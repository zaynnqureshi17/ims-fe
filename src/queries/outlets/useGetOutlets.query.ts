"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type outletFilter = {
  status?: string;
  region?: string;
  brand?: string;
  search?: string;
};

const onGetOutlet = async (filters: outletFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`outlet?${queryString}`);
};

export const useGetOutlets = (filters: outletFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetOutlets", filters],
    queryFn: () => onGetOutlet(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
