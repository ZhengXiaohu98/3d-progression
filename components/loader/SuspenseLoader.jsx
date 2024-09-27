import { useProgress } from "@react-three/drei";

export const SuspenseLoader = () => {

  const { progress } = useProgress();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black/70">
      <div className="lg:mt-6 sm:mt-4 font-bold lg:text-3xl md:text-2xl sm:text-xl text-white">In Progress: {Math.trunc(progress)}%</div>
    </div>
  )
}