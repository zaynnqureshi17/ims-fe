"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import StorageAddForm from "./StorageAddForm";
import StorageAddTopBar from "./StorageAddTopBar";

const StorageAdd = () => {
  const { data: outlets, status: outletStatus } = useGetOutlets({});
  const { outletOptions } = useMultiOptions({
    outlets: outlets?.body?.data,
  });

  const isLoading = outletStatus === "pending";

  return (
    <StateWrapper loading={isLoading}>
      <ProtectedLayoutWrapper topBar={<StorageAddTopBar />}>
        <PageHeader
          heading="Add New Storage "
          description="Enter New Storage information."
        />
        <StorageAddForm outletOptions={outletOptions} />
      </ProtectedLayoutWrapper>
    </StateWrapper>
  );
};

export default StorageAdd;
