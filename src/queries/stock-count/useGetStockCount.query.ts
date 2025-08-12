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

const onGetStockCount = async (filters: outletFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`storage?${queryString}`);
};

export const useGetStockCount = (filters: outletFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetStockCount", filters],
    queryFn: () => onGetStockCount(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
