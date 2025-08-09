"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

interface Body {
  email: string;
  password: string;
}

interface Props {
  data: Body;
}

const onSignIn = async (data: Body): Promise<AxiosResponse<Body>> => {
  console.log("Full URL:", axiosInstance.defaults.baseURL + "auth/login");
  return await axiosInstance.post("auth/login", data);
};

export const useSignIn = (): UseMutationResult<
  AxiosResponse<Body>,
  unknown,
  Props,
  unknown
> => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth", "onSignIn"],
    mutationFn: ({ data }: Props) => onSignIn(data),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      const token = response?.body?.data.token;
      Cookies.set("token", token, {
        expires: 30, // Expires in 30 days
        secure: true, // Ensures the cookie is sent over HTTPS
        sameSite: "strict", // Prevent CSRF attacks
      });
      const role = response?.body?.data.role_name;
      Cookies.set("role", role, {
        expires: 30,
        secure: true,
        sameSite: "strict",
      });

      router.push("/");
      router.refresh();
    },

    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
