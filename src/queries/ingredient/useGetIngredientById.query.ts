"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetIngredientById = async (id: string): Promise<any> => {
  return await axiosInstance.get(`ingredient/${id}`);
};

export const useGetIngredientById = (id: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetIngredientById", id],
    queryFn: () => onGetIngredientById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
