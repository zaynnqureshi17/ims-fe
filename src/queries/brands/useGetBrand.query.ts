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

const onGetBrand = async (filters: UserFilter = {}): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(
    `brand${queryString ? `?${queryString}` : ""}`,
  );
};

export const useGetBrand = (filters?: UserFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetBrand", filters || {}],
    queryFn: () => onGetBrand(filters || {}),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
