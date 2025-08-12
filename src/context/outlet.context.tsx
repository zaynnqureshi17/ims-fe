"use client";
import { IOutlet } from "@/utils/types/outlet.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
  outletView?: IOutlet;
  setOutletView?: React.Dispatch<React.SetStateAction<IOutlet>>;
};

type OutletContextType = {
  outlet: IOutlet[];
  setOutlet: React.Dispatch<React.SetStateAction<IOutlet[]>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  outletView?: IOutlet;
  setOutletView?: React.Dispatch<React.SetStateAction<IOutlet>>;
};

const OutletContext = React.createContext<OutletContextType | undefined>(
  undefined,
);

const OutletProvider: React.FC<props> = ({
  outletView,
  setOutletView,
  children,
}) => {
  const [outlet, setOutlet] = useState<IOutlet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // If outletView is not provided from props, create internal state

  return (
    <OutletContext.Provider
      value={{
        outlet,
        setOutlet,
        loading,
        setLoading,
        outletView,
        setOutletView,
      }}
    >
      {children}
    </OutletContext.Provider>
  );
};

const useOutletContext = () => {
  const context = React.useContext(OutletContext);
  if (!context) {
    throw new Error("useOutletContext must be used within a OutletProvider");
  }
  return context;
};

export { OutletProvider, useOutletContext };
