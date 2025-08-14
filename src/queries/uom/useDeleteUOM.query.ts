import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteUOM = async (id: string) => {
  return await axiosInstance.delete(`uom/${id}`);
};

export const useDeleteUOM = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteUOM"],
    mutationFn: ({ id }: any) => onDeleteUOM(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetUOM"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
