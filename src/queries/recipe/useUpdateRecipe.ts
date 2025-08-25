import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateRecipe = async (body: any, id: string) => {
  return await axiosInstance.put(`recipe/${id}`, body);
};

export const useUpdateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateRecipe"],
    mutationFn: ({ body, id }: any) => onUpdateRecipe(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetRecipe"] });
      queryClient.invalidateQueries({ queryKey: ["onGetRecipeById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
