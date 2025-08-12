"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetOutletById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`outlet/${id}`);
};

export const useGetOutletById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetOutletById", id],
    queryFn: () => onGetOutletById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
