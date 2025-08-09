"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputField from "@/components/form/FormInputField";
import FormInputPassword from "@/components/form/FormInputPassword";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { useSignIn } from "@/queries/auth/sign-in/useSignIn.query";
import { AuthUrls } from "@/utils/urls/urls";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { mutate: signIn, status } = useSignIn();
  const isLoading = status === "pending";

  const methods = useForm<SignInFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;
  const handleSignIn = (data: SignInFormData) => {
    signIn(
      { data },
      {
        onSuccess: () => {
          toast.success("Sign in successful!");
        },
      },
    );
  };

  return (
    <FormWrapper disabled={isLoading} onSubmit={handleSubmit(handleSignIn)}>
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
                <Button type="submit" disabled={isLoading} variant="secondary">
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
    </FormWrapper>
  );
};

export default SignInForm;
