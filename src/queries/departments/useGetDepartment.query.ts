"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetDepartment = async (): Promise<any> => {
  return await axiosInstance.get("department");
};

export const useGetDepartment = () => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetDepartment"],
    queryFn: () => onGetDepartment(),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
