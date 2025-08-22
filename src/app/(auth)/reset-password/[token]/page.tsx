import ResetPassword from "@/app-pages/auth/reset-password/ResetPassword";

type Props = {
  params: any;
};

const Page = async ({ params }: Props) => {
  const pageParams = await params;

  return <ResetPassword token={pageParams.token} />;
};

export default Page;
