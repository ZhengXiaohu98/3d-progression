import { cn } from "@/utils";

interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg className={cn("w-6 h-6", className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
    </svg>
  );
};
