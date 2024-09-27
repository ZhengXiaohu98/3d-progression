import { MainScreenLoader } from "@/components/loader/MainScreenLoader";
import { Header } from "@/components/home/header";
import { Suspense } from "react";
export default function Home() {

  return (
    <Suspense fallback={<MainScreenLoader />}>
      <Header />
    </Suspense>
  );
}
