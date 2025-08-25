import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteIngredient = async (id: string) => {
  return await axiosInstance.delete(`ingredient/${id}`);
};

export const useDeleteIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteIngredient"],
    mutationFn: ({ id }: any) => onDeleteIngredient(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetIngredient"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
