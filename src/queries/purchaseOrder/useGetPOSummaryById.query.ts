"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetPOSummaryById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`po/summary/${id}`);
};

export const useGetPOSummaryById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetPOSummaryById", id],
    queryFn: () => onGetPOSummaryById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
