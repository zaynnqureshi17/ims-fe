"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
import { useGetItem } from "@/queries/item/useGetItem.query";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import TransferAdditional from "./TransferAdditional";
import TransferField from "./TransferField";
import TransfersAddForm from "./TransfersAddForm";
import TransfersAddNew from "./TransfersAddNew";
import TransfersAddPageHeader from "./TransfersAddPageHeader";
import TransfersAddTopBar from "./TransfersAddTopBar";

const TransfersAdd = () => {
  const { data: items, status } = useGetItem({});
  const { data: outlets, status: outletsStatus } = useGetOutlets({});
  const { data: departments, status: departmentsStatus } = useGetDepartment();
  const { itemOptions, outletOptions, departmentOptions } = useMultiOptions({
    items: items?.body?.data,
    outlets: outlets?.body?.data,
    departments: departments?.body?.departments,
  });

  const isLoading =
    status === "pending" ||
    outletsStatus === "pending" ||
    departmentsStatus === "pending";
  return (
    <ProtectedLayoutWrapper topBar={<TransfersAddTopBar />}>
      <StateWrapper loading={isLoading}>
        <TransfersAddPageHeader />
        <TransfersAddForm>
          <TransferField
            outletOptions={outletOptions}
            departmentOptions={departmentOptions}
          />
          <TransfersAddNew itemOptions={itemOptions} />
          <TransferAdditional />
        </TransfersAddForm>
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default TransfersAdd;
