"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import { Suspense } from "react";
import SalesReportPageHeader from "./SalesReportPageHeader";
import SalesReportTopBar from "./SalesReportTopBar";
import UploadSalesData from "./SalesReportUpload";
import SalesTable from "./SalesTable";

const SalesReport = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SalesReportTopBar />}>
      <SalesReportPageHeader />
      <UploadSalesData
        onFileSelect={(file) => console.log(file)}
        onSkip={() => console.log("skip")}
      />

      <Suspense fallback={<div>Loading filters...</div>}>
        <SalesTable />
      </Suspense>
    </ProtectedLayoutWrapper>
  );
};

export default SalesReport;
