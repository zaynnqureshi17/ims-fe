import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteRecipe = async (id: string) => {
  return await axiosInstance.delete(`recipe/${id}`);
};

export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteRecipe"],
    mutationFn: ({ id }: any) => onDeleteRecipe(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetRecipe"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
