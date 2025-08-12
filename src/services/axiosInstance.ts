// TODO : To remove later
/* eslint-disable no-console */
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// Custom Axios request configuration interface

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Base URL for all API requests
  timeout: 10000, // Set a timeout of wait for 10 seconds
  headers: {
    "Content-Type": "application/json", // Send data as JSON
    "Accept": "application/json", // Expect JSON response
  },
});

export default axiosInstance;

// Request interceptor run before the request is sent
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token");

    // Get the token from Cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Return the modified config
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
// Response interceptor run before the response is sent
axiosInstance.interceptors.response.use(
  (response) => {
    // TODO: To remove later
    console.log(
      `%cSuccess: ${response?.config?.url}`,
      "color: green; background-color:rgb(225, 255, 230); font-weight: bold; padding: 8px;",
      response?.data,
    );

    // You can modify the response here
    return response?.data;
  },
  (error: AxiosError) => {
    const error_response = {
      status: error?.response?.status,
      data: error?.response?.data,
    };
    // TODO: To remove later
    console.log(
      `%cError: ${error?.config?.url}`,
      "color: red; background-color:rgb(255, 225, 225); font-weight: bold; padding: 8px;",
      error_response,
    );

    return Promise.reject(error);
  },
);
