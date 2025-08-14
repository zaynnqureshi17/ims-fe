import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteSupplier = async (id: string) => {
  return await axiosInstance.delete(`supplier/${id}`);
};

export const useDeleteSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteSupplier"],
    mutationFn: ({ id }: any) => onDeleteSupplier(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetSuppliers"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
