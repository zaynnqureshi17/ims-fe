"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetRoles = async (): Promise<any> => {
  return await axiosInstance.get("roles");
};

export const useGetRoles = () => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetRoles"],
    queryFn: () => onGetRoles(),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
