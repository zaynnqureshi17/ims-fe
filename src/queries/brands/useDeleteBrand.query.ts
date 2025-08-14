import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteBrand = async (id: string) => {
  return await axiosInstance.delete(`brand/${id}`);
};

export const useDeleteBrand = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteBrand"],
    mutationFn: ({ id }: any) => onDeleteBrand(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetBrand"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
