import React from "react";

type AuthWrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen auth-wrapper">
      {children}
    </div>
  );
};

export default AuthWrapper;
