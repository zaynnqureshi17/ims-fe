import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeletePO = async (id: string) => {
  return await axiosInstance.delete(`po/${id}`);
};

export const useDeletePO = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeletePO"],
    mutationFn: ({ id }: any) => onDeletePO(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetPOs"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
