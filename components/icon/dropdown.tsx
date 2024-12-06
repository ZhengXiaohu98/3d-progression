import { cn } from "@/utils";

interface DropdownIconProps {
  className?: string;
}

export const DropdownIcon: React.FC<DropdownIconProps> = ({ className }) => {
  return (
    <svg className={cn("w-6 h-6", className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
    </svg>
  );
};
