"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputField from "@/components/form/FormInputField";
import FormInputPassword from "@/components/form/FormInputPassword";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { AuthUrls } from "@/utils/urls/urls";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const SigInForm = () => {
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
          title="Welcome Back"
          description="Sign in to your account"
          footerChildren={
            <>
              <div className="flex justify-end w-full py-4">
                <Link
                  href={AuthUrls.forgotPassword}
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button className="w-full hover:bg-orange-400/70 bg-orange-400/80">
                Sign in
              </Button>
              <p className="text-sm text-muted-foreground">
                Don&lsquo;t have an account?{" "}
                <Link
                  href="/auth/sign-up"
                  className="text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </>
          }
        >
          <FormInputField
            label="Email Address"
            placeholder="Enter your Email"
            type="email"
          />
          <FormInputPassword
            label="Password"
            placeholder="Enter your password"
            name="password"
          />
        </AuthCardForm>
      </FormProvider>
    </AuthWrapper>
  );
};

export default SigInForm;
