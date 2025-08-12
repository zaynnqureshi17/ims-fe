import React from "react";
import Logo from "../common/Logo";

type LoadingWrapperProps = {
  loading: boolean;
  children: React.ReactNode;
};

const LoadingWrapper = ({ loading, children }: LoadingWrapperProps) => {
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Logo />
      </div>
    );
  return <>{children}</>;
};

export default LoadingWrapper;
