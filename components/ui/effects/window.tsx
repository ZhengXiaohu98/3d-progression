"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/utils";

interface WindowProps {
  className?: string;
  children?: React.ReactNode;
  type?: "none" | "windows-dark" | "windows-light" | "mac-dark" | "mac-light";
}

export const Window: React.FC<WindowProps> = ({ className, children, type = "mac-dark" }) => {

  return (
    <div
      className="relative w-fit h-fit"
    >
      <div className={cn("absolute left-0 bottom-full w-full flex justify-between items-center px-2.5 py-2.5 rounded-t",
        type === "none" ? "hidden" : "",
        type.includes("dark") ? "bg-[#1a1a1a]" : "",
        type.includes("light") ? "bg-[#f4f4f4]" : "",
        className
      )}>
        {
          type.includes("mac") &&
          <div className="flex items-center gap-2">
            <div className={cn("rounded-full w-2 h-2", type.includes("dark") ? "bg-[#fc645c]" : "bg-[#fc645ccc]")} />
            <div className={cn("rounded-full w-2 h-2", type.includes("dark") ? "bg-[#fbc341]" : "bg-[#fbc341d2]")} />
            <div className={cn("rounded-full w-2 h-2", type.includes("dark") ? "bg-[#3cc84a]" : "bg-[#3cc84ac5]")} />
          </div>
        }
        {
          type.includes("windows") &&
          <div className="flex w-full justify-end items-center gap-2">
            <svg className={cn("w-5 h-5", type.includes("dark") ? "text-white" : "text-accent-300")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 12h14" />
            </svg>
            <svg className={cn("w-5 h-5", type.includes("dark") ? "text-white" : "text-accent-300")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1" />
            </svg>
            <svg className={cn("w-5 h-5", type.includes("dark") ? "text-white" : "text-accent-300")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
          </div>
        }
      </div>
      {children}
    </div>
  );
};
