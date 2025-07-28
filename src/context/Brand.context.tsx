"use client";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type BrandContextType = {
  brandId: number;
  setBrandId: React.Dispatch<React.SetStateAction<number>>;
};

const BrandContext = React.createContext<BrandContextType | undefined>(
  undefined,
);
const BrandProvider: React.FC<props> = ({ children }) => {
  const [brandId, setBrandId] = useState<number>(1);
  return (
    <BrandContext.Provider value={{ brandId, setBrandId }}>
      {children}
    </BrandContext.Provider>
  );
};
const useBrandContext = () => {
  const context = React.useContext(BrandContext);
  if (!context) {
    throw new Error("useBrandContext must be used within a BrandProvider");
  }
  const { brandId, setBrandId } = context;
  return {
    brandId,
    setBrandId,
  };
};

export { BrandProvider, useBrandContext };
