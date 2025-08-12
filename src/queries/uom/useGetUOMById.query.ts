"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetUOM = async (id: string): Promise<any> => {
  return await axiosInstance.get(`uom/${id}`);
};

export const useGetUOMById = (id: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetUOMById", id],
    queryFn: () => onGetUOM(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
