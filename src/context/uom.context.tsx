"use client";
import { IUOM } from "@/utils/types/uom.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type UOMContextType = {
  uom: IUOM[] | [];
  setUOM: React.Dispatch<React.SetStateAction<IUOM[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UOMContext = React.createContext<UOMContextType | undefined>(undefined);
const UOMProvider: React.FC<props> = ({ children }) => {
  const [uom, setUOM] = useState<IUOM[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <UOMContext.Provider value={{ uom, setUOM, loading, setLoading }}>
      {children}
    </UOMContext.Provider>
  );
};
const useUOMContext = () => {
  const context = React.useContext(UOMContext);
  if (!context) {
    throw new Error("useUOMContext must be used within a UOMProvider");
  }
  const { uom, setUOM, loading, setLoading } = context;
  return {
    uom,
    setUOM,
    loading,
    setLoading,
  };
};

export { UOMProvider, useUOMContext };
