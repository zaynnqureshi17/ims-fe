"use client";
import NextTopLoader from "nextjs-toploader";
const AppLoader = () => {
  return (
    <NextTopLoader
      color="#291E48"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={false}
      showSpinner={false}
      easing="ease"
      speed={200}
      zIndex={1600}
      showAtBottom={false}
      
    />
  );
};

export default AppLoader;
