/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ErrorResponseType {
  data?: {
    status?: number;
    message?: string;
    errors?: any;
  };
}
export type OTPTypes = "email" | "mobile";
