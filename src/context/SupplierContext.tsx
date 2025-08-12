"use client";
import { ISupplier } from "@/utils/types/supplier.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type SupplierContextType = {
  supplier: ISupplier[] | [];
  setSupplier: React.Dispatch<React.SetStateAction<ISupplier[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SupplierContext = React.createContext<SupplierContextType | undefined>(
  undefined,
);
const SupplierProvider: React.FC<props> = ({ children }) => {
  const [supplier, setSupplier] = useState<ISupplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <SupplierContext.Provider
      value={{ supplier, setSupplier, loading, setLoading }}
    >
      {children}
    </SupplierContext.Provider>
  );
};
const useSupplierContext = () => {
  const context = React.useContext(SupplierContext);
  if (!context) {
    throw new Error(
      "useSupplierContext must be used within a SupplierProvider",
    );
  }
  const { supplier, setSupplier, loading, setLoading } = context;
  return {
    supplier,
    setSupplier,
    loading,
    setLoading,
  };
};

export { SupplierProvider, useSupplierContext };
