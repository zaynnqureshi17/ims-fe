import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateStockCount = async (body: any) => {
  return await axiosInstance.post(`storage`, body);
};

export const useCreateStockCount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateStockCount"],
    mutationFn: ({ body }: any) => onCreateStockCount(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetStockCounts"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
