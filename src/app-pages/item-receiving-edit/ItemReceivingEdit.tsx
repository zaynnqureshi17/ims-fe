"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import { useGetItemReceivingById } from "@/queries/itemReceiving/useGetItemReceivingById.query";
import ItemReceivingEditForm from "./ItemReceivingEditForm";
import ItemReceivingEditTopBar from "./ItemReceivingEditTopBar";

const ItemReceivingEdit = ({ id }: { id: string }) => {
  const { data: itmeData, status, error } = useGetItemReceivingById(id);
  const { data: roles, status: roleStatus } = useGetBrand();
  const { brandOptions } = useMultiOptions({
    brands: roles?.body?.data,
  });

  const isLoading = status === "pending" || roleStatus === "pending";
  const item = itmeData?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !item;

  return (
    <ProtectedLayoutWrapper topBar={<ItemReceivingEditTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PageHeader heading="Edit Item" description="Update Item Details." />
        <ItemReceivingEditForm brandOptions={brandOptions} item={item} />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default ItemReceivingEdit;
