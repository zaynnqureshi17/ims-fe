import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteStorage = async (id: string) => {
  return await axiosInstance.delete(`storage/${id}`);
};

export const useDeleteStorage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteStorage"],
    mutationFn: ({ id }: any) => onDeleteStorage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetStorage"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
