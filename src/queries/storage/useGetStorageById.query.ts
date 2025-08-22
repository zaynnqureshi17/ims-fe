"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetStorageById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`storage/${id}`);
};

export const useGetStorageById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetStorageById", id],
    queryFn: () => onGetStorageById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
