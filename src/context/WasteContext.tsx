"use client";
import { IWaste } from "@/utils/types/waste.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type WasteContextType = {
  waste: IWaste[] | [];
  setWaste: React.Dispatch<React.SetStateAction<IWaste[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const WasteContext = React.createContext<WasteContextType | undefined>(
  undefined,
);
const WasteProvider: React.FC<props> = ({ children }) => {
  const [waste, setWaste] = useState<IWaste[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <WasteContext.Provider value={{ waste, setWaste, loading, setLoading }}>
      {children}
    </WasteContext.Provider>
  );
};
const useWasteContext = () => {
  const context = React.useContext(WasteContext);
  if (!context) {
    throw new Error("useWasteContext must be used within a WasteProvider");
  }
  const { waste, setWaste, loading, setLoading } = context;
  return {
    waste,
    setWaste,
    loading,
    setLoading,
  };
};

export { WasteProvider, useWasteContext };
