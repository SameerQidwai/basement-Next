"use client";
import React, { useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export const FacebookPixelEvents = () => {
    const router = useRouter();
    const { pathname, query :searchParams } = router;
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

  useEffect(() => {
    console.log({pathname, searchParams})
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("809469287298666"); //don't forget to change this
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};