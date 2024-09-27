'use client';
import { MainScreenLoader } from "@/components/loader/MainScreenLoader";
import { useState, Suspense } from "react";
export default function Home() {

  return (
    <Suspense fallback={<MainScreenLoader />}>

    </Suspense>
  );
}
