"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputPassword from "@/components/form/FormInputPassword";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { AuthUrls } from "@/utils/urls/urls";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
const ResetPassword = () => {
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
          title="Reset Your Password"
          description="Enter your new password and verification code."
          footerChildren={
            <>
              <Button className="w-full hover:bg-orange-400/90 bg-orange-400/80 rounded ">
                Reset Password
              </Button>
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
          <FormInputPassword
            label="New Password"
            placeholder="Enter new password"
            name="password"
          />
          <FormInputPassword
            label="Confirm Password"
            placeholder="Confirm new password"
            name="password"
          />
        </AuthCardForm>
      </FormProvider>
    </AuthWrapper>
  );
};

export default ResetPassword;
