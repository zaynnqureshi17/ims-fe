import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateIngredient = async (body: any, id: string) => {
  return await axiosInstance.put(`ingredient/${id}`, body);
};

export const useUpdateIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateIngredient"],
    mutationFn: ({ body, id }: any) => onUpdateIngredient(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetIngredient"] });
      queryClient.invalidateQueries({ queryKey: ["onGetIngredientById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
