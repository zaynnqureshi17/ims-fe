import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateBrand = async (body: any, id: string) => {
  return await axiosInstance.put(`brand/${id}`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const useUpdateBrand = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateBrand"],
    mutationFn: ({ body, id }: any) => onUpdateBrand(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetBrands"] });
      queryClient.invalidateQueries({ queryKey: ["onGetBrandById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
