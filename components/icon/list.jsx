import { cn } from "@/utils";

export const ListIcon = ({ className }) => {
  return (
    <svg className={cn("w-6 h-6", className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
    </svg>
  )
}