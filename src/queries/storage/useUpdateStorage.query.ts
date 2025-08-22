import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateStorage = async (body: any, id: string) => {
  return await axiosInstance.put(`storage/${id}`, body);
};

export const useUpdateStorage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateStorage"],
    mutationFn: ({ body, id }: any) => onUpdateStorage(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetStorage"] });
      queryClient.invalidateQueries({ queryKey: ["onGetStorageById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
