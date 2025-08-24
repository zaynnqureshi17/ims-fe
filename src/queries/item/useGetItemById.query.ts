"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetItemById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`item/${id}`);
};

export const useGetItemById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetItemById", id],
    queryFn: () => onGetItemById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
