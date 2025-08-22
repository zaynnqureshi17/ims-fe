"use client";

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

interface Props {
  token: string;
  body: { new_password: string };
}

const onResetPassword = async (
  token: string,
  body: { new_password: string },
): Promise<AxiosResponse<any>> => {
  return await axiosInstance.post("auth/reset-password", body, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const useResetPassword = (): UseMutationResult<
  AxiosResponse<any>,
  ErrorResponseType,
  Props,
  unknown
> => {
  return useMutation({
    mutationKey: ["auth", "onResetPassword"],
    mutationFn: ({ token, body }: Props) => onResetPassword(token, body),
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
