import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateOutlet = async (body: any) => {
  return await axiosInstance.post(`outlet`, body);
};

export const useCreateOutlet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateOutlet"],
    mutationFn: ({ body }: any) => onCreateOutlet(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetOutlets"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
