import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import axiosInstance from "@/services/axiosInstance";
import { ErrorResponseType } from "@/utils/types/api.types";

const onUpdateUser = async (body: any, id: string) => {
  return await axiosInstance.put(`user/${id}`, body);
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["onUpdateUser"],
    mutationFn: ({ body, id }: any) => onUpdateUser(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onGetUsers"] });
      queryClient.invalidateQueries({ queryKey: ["onGetUserById"] });
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.data?.message || "Some error occurred");
    },
  });
};
