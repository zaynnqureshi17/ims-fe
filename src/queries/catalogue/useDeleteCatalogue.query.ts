import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onDeleteCatalogue = async (id: string) => {
  return await axiosInstance.delete(`catalogue/${id}`);
};

export const useDeleteCatalogue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onDeleteCatalogue"],
    mutationFn: ({ id }: any) => onDeleteCatalogue(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetCatalogue"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
