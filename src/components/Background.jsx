import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-full z-[3] fixed">
        <div className="absolute w-full py-8 text-center font-semibold text-lg text-zinc-600">
          Documents.
        </div>
        <h1 className="text-[12vw] font-semibold absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] leading-none tracking-tight text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
