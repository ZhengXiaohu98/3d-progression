import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/utils';

interface BlogTipProps {
  text: string;
  className?: string;
}

export const BlogTip: React.FC<BlogTipProps> = ({ text, className = "" }) => {
  return (
    <div className={cn("flex p-2 md:p-3 gap-2 rounded-lg dark:bg-[#be185d] bg-[#c2410c] tracking-wide text-white transition", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-6 md:h-6 w-5 h-5 shrink-0 mt-0.5 fill-current stroke-none"
        viewBox="0 0 32 32"
      >
        <title>{"Notice"}</title>
        <path d="M15.5 3C8.044 3 2 9.044 2 16.5S8.044 30 15.5 30 29 23.956 29 16.5 22.956 3 15.5 3zm0 24C9.701 27 5 22.299 5 16.5S9.701 6 15.5 6 26 10.701 26 16.5 21.299 27 15.5 27zm0-17a1.5 1.5 0 0 0-1.5 1.5v5.062a1.5 1.5 0 0 0 3 0V11.5a1.5 1.5 0 0 0-1.5-1.5zm0 10a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 20z" />
      </svg>
      {text}
    </div>
  );
};

BlogTip.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
