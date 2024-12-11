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
      className={cn("transition-all flex relative group rounded !overflow-visible", className)}
      style={{ perspective: "1000px" }}
    >
      <div className="w-1/2 h-full flex justify-center items-center" style={{ backgroundColor: pageColor }}>{childrenArray[0]}</div>
      <div className="w-1/2 h-full flex justify-center items-center" style={{ backgroundColor: pageColor }}>{childrenArray[3]}</div>
      <div
        className={`w-1/2 h-full flex justify-center items-center absolute left-1/2 z-[1] origin-left transition ease-in-out duration-700`}
        style={{
          transform: pageState === 1 ? "rotateY(-180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
          backgroundColor: pageColor
        }}
        onClick={() => setPageState(pageState ^ 1)}
      >
        {childrenArray[1]}
        <div
          className={cn(`w-full h-full flex justify-center items-center absolute left-full top-0 origin-left transition ease-in-out duration-700`, pageState === 1 ? "opacity-100" : "opacity-0")}
          style={{
            transform: "rotateY(180deg)",
            backgroundColor: pageColor
          }}
        >
          {childrenArray[2]}
        </div>
      </div>
    </div>
  );
};

