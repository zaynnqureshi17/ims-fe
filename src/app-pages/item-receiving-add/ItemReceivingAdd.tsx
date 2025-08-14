"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import ItemReceivingAddForm from "./ItemReceivingAddForm";
import ItemReceivingAddTopBar from "./ItemReceivingAddTopBar";

const ItemReceivingAdd = () => {
  const { data: brand, status: status } = useGetBrand({});
  const { brandOptions } = useMultiOptions({
    brands: brand?.body?.data,
  });
  const loading = status === "pending";
  return (
    <StateWrapper loading={loading}>
      <ProtectedLayoutWrapper topBar={<ItemReceivingAddTopBar />}>
        <PageHeader
          heading="Add New Item"
          description="Enter New Item Details."
        />
        <ItemReceivingAddForm brandOptions={brandOptions} />
      </ProtectedLayoutWrapper>
    </StateWrapper>
  );
};

export default ItemReceivingAdd;
