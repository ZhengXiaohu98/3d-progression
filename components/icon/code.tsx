import { cn } from "@/utils";

interface CodeIconProps {
  className?: string;
}

export const CodeIcon: React.FC<CodeIconProps> = ({ className }) => {
  return (
    <svg className={cn("w-6 h-6", className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
    </svg>
  );
};
