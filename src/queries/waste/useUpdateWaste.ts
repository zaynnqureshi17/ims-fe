import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateWaste = async (body: any, id: string) => {
  return await axiosInstance.put(`waste/${id}`, body);
};

export const useUpdateWaste = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateWaste"],
    mutationFn: ({ body, id }: any) => onUpdateWaste(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetWaste"] });
      queryClient.invalidateQueries({ queryKey: ["onGetWasteById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
