"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetItemReceiving = async (id: string): Promise<any> => {
  return await axiosInstance.get(`item/${id}`);
};

export const useGetItemReceivingById = (id: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetItemReceivingById", id],
    queryFn: () => onGetItemReceiving(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
