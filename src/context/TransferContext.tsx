"use client";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type TransferContextType = {
  transfer: any[] | [];
  setTransfer: React.Dispatch<React.SetStateAction<any[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransferContext = React.createContext<TransferContextType | undefined>(
  undefined,
);
const TransferProvider: React.FC<props> = ({ children }) => {
  const [transfer, setTransfer] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <TransferContext.Provider
      value={{ transfer, setTransfer, loading, setLoading }}
    >
      {children}
    </TransferContext.Provider>
  );
};
const useTransferContext = () => {
  const context = React.useContext(TransferContext);
  if (!context) {
    throw new Error(
      "useTransferContext must be used within a TransferProvider",
    );
  }
  const { transfer, setTransfer, loading, setLoading } = context;
  return {
    transfer,
    setTransfer,
    loading,
    setLoading,
  };
};

export { TransferProvider, useTransferContext };
