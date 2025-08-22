import { Controller, useFormContext } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";

type Props = {
  name: string;
};

const OTPBox = ({ name }: Props) => {
  const { control } = useFormContext();

  return (
    <>
      <Label className="mt-4">Verification OTP</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />
    </>
  );
};

export default OTPBox;
