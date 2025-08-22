import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onCreateBrand = async (body: any) => {
  return await axiosInstance.post(`brand`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const useCreateBrand = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onCreateBrand"],
    mutationFn: ({ body }: any) => onCreateBrand(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetBrands"] });
      queryClient.invalidateQueries({ queryKey: ["onGetBrandById"] });

      queryClient.invalidateQueries({ queryKey: ["onGetSummaryBrand"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
