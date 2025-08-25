import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteTransfer = async (id: string) => {
  return await axiosInstance.delete(`transfer/${id}`);
};

export const useDeleteTransfer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteTransfer"],
    mutationFn: ({ id }: any) => onDeleteTransfer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetTransfer"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
