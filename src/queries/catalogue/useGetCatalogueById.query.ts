"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import axiosInstance from "@/services/axiosInstance";

type id = string;

const onGetCatalogueById = async (id: id): Promise<any> => {
  return await axiosInstance.get(`catalogue/${id}`);
};

export const useGetCatalogueById = (id: id) => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["onGetCatalogueById", id],
    queryFn: () => onGetCatalogueById(id),
    retry: 1,
    enabled: !!token,
    placeholderData: keepPreviousData,
  });
};
