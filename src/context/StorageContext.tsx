"use client";
import { IStorage } from "@/utils/types/storage.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type StorageContextType = {
  storage: IStorage[] | [];
  setStorage: React.Dispatch<React.SetStateAction<IStorage[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const StorageContext = React.createContext<StorageContextType | undefined>(
  undefined,
);
const StorageProvider: React.FC<props> = ({ children }) => {
  const [storage, setStorage] = useState<IStorage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <StorageContext.Provider
      value={{ storage, setStorage, loading, setLoading }}
    >
      {children}
    </StorageContext.Provider>
  );
};
const useStorageContext = () => {
  const context = React.useContext(StorageContext);
  if (!context) {
    throw new Error("useStorageContext must be used within a StorageProvider");
  }
  const { storage, setStorage, loading, setLoading } = context;
  return {
    storage,
    setStorage,
    loading,
    setLoading,
  };
};

export { StorageProvider, useStorageContext };
