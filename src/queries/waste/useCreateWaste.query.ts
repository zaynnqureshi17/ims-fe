import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateWaste = async (body: any) => {
  return await axiosInstance.post(`waste`, body);
};

export const useCreateWaste = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateWaste"],
    mutationFn: ({ body }: any) => onCreateWaste(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetWaste"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
