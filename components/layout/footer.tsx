import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="font-playwrite-gbs sm:px-3 md:px-6 container lg:max-w-[1060px] md:max-w-[680px] sm:max-w sm:h-12 md:h-16 flex justify-between items-center"
    >
      <div className="sm:text-xs md:text-sm flex items-center gap-1">
        <span className="sm:text-sm md:text-base">©</span> 2024 Xiaohu Zheng |{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="italic"
        >
          CC BY 4.0
        </a>
      </div>
      <div className="flex items-center sm:gap-0.5 md:gap-1 sm:text-xs md:text-sm">
        Made with
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-8 md:h-8 sm:w-6 sm:h-6 -mt-1"
          viewBox="0 0 800 800"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="lllove-grad"
            >
              <stop
                stopColor="hsl(353, 98%, 41%)"
                stopOpacity="1"
                offset="0%"
              ></stop>
              <stop
                stopColor="hsl(331, 87%, 61%)"
                stopOpacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <g
            fill="url(#lllove-grad)"
            strokeWidth="10"
            stroke="hsl(356, 77%, 40%)"
            id="heart"
          >
            <path
              d="M337.0629127342386 402.7971756941789C623.426580682501 137.06293360836858 751.0489250129754 366.43356664697615 397.20279976371285 695.8042623880026 48.95107498702464 366.43356664697615 176.57341931749897 137.06293360836858 337.0629127342386 402.7971756941789Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </div>
    </footer>
  );
};
