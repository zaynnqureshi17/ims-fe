"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type userFilter = {
  status?: string;
  supplier?: string;
  brand?: string;
  subCategory?: string;
  category?: string;
  search?: string;
};

const onGetItemReceiving = async (filters: userFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`item?${queryString}`);
};

export const useGetItemReceiving = (filters: userFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetItemReceiving", filters],
    queryFn: () => onGetItemReceiving(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
