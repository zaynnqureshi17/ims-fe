"use client";
import NextTopLoader from "nextjs-toploader";
const AppLoader = () => {
  return (
    <NextTopLoader
      color="#FBAF3F"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={false}
      showSpinner={false}
      easing="ease"
      speed={10}
      zIndex={1600}
      showAtBottom={false}
      
    />
  );
};

export default AppLoader;
