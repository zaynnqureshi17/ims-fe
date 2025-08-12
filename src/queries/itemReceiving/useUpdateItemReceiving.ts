import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateItemReceiving = async (body: any, id: string) => {
  console.log(id);
  return await axiosInstance.put(`item/${id}`, body);
};

export const useUpdateItemReceiving = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateItemReceiving"],
    mutationFn: ({ body, id }: any) => onUpdateItemReceiving(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetItemReceiving"] });
      queryClient.invalidateQueries({ queryKey: ["onGetItemReceivingById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
