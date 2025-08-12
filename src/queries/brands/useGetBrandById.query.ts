"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetBrands = async (id: string): Promise<any> => {
  return await axiosInstance.get(`brand/${id}`);
};

export const useGetBrandById = (id: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetBrandById", id],
    queryFn: () => onGetBrands(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
