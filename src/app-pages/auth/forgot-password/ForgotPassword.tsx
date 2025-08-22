"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputField from "@/components/form/FormInputField";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useForgotRequestOTP } from "@/queries/auth/forgot-password/useForgotOTP.query";
import { AuthUrls } from "@/utils/urls/urls";
import { ArrowLeft, Mail, Shield } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
const ForgotPassword = () => {
  const navigate = usePrefetchNavigate();
  const { mutate: onRequestOTP, status } = useForgotRequestOTP();
  const isLoading = status === "pending";

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const { handleSubmit } = methods;
  const handleRequest = (data: any) => {
    onRequestOTP(
      { body: data },
      {
        onSuccess: (response: any) => {
          toast.success("OTP sent successfully");
          const token = response?.body?.token;
          navigate(AuthUrls.OTPVerify.replace(":token", String(token)));
        },
      },
    );
  };

  return (
    <FormWrapper disabled={isLoading} onSubmit={handleSubmit(handleRequest)}>
      <AuthWrapper>
        <FormProvider {...methods}>
          <AuthCardForm
            title="Forgot Password?"
            description="Enter your email and we'll send you an OTP to reset your password."
            footerChildren={
              <>
                <Button className="w-full hover:bg-orange-400/90 cursor-pointer bg-orange-400/80 rounded ">
                  Sent OTP
                </Button>
                <div className="p-4 gap-2 flex justify-between items-center text-sm text-muted-foreground">
                  <ArrowLeft className="w-5 h-5" />
                  <Link
                    href={AuthUrls.signIn}
                    className="text-sm text-primary cursor-pointer hover:underline "
                  >
                    Back to Login
                  </Link>
                </div>
                <div className="bg-accent text-black  p-4 flex justify-between items-center rounded gap-2 ">
                  <Shield className="w-5 h-5 text-orange-400/90" />
                  <p className="text-sm text-muted-foreground">
                    Your security is our priority. OTP will expire in 10
                    minutes.
                  </p>
                </div>
              </>
            }
          >
            <FormInputField
              name="email"
              label="Email Address"
              placeholder="Enter your Email Address"
              type="email"
              rightIcon={<Mail className="w-5 h-5" />}
            />
          </AuthCardForm>
        </FormProvider>
      </AuthWrapper>
    </FormWrapper>
  );
};

export default ForgotPassword;
