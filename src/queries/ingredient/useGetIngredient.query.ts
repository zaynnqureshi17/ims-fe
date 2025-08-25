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

const onGetIngredient = async (filters: userFilter): Promise<any> => {
  const queryString = qs.stringify(filters, { arrayFormat: "comma" });
  return await axiosInstance.get(`ingredient?${queryString}`);
};

export const useGetIngredient = (filters: userFilter) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetIngredient", filters],
    queryFn: () => onGetIngredient(filters),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
