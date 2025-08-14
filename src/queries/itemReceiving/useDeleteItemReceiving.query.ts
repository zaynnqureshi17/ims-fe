import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteItemReceiving = async (id: string) => {
  return await axiosInstance.delete(`item/${id}`);
};

export const useDeleteItemReceiving = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteItemReceiving"],
    mutationFn: ({ id }: any) => onDeleteItemReceiving(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetItemReceiving"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
