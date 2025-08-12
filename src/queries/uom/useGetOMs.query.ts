"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type userFilter = {
  category?: string;
  search?: string;
};

const onGetUOMs = async (filters: userFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`uom?${queryString}`);
};

export const useGetOMs = (filters: userFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetUOMs", filters],
    queryFn: () => onGetUOMs(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
