import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateItem = async (body: any, id: string) => {
  return await axiosInstance.put(`item/${id}`, body);
};

export const useUpdateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateItem"],
    mutationFn: ({ body, id }: any) => onUpdateItem(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetItem"] });
      queryClient.invalidateQueries({ queryKey: ["onGetItemById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
