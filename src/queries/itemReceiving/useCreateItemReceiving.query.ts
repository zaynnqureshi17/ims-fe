import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateItemReceiving = async (body: any) => {
  return await axiosInstance.post(`item`, body);
};

export const useCreateItemReceiving = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateItemReceiving"],
    mutationFn: ({ body }: any) => onCreateItemReceiving(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetItemReceivings"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
