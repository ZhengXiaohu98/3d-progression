"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  toast: { message: string } | null;
}

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="fixed sm:bottom-10 md:bottom-20 right-10 font-semibold md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-sm rounded dark:bg-white dark:text-accent-300 bg-accent-300 text-accent-white"
        >
          {toast.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
