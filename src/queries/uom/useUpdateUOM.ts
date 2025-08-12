import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateUOM = async (body: any, id: string) => {
  return await axiosInstance.put(`uom/${id}`, body);
};

export const useUpdateUOM = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateUOM"],
    mutationFn: ({ body, id }: any) => onUpdateUOM(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetOMs"] });
      queryClient.invalidateQueries({ queryKey: ["onGetUOMById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
