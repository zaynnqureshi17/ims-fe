"use client";
import { IUser } from "@/utils/types/user.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type UserContextType = {
  user: IUser[] | [];
  setUser: React.Dispatch<React.SetStateAction<IUser[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);
const UserProvider: React.FC<props> = ({ children }) => {
  const [user, setUser] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  const { user, setUser, loading, setLoading } = context;
  return {
    user,
    setUser,
    loading,
    setLoading,
  };
};

export { UserProvider, useUserContext };
