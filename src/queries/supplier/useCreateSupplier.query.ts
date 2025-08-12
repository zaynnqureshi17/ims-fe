import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateSupplier = async (body: any) => {
  return await axiosInstance.post(`supplier`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const useCreateSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateSupplier"],
    mutationFn: ({ body }: any) => onCreateSupplier(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetSuppliers"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
