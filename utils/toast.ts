"use client";
import { useState } from "react";

interface Toast {
  message: string;
}

export const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string) => {
    setToast({ message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return { toast, showToast };
};
