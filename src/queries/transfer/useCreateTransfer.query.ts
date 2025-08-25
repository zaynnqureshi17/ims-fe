import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateTransfer = async (body: any) => {
  return await axiosInstance.post(`transfer`, body);
};

export const useCreateTransfer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateTransfer"],
    mutationFn: ({ body }: any) => onCreateTransfer(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetTransfer"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
