"use client";

import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputField from "@/components/form/FormInputField";
import FormInputPassword from "@/components/form/FormInputPassword";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { AuthUrls } from "@/utils/urls/urls";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; 

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const methods = useForm<SignInFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    }});
  const { handleSubmit } = methods;
  const router = useRouter(); 

  const onSubmit = (data: SignInFormData) => {
    const email = data.email;

    // Optional: perform API sign-in logic here

    //  Redirect based on email
    switch (email) {
      case "admin@example.com":
        router.push("/admin/dashboard");
        break;
      case "finance@example.com":
        router.push("/finance-manager/dashboard");
        break;
      case "outlet@example.com":
        router.push("/outlet-manager/dashboard");
        break;
      case "staff@example.com":
        router.push("/staff/dashboard");
        break;
      case "brand@example.com":
        router.push("/brand-manager/dashboard");
        break;
      default:
        console.warn("Unknown email. Please re-enter your credentials.");
        break;
    }
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
                onClick={handleSubmit(onSubmit)}
                className="w-full hover:bg-orange-400/70 bg-orange-400/80"
              >
                Sign in
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
