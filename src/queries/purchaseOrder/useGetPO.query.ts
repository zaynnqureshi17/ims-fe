"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type POFilter = {
  status?: string;
  region?: string;
  brand?: string;
  search?: string;
};

const onGetPO = async (filters: POFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`po?${queryString}`);
};

export const useGetPOs = (filters: POFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetPOs", filters],
    queryFn: () => onGetPO(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
