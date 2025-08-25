"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type userFilter = {
  role?: string;
  outlet?: string;
  department?: string;
  search?: string;
};

const onGetWaste = async (filters: userFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`waste?${queryString}`);
};

export const useGetWaste = (filters: userFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetWaste", filters],
    queryFn: () => onGetWaste(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
