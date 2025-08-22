"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type UserFilter = {
  status?: string;
  region?: string;
  search?: string;
};

const onGetSummaryBrand = async (filters: UserFilter = {}): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(
    `brand/summary${queryString ? `?${queryString}` : ""}`,
  );
};

export const useGetSummaryBrand = (filters?: UserFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetBrand", filters || {}],
    queryFn: () => onGetSummaryBrand(filters || {}),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
