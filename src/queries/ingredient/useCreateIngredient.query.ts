import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateIngredient = async (body: any) => {
  return await axiosInstance.post(`ingredient`, body);
};

export const useCreateIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateIngredient"],
    mutationFn: ({ body }: any) => onCreateIngredient(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetIngredient"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
