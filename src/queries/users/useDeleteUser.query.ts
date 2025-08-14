import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteUser = async (id: string) => {
  return await axiosInstance.delete(`user/${id}`);
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteUser"],
    mutationFn: ({ id }: any) => onDeleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetUsers"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
