"use client";
import { IPurchaseOrder } from "@/utils/types/po.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type POContextType = {
  po: IPurchaseOrder[] | [];
  setPO: React.Dispatch<React.SetStateAction<IPurchaseOrder[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const POContext = React.createContext<POContextType | undefined>(undefined);
const POProvider: React.FC<props> = ({ children }) => {
  const [po, setPO] = useState<IPurchaseOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <POContext.Provider value={{ po, setPO, loading, setLoading }}>
      {children}
    </POContext.Provider>
  );
};
const usePOContext = () => {
  const context = React.useContext(POContext);
  if (!context) {
    throw new Error("usePOContext must be used within a POProvider");
  }
  const { po, setPO, loading, setLoading } = context;
  return {
    po,
    setPO,
    loading,
    setLoading,
  };
};

export { POProvider, usePOContext };
