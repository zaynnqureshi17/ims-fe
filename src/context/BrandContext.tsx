"use client";
import { IBrand } from "@/utils/types/brand.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type BrandContextType = {
  brand: IBrand[] | [];
  setBrand: React.Dispatch<React.SetStateAction<IBrand[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const BrandContext = React.createContext<BrandContextType | undefined>(
  undefined,
);
const BrandProvider: React.FC<props> = ({ children }) => {
  const [brand, setBrand] = useState<IBrand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <BrandContext.Provider value={{ brand, setBrand, loading, setLoading }}>
      {children}
    </BrandContext.Provider>
  );
};
const useBrandContext = () => {
  const context = React.useContext(BrandContext);
  if (!context) {
    throw new Error("useBrandContext must be used within a BrandProvider");
  }
  const { brand, setBrand, loading, setLoading } = context;
  return {
    brand,
    setBrand,
    loading,
    setLoading,
  };
};

export { BrandProvider, useBrandContext };
