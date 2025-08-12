import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateSupplier = async (body: any, id: string) => {
  return await axiosInstance.put(`supplier/${id}`, body);
};

export const useUpdateSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateSupplier"],
    mutationFn: ({ body, id }: any) => onUpdateSupplier(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetSuppliers"] });
      queryClient.invalidateQueries({ queryKey: ["onGetSupplierById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
