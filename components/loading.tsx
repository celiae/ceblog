import React from "react";
const Loading = () => {
  return (
    <div className="fixed z-40 top-0">
      <div className="text-white">
        <span
          className="absolute w-screen bg-gradient-to-r 
        from-cyan-900 to-blue-500
        dark:from-cyan-500 dark:to-blue-900 h-2 animate-linear-moving"
        ></span>
      </div>
    </div>
  );
};

export default Loading;
