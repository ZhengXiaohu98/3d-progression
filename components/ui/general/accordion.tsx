import { cn } from "@/utils";

interface AccordionProps {
  header: string;
  className?: string;
  accordionClassName?: string;
  children: React.ReactNode;
  showIcon?: boolean;
}



export const Accordion: React.FC<AccordionProps> = ({ header, className, accordionClassName, children, showIcon = true }) => {
  return (
    <div className={cn("w-full", accordionClassName)}>
      <div className={cn("relative peer px-4 py-2 w-full flex items-center justify-between group/toggle", className)}>
        {header}
        {/* Dropdown Icon */}
        <svg
          className={cn("w-4 h-4 group-has-checked/toggle:rotate-180 transition ease-in-out duration-[400ms]", showIcon ? "" : "opacity-0")}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
        </svg>
        {/* input to control the open/close state */}
        <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer" />
      </div>
      <div className="grid grid-rows-[0fr] peer-has-checked:grid-rows-[1fr] transition-all ease-in-out duration-[400ms]">
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
