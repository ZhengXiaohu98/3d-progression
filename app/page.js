'use client';
import { Env } from "@/components/home/Env";
import { useState } from "react";
export default function Home() {
  const [selectedFrame, setSelectedFrame] = useState(false);

  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#97D9E1] to-[#9A9ADC]">
      <Env selectedFrame={selectedFrame} setSelectedFrame={setSelectedFrame} />
      <div className="fixed top-0 left-0 text-[#333] hover:cursor-pointer" onClick={() => { setSelectedFrame(false) }}>Go Back</div>
    </main>
  );
}
