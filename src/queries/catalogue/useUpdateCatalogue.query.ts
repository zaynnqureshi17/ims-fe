import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateCatalogue = async (body: any, id: string) => {
  return await axiosInstance.put(`catalogue/${id}`, body);
};

export const useUpdateCatalogue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateCatalogue"],
    mutationFn: ({ body, id }: any) => onUpdateCatalogue(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetCatalogue"] });
      queryClient.invalidateQueries({ queryKey: ["onGetCatalogueById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
