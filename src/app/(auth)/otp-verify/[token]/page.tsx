import OtpVerify from "@/app-pages/auth/otp-verify/OtpVerify";

type Props = {
  params: any;
};

const Page = async ({ params }: Props) => {
  const pageParams = await params;

  return <OtpVerify token={pageParams?.token} />;
};

export default Page;
