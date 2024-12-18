// components/Loading.js
'use client'

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 3 seconds
    const timer = setTimeout(() => {
      gsap.to("#loader", { opacity: 0, duration: 1, onComplete: () => setIsLoading(false) });
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isLoading && (
        <div
          id="loader"
          className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50"
        >
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
