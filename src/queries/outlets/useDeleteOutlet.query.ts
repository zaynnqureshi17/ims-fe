import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteOutlet = async (id: string) => {
  return await axiosInstance.delete(`outlet/${id}`);
};

export const useDeleteOutlet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteOutlet"],
    mutationFn: ({ id }: any) => onDeleteOutlet(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetOutlets"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
