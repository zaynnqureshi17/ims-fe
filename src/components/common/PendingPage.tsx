import Logo from "@/components/common/Logo";

const PendingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Logo />
      <p className="mt-4 text-gray-500 text-sm">
        Hmm... this page is still under construction. 🚧
      </p>
    </div>
  );
};

export default PendingPage;
