import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteWaste = async (id: string) => {
  return await axiosInstance.delete(`user/${id}`);
};

export const useDeleteWaste = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteWaste"],
    mutationFn: ({ id }: any) => onDeleteWaste(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetWaste"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
