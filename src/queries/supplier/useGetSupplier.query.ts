"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import qs from "query-string";

import axiosInstance from "@/services/axiosInstance";

type outletFilter = {
  category?: string;
  service?: string;
  search?: string;
};

const onGetSupplier = async (filters: outletFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`supplier?${queryString}`);
};

export const useGetSupplier = (filters: outletFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetSuppliers", filters],
    queryFn: () => onGetSupplier(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
