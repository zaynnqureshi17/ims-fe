"use client";
import { useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";
import BrandsTable from "./BrandsTable";

const BrandsTableCard: React.FC = () => {
  const [collapsed, setCollapsed] = useState<string>("list");
  const searchParams = useSearchParams();
  useEffect(() => {
    const isCollapsed = searchParams.get("collapsed") || "list";
    setCollapsed(isCollapsed);
  }, [searchParams]);

  if (collapsed === "grid") {
    return <BrandsCard />;
  }
  if (collapsed === "list") {
    return <BrandsTable />;
  }
};

export default memo(BrandsTableCard);
