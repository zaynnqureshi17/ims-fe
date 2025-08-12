import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateOutlet = async (body: any, id: string) => {
  return await axiosInstance.put(`outlet/${id}`, body);
};

export const useUpdateOutlet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateOutlet"],
    mutationFn: ({ body, id }: any) => onUpdateOutlet(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetOutlets"] });
      queryClient.invalidateQueries({ queryKey: ["onGetOutletById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
