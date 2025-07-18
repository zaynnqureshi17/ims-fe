import React from "react";

type AuthWrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {children}
    </div>
  );
};

export default AuthWrapper;
