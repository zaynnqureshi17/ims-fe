"use client";
import { Switch } from "@/components/ui/switch";
import React from "react";

const ProductionActive = () => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">
          Production Active
        </h3>
        <p className="text-sm text-gray-500">
          Enable this recipe for production batching
        </p>
      </div>
      <Switch />
    </div>
  );
};

export default ProductionActive;
