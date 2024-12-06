import { cn } from "@/utils"

interface ExampleBoxProps {
  className?: string;
  children: React.ReactNode;
}



export const ExampleBox: React.FC<ExampleBoxProps> = ({ className, children }) => {
  return (
    <div className={cn("not-prose w-full flex items-center justify-center border border-gray-light dark:border-gray-dark rounded-lg lg:py-20 md:py-16 sm:py-10", className)}>
      {children}
    </div>
  );
};
