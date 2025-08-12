"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

// -------------------------------- Request OTP -------------------------------- //
const onForgotRequestOTP = async (body: any) => {
  return await axiosInstance.post(`auth/forgot-password/`, body);
};

export const useForgotRequestOTP = () => {
  return useMutation({
    mutationKey: ["auth", "onForgotRequestOTP"],
    mutationFn: ({ body }: any) => onForgotRequestOTP(body),
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};

// -------------------------------- Verify OTP -------------------------------- //
const onForgotVerifyOTP = async (
  token: string,

  otp: string,
) => {
  return await axiosInstance.post(
    `auth/forgot-password/verify-otp`,
    { otp },
    {
      headers: { Authorization: `Bearer ${token}` } as any,
    },
  );
};

export const useForgotVerifyOTP = () => {
  return useMutation({
    mutationKey: ["auth", "onForgotVerifyOTP"],
    mutationFn: ({ token, otp }: any) => onForgotVerifyOTP(token, otp),
    onError: (error: ErrorResponseType) => {
      toast.error(
        error?.data?.errors?.otp ||
          error?.data?.message ||
          "Some error occurred",
      );
    },
  });
};
