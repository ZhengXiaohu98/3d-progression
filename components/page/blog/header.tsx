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
      <h1 className="font-semibold text-center sm:text-2xl md:text-3xl lg:text-4xl">{data.title}</h1>
      <div className="flex items-center sm:mt-1 md:mt-2 md:gap-4 sm:gap-2">
        {data.categories.map((category: any) => (
          <div
            key={category}
            className="sm:px-1.5 md:px-3 py-1 bg-orange-base/90 dark:bg-orange-base/70 text-white dark:text-accent-white rounded sm:text-xs md:text-sm tracking-wide italic"
          >
            {categoryMap[category]}
          </div>
        ))}
      </div>
      <div className="flex md:flex-row sm:flex-col items-center md:text-base sm:text-sm lg:gap-40 md:gap-20 sm:gap-1 sm:mt-3 md:mt-4 dark:text-accent-900 text-accent-500">
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
        alt={data.img.alt} // Corrected to 'alt' from 'ult'
        className="w-full h-auto rounded-lg sm:my-4 md:my-6 lg:my-8"
      />
    </section>
  );
};