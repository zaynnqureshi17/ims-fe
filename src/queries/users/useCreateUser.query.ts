import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateUser = async (body: any) => {
  return await axiosInstance.post(`user`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateUser"],
    mutationFn: ({ body }: any) => onCreateUser(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetUsers"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
