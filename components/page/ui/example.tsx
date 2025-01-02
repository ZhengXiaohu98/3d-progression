"use client";
import { useState } from "react";
import { cn } from "@/utils";

interface ExampleBoxProps {
  className?: string;
  children: React.ReactNode;
}

export const ExampleBox: React.FC<ExampleBoxProps> = ({ className, children }) => {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div
      key={key}
      className={cn(
        "not-prose w-full flex items-center justify-center border border-gray-light dark:border-gray-dark rounded-lg lg:py-20 md:py-16 sm:py-10 relative",
        className
      )}
    >
      <button
        onClick={handleReload}
        className="absolute md:top-4 md:right-4 top-2.5 right-2.5 z-[10] hover:rotate-180 transition ease-in-out duration-500"
      >
        <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
        </svg>

      </button>

      {children}
    </div>
  );
};
