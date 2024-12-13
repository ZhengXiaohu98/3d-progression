/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { motion, AnimatePresence } from "framer-motion";

interface CaptureProps {
  children: React.ReactNode;
}

export const Capture: React.FC<CaptureProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleConvert = async () => {
    if (!contentRef.current) return;

    setIsConverting(true);

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
      });

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((blob) => resolve(blob), "image/png")
      );

      if (!blob) {
        console.error("Failed to create blob");
        return;
      }

      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
    } catch (error) {
      console.error("Error converting HTML to canvas:", error);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!previewUrl) return;

    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = "liber-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup
    URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  };

  const handleClosePreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
  };

  return (
    <div className="relative group">
      <div ref={contentRef}>{children}</div>
      <button
        onClick={handleConvert}
        disabled={isConverting}
        className="p-1 absolute top-1 right-1 rounded-full dark:bg-accent-300/75 bg-accent-aaa/50 transition ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-50 opacity-0"
      >
        <svg
          className="w-6 h-6 text-accent-300 dark:text-accent-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
          />
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <div className="absolute inset-0 bg-transparent" onClick={handleClosePreview} />
            <div className="rounded-lg sm:p-2 md:p-4 lg:p-6 sm:max-w-xs md:max-w-lg lg:max-w-xl w-full flex flex-col items-center sm:gap-2 md:gap-4 relative z-51">
              <img src={previewUrl} alt="Preview Image" />
              <button
                onClick={handleDownload}
                className="text-accent-white"
              >
                <svg className="md:w-8 md:h-8 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
