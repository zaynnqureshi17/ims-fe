"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetSupplierById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`supplier/${id}`);
};

export const useGetSupplierById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetSupplierById", id],
    queryFn: () => onGetSupplierById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
