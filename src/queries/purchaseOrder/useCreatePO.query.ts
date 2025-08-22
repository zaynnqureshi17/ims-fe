import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreatePO = async (body: any) => {
  return await axiosInstance.post(`po`, body);
};

export const useCreatePO = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreatePO"],
    mutationFn: ({ body }: any) => onCreatePO(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetPOs"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
