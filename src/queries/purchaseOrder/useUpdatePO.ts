import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdatePO = async (body: any, id: string) => {
  return await axiosInstance.put(`po/${id}`, body);
};

export const useUpdatePO = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdatePO"],
    mutationFn: ({ body, id }: any) => onUpdatePO(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetPOs"] });
      queryClient.invalidateQueries({ queryKey: ["onGetPOById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
