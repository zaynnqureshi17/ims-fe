import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteItem = async (id: string) => {
  return await axiosInstance.delete(`item/${id}`);
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteItem"],
    mutationFn: ({ id }: any) => onDeleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetItem"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
