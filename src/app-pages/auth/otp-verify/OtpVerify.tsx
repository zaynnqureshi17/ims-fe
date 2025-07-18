"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import OTPBox from "@/components/otp-box";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { AuthUrls } from "@/utils/urls/urls";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
const OtpVerify = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <AuthWrapper>
      <FormProvider {...methods}>
        <AuthCardForm
          title="Verify Your Email"
          description="Enter the 6-digit OTP sent to your email address."
          footerChildren={
            <>
              <Button className="w-full hover:bg-orange-400/90 bg-orange-400/80 rounded ">
                Verify
              </Button>
              <div className="flex justify-center items-center w-full py-4 gap-2">
                <p>Didn&apos;t receive Otp? </p>
                <Link
                  href={AuthUrls.forgotPassword}
                  className="text-sm text-primary font-bold hover:underline"
                >
                  Resend
                </Link>
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
          <OTPBox />
        </AuthCardForm>
      </FormProvider>
    </AuthWrapper>
  );
};

export default OtpVerify;
