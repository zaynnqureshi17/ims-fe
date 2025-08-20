"use client";
import { IStorage } from "@/utils/types/storage.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type StockContextType = {
  stock: IStorage[] | [];
  setStock: React.Dispatch<React.SetStateAction<IStorage[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const StockContext = React.createContext<StockContextType | undefined>(
  undefined,
);
const StockProvider: React.FC<props> = ({ children }) => {
  const [stock, setStock] = useState<IStorage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <StockContext.Provider value={{ stock, setStock, loading, setLoading }}>
      {children}
    </StockContext.Provider>
  );
};
const useStockContext = () => {
  const context = React.useContext(StockContext);
  if (!context) {
    throw new Error("useStockContext must be used within a StockProvider");
  }
  const { stock, setStock, loading, setLoading } = context;
  return {
    stock,
    setStock,
    loading,
    setLoading,
  };
};

export { StockProvider, useStockContext };
