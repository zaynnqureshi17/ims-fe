"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import OTPBox from "@/components/otp-box";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useForgotVerifyOTP } from "@/queries/auth/forgot-password/useForgotOTP.query";
import { useResendOTP } from "@/queries/auth/resend-password/useResendOTP.query";
import { AuthUrls } from "@/utils/urls/urls";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  token: string;
};

const OtpVerify = ({ token }: Props) => {
  const navigate = usePrefetchNavigate();

  const { mutate: onVerifyOTP, status } = useForgotVerifyOTP();
  const { mutate: onResendOTP, status: resendStatus } = useResendOTP();

  const isLoading = status === "pending";
  const isResending = resendStatus === "pending";

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      otp: "",
    },
  });

  const { handleSubmit } = methods;

  // Verify Email
  const handleVerify = (value: any) => {
    onVerifyOTP(
      { otp: value.otp, token },
      {
        onSuccess: () => {
          toast.success("OTP verified successfully");
          navigate(AuthUrls.resetPassword.replace(":token", token));
        },
      },
    );
  };

  // Resend OTP
  const handleResend = () => {
    console.log(token);
    onResendOTP(
      { token },
      {
        onSuccess: () => {
          toast.success("OTP resent successfully!");
        },
        onError: () => {
          toast.error("Failed to resend OTP. Try again.");
        },
      },
    );
  };

  return (
    <FormWrapper disabled={isLoading} onSubmit={handleSubmit(handleVerify)}>
      <AuthWrapper>
        <FormProvider {...methods}>
          <AuthCardForm
            title="Verify Your Email"
            description="Enter the 6-digit OTP sent to your email address."
            footerChildren={
              <>
                <Button
                  className="w-full hover:bg-orange-400/90 cursor-pointer bg-orange-400/80 rounded "
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
                <div className="flex justify-center items-center w-full py-4 gap-2">
                  <p>Didn&apos;t receive OTP?</p>
                  <button
                    type="button"
                    disabled={isResending}
                    onClick={handleResend}
                    className="text-sm text-primary font-bold hover:underline disabled:opacity-50"
                  >
                    Resend
                  </button>
                </div>

                <div className="p-4 gap-2 flex justify-between items-center text-sm text-muted-foreground">
                  <ArrowLeft className="w-5 h-5" />
                  <Link
                    href={AuthUrls.signIn}
                    className="text-sm text-primary hover:underline "
                  >
                    Back to Login
                  </Link>
                </div>
              </>
            }
          >
            <OTPBox name="otp" />
          </AuthCardForm>
        </FormProvider>
      </AuthWrapper>
    </FormWrapper>
  );
};

export default OtpVerify;
