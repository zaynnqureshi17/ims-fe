import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

// -------------------------------- Request OTP -------------------------------- //
const onResendOTP = async (token: string) => {
  return await axiosInstance.post(
    "auth/resend-forgot-password",
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};

export const useResendOTP = () => {
  return useMutation({
    mutationKey: ["auth", "ResendOTP"],
    mutationFn: ({ token }: { token: string }) => onResendOTP(token),
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
