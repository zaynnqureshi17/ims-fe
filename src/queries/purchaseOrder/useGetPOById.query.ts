"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetPOById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`po/${id}`);
};

export const useGetPOById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetPOById", id],
    queryFn: () => onGetPOById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
