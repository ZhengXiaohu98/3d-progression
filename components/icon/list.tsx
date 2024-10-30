import { cn } from "@/utils";

interface ListIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ListIcon: React.FC<ListIconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <title>List View</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
      />
    </svg>
  );
};
