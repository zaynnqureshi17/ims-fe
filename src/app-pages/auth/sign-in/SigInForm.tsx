"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputField from "@/components/form/FormInputField";
import FormInputPassword from "@/components/form/FormInputPassword";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { AuthUrls } from "@/utils/urls/urls";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = usePrefetchNavigate();
  const methods = useForm<SignInFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    const email = data.email;
    let targetRoute = "";

    // Determine route based on email
    if (email === "admin@example.com") {
      targetRoute = "/admin/dashboard";
    } else if (email === "finance@example.com") {
      targetRoute = "/finance-manager/dashboard";
    } else if (email === "outlet@example.com") {
      targetRoute = "/outlet-manager/dashboard";
    } else if (email === "staff@example.com") {
      targetRoute = "/stuff/dashboard";
    } else if (email === "brand@example.com") {
      targetRoute = "/brand-manager/dashboard";
    } else {
      console.warn("Unknown email. Please re-enter your credentials.");
      setIsLoading(false);
      return;
    }
    navigate(targetRoute);
  };

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

              <Button
                type="submit"
                disabled={isLoading}
                variant="secondary"
                onClick={handleSubmit(onSubmit)}
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="animate-spin w-4 h-4" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Don&apos;t have an account?{" "}
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
            name="email"
            label="Email Address"
            placeholder="Enter your Email"
            type="email"
          />
          <FormInputPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
        </AuthCardForm>
      </FormProvider>
    </AuthWrapper>
  );
};

export default SignInForm;
