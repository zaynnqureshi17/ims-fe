"use client";
import { ICatalogue } from "@/utils/types/catalogue.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type CatalogueContextType = {
  catalogue: ICatalogue[] | [];
  setCatalogue: React.Dispatch<React.SetStateAction<ICatalogue[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const CatalogueContext = React.createContext<CatalogueContextType | undefined>(
  undefined,
);
const CatalogueProvider: React.FC<props> = ({ children }) => {
  const [catalogue, setCatalogue] = useState<ICatalogue[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <CatalogueContext.Provider
      value={{ catalogue, setCatalogue, loading, setLoading }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
const useCatalogueContext = () => {
  const context = React.useContext(CatalogueContext);
  if (!context) {
    throw new Error(
      "useCatalogueContext must be used within a CatalogueProvider",
    );
  }
  const { catalogue, setCatalogue, loading, setLoading } = context;
  return {
    catalogue,
    setCatalogue,
    loading,
    setLoading,
  };
};

export { CatalogueProvider, useCatalogueContext };
