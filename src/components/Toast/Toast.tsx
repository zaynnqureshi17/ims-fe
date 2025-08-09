"use client";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  const toastStyle = {
    minHeight: "50px",
    fontSize: "15px",
    padding: "5px 8px",
    borderRadius: "8px",
  };

  return (
    <ToastContainer
      theme="light"
      role="alert"
      position={"top-right"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      autoClose={5000}
      toastClassName="ipp-toast"
      toastStyle={toastStyle}
      limit={5}
    />
  );
};

export default Toast;
