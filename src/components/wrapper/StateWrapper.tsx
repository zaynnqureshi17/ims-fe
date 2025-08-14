import React from "react";
import BackArrow from "../common/BackArrow";
import Loader from "../common/loader";

type StateWrapperProps = {
  loading?: boolean;
  error?: string | null;
  notFound?: boolean;
  children: React.ReactNode;
};

const StateWrapper = ({
  loading,
  error,
  notFound,
  children,
}: StateWrapperProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen gap-4">
        <Loader />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">
          Something went wrong
        </h2>
        <p className="text-gray-500">{error}</p>
        <BackArrow />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center space-y-4">
        <h2 className="text-2xl font-semibold">Not Found</h2>
        <p className="text-gray-500">
          The item you are looking for doesn’t exist or was removed.
        </p>
        <BackArrow />
      </div>
    );
  }

  return <>{children}</>;
};

export default StateWrapper;
