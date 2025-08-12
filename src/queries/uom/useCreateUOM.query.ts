import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateUOM = async (body: any) => {
  return await axiosInstance.post(`uom`, body);
};

export const useCreateUOM = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateUOM"],
    mutationFn: ({ body }: any) => onCreateUOM(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetUOMs"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
