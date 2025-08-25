import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateRecipe = async (body: any) => {
  return await axiosInstance.post(`recipe`, body);
};

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateRecipe"],
    mutationFn: ({ body }: any) => onCreateRecipe(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetRecipe"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
