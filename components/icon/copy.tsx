import { cn } from "@/utils";

interface GridIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const CopyIcon: React.FC<GridIconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <title>copy</title>
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.2" d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z" />
    </svg>
  );
};
