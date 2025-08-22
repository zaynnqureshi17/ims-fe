import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateStorage = async (body: any) => {
  return await axiosInstance.post(`storage`, body);
};

export const useCreateStorage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateStorage"],
    mutationFn: ({ body }: any) => onCreateStorage(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetStorage"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
