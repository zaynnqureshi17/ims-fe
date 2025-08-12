"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { OutletProvider } from "@/context/outlet.context";
import { useGetOutletById } from "@/queries/outlets/useGetOutletById.query";
import { IOutlet } from "@/utils/types/outlet.type";
import { useEffect, useState } from "react";
import OutletDetailView from "./OutletDetailView";
import OutletViewTab from "./OutletViewTab";
import OutletViewTopBar from "./OutletViewTopBar";

const OutletView = ({ id }: { id: string }) => {
  const { data: outletData, status } = useGetOutletById(id);
  const [outletView, setOutletView] = useState<IOutlet>();
  const loading = status === "pending";

  useEffect(() => {
    if (outletData?.body.data) {
      setOutletView(outletData.body.data);
    }
  }, [outletData]);

  return (
    <OutletProvider outletView={outletView}>
      <LoadingWrapper loading={loading}>
        <ProtectedLayoutWrapper topBar={<OutletViewTopBar />}>
          <OutletDetailView outletData={outletData?.body.data} />
          <OutletViewTab />
        </ProtectedLayoutWrapper>
      </LoadingWrapper>
    </OutletProvider>
  );
};

export default OutletView;
