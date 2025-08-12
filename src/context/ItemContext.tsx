"use client";
import { IItem } from "@/utils/types/item.types";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type ItemContextType = {
  item: IItem[] | [];
  setItem: React.Dispatch<React.SetStateAction<IItem[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemContext = React.createContext<ItemContextType | undefined>(undefined);
const ItemProvider: React.FC<props> = ({ children }) => {
  const [item, setItem] = useState<IItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <ItemContext.Provider value={{ item, setItem, loading, setLoading }}>
      {children}
    </ItemContext.Provider>
  );
};
const useItemContext = () => {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }
  const { item, setItem, loading, setLoading } = context;
  return {
    item,
    setItem,
    loading,
    setLoading,
  };
};

export { ItemProvider, useItemContext };
