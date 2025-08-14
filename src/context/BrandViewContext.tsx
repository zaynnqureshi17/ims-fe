"use client";
import { IBrandResponse } from "@/utils/types/brand.type";
import React, { useState } from "react";

type BrandViewProviderProps = {
  children: React.ReactNode;
  brandView: IBrandResponse | null;
  setBrandView: React.Dispatch<React.SetStateAction<IBrandResponse | null>>;
};

type BrandViewContextType = {
  brandView: IBrandResponse | null;
  setBrandView: React.Dispatch<React.SetStateAction<IBrandResponse | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const BrandViewContext = React.createContext<BrandViewContextType | undefined>(
  undefined,
);

const BrandViewProvider: React.FC<BrandViewProviderProps> = ({
  brandView,
  setBrandView,
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <BrandViewContext.Provider
      value={{ brandView, setBrandView, loading, setLoading }}
    >
      {children}
    </BrandViewContext.Provider>
  );
};

const useBrandViewContext = () => {
  const context = React.useContext(BrandViewContext);
  if (!context) {
    throw new Error(
      "useBrandViewContext must be used within a BrandViewProvider",
    );
  }
  const { brandView, setBrandView, loading, setLoading } = context;
  return { brandView, setBrandView, loading, setLoading };
};

export { BrandViewProvider, useBrandViewContext };
