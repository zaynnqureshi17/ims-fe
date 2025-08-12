"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetStockCountById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`storage/${id}`);
};

export const useGetStockCountById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetStockCountById", id],
    queryFn: () => onGetStockCountById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
