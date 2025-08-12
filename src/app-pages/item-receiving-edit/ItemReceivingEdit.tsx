"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import { useGetItemReceivingById } from "@/queries/itemReceiving/useGetItemReceivingById.query";
import ItemReceivingEditForm from "./ItemReceivingEditForm";
import ItemReceivingEditTopBar from "./ItemReceivingEditTopBar";

const ItemReceivingEdit = ({ id }: { id: string }) => {
  const { data: item, status } = useGetItemReceivingById(id);
  const { data: roles, status: roleStatus } = useGetBrand();
  const { brandOptions } = useMultiOptions({
    brands: roles?.body?.data,
  });

  const loading = status === "pending" || roleStatus === "pending";
  return (
    <LoadingWrapper loading={loading}>
      <ProtectedLayoutWrapper topBar={<ItemReceivingEditTopBar />}>
        <PageHeader heading="Edit Item" description="Update Item Details." />
        <ItemReceivingEditForm
          brandOptions={brandOptions}
          item={item?.body?.data}
        />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default ItemReceivingEdit;
