"use client";
import React, { useState } from 'react';
import { cn } from '@/utils';
interface BookProps {
  pageColor?: string;
  className?: string;
  children: React.ReactNode;
}

export const Book: React.FC<BookProps> = ({ pageColor = "#ededed", className, children }) => {
  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length !== 4) {
    throw new Error('This component requires exactly 4 div elements as children.');
  }

  const [pageState, setPageState] = useState(0);

  return (
    <div
      className={cn("transition-all flex relative group/book rounded-sm overflow-visible!", className)}
      style={{
        perspective: "1000px",
      }}
    >
      <div className={cn("w-1/2 h-full flex justify-center items-center", pageState === 1 ? "pointer-events-none" : "")} style={{ backgroundColor: pageColor }}>{childrenArray[0]}</div>
      <div className={cn("w-1/2 h-full flex justify-center items-center", pageState === 1 ? "" : "pointer-events-none")} style={{ backgroundColor: pageColor }}>{childrenArray[3]}</div>
      <div
        className={cn(`w-1/2 h-full flex justify-center items-center absolute left-1/2 z-1 origin-left transition ease-in-out duration-700`, pageState === 1 ? "pointer-events-none" : "")}
        style={{
          transform: pageState === 1 ? "rotateY(-180deg) " : "rotateY(0deg)",
          transformStyle: "preserve-3d",
          backgroundColor: pageColor
        }}
      >
        {childrenArray[1]}
        <div
          className={cn(`w-full h-full flex justify-center items-center absolute left-full top-0 origin-left transition ease-in-out duration-700`, pageState === 1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
          style={{
            transform: "rotateY(180deg)",
            backgroundColor: pageColor
          }}
        >
          {childrenArray[2]}
        </div>
        <button className={cn("cursor-pointer absolute bottom-4 right-4 z-10 opacity-100 lg:group-hover/book:opacity-100 lg:opacity-0 transition-all ease-in-out pointer-events-auto!")} onClick={() => { setPageState(pageState ^ 1) }}>
          <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
          </svg>
        </button>
      </div>
    </div>
  );
};

