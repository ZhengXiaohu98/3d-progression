"use client";
import React, { useState } from "react";
import { cn } from "@/utils";

interface TabProps {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface TabsProps {
  tabs: string[];
  children: React.ReactElement<TabProps>[];
  direction?: "horizontal" | "vertical";
}

export const Tab: React.FC<TabProps> = ({ children, isActive }) => {
  return (
    <div className={cn("w-full", isActive ? "transition duration-500 ease-in-out" : "opacity-0 translate-y-[10%] scale-95 h-0")}>
      {children}
    </div>
  );
};


export const Tabs: React.FC<TabsProps> = ({ tabs, children, direction = "horizontal" }) => {

  // default first tab
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (value: string) => {
    if (value !== activeTab) {
      setActiveTab(value);
    }
  };

  return (
    <div className={cn("not-prose w-full mx-auto flex", direction === "horizontal" ? "flex-col" : "flex-row")}>
      {/* Tab Navigation */}
      <div className={cn("flex shrink-0", direction === "horizontal" ? "flex-row" : "flex-col")}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={cn("py-2 px-4 transition rounded-sm cursor-pointer", activeTab === tab ? "font-bold bg-accent-ccc/30 dark:bg-accent-300/70" : "")}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={cn("bg-gray-light dark:bg-gray-dark", direction === "horizontal" ? "my-2 md:my-4 h-px" : "w-px md:mx-5 mx-2.5")} />

      {/* Tab Wrapper */}
      <div className="w-full">
        {children.map((child) =>
          React.cloneElement(child, {
            isActive: child.props.title === activeTab,
          })
        )}
      </div>
    </div>
  );
};
