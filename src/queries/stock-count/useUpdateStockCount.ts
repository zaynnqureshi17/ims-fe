import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateStockCount = async (body: any, id: string) => {
  return await axiosInstance.put(`storage/${id}`, body);
};

export const useUpdateStockCount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateStockCount"],
    mutationFn: ({ body, id }: any) => onUpdateStockCount(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetStockCounts"] });
      queryClient.invalidateQueries({ queryKey: ["onGetStockCountById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
