"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetRecipeById = async (id: string): Promise<any> => {
  return await axiosInstance.get(`recipe/${id}`);
};

export const useGetRecipeById = (id: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetRecipeById", id],
    queryFn: () => onGetRecipeById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
