"use client";
import AuthCardForm from "@/components/card/auth/AuthCardForm";
import FormInputPassword from "@/components/form/FormInputPassword";
import { Button } from "@/components/ui/button";
import AuthWrapper from "@/components/wrapper/AuthWrapper";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useResetPassword } from "@/queries/auth/reset-password/useResetPassword.query";
import { AuthUrls } from "@/utils/urls/urls";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  token?: string;
};

interface ResetPasswordForm {
  newPassword: string;
  confirmPassword: string;
}

const ResetPassword = ({ token }: Props) => {
  const navigate = usePrefetchNavigate();
  const { mutate: resetPassword, status } = useResetPassword();
  const isLoading = status === "pending";

  const methods = useForm<ResetPasswordForm>({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit } = methods;

  const handleResetPassword = (data: ResetPasswordForm) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    resetPassword(
      {
        body: { new_password: data.newPassword },
        token: token || "",
      },
      {
        onSuccess: () => {
          toast.success("Password reset successful!");
          navigate(AuthUrls.signIn);
        },
      },
    );
  };

  return (
    <FormWrapper
      disabled={isLoading}
      onSubmit={handleSubmit(handleResetPassword)}
    >
      <AuthWrapper>
        <FormProvider {...methods}>
          <AuthCardForm
            title="Reset Your Password"
            description="Enter your new password below."
            footerChildren={
              <>
                <Button
                  type="submit"
                  className="w-full hover:bg-orange-400/90 bg-orange-400/80 rounded"
                >
                  Reset Password
                </Button>
                <div className="p-4 gap-2 flex justify-between items-center text-sm text-muted-foreground">
                  <ArrowLeft className="w-5 h-5" />
                  <Link
                    href={AuthUrls.signIn}
                    className="text-sm text-primary hover:underline"
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
              name="newPassword"
            />
            <FormInputPassword
              label="Confirm Password"
              placeholder="Confirm new password"
              name="confirmPassword"
            />
          </AuthCardForm>
        </FormProvider>
      </AuthWrapper>
    </FormWrapper>
  );
};

export default ResetPassword;
