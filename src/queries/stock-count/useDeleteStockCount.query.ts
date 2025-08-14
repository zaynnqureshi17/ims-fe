import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteStockCount = async (id: string) => {
  return await axiosInstance.delete(`storage/${id}`);
};

export const useDeleteStockCount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteStockCount"],
    mutationFn: ({ id }: any) => onDeleteStockCount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetStockCount"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
