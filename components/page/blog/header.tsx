import Image from "next/image";

interface BlogHeaderProps {
  data: any;
}

const categoryMap: { [key: string]: string } = {
  svg: "Svg",
  gsap: "Gsap",
  tailwind: "Tailwindcss",
  three: "three.js",
};

export const BlogHeader: React.FC<BlogHeaderProps> = ({ data }) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="font-semibold text-center text-2xl md:text-3xl lg:text-4xl">{data.title}</h1>
      <div className="flex md:flex-row flex-col items-center md:text-base text-sm lg:gap-40 md:gap-20 gap-1 mt-3 md:mt-4 dark:text-accent-900 text-accent-500">
        <p>
          Written by: <span className="font-semibold dark:text-accent-white text-accent-300 italic">Xiaohu</span>
        </p>
        <p>
          Published on: <span className="font-semibold dark:text-accent-white text-accent-300 italic">{data.date}</span>
        </p>
      </div>
      <Image
        src={data.img.src}
        width={data.img.width}
        height={data.img.height}
        alt={data.img.alt} 
        className="w-full h-auto rounded-lg my-4 md:my-6 lg:my-8"
      />
    </section>
  );
};
