import { cn } from "@/utils";

interface WindowIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const WindowIcon: React.FC<WindowIconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8h.01M9 8h.01M12 8h.01M4 11h16M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
    </svg>


  );
};
