import React from "react";

const ExampleOne: React.FC = () => {
  return (
    <div className="group">
      <div className="group bg-orange-base group-has-[:checked]:bg-purple-base w-full h-6" />
      <input type="checkbox" className="cursor-pointer" /> Check to see the change
    </div>
  );
};

export default ExampleOne;
