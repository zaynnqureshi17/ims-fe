"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

const onGetUsers = async (id: string): Promise<any> => {
  return await axiosInstance.get(`user/${id}`);
};

export const useGetUsersById = (id: string) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetUserById", id],
    queryFn: () => onGetUsers(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
