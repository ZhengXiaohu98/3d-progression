import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  data: any;
}

export const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <Link href={data.url}>
      <div className={"rounded-xl dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] relative select-none group"}>
        <div className="absolute inset-0 bg-linear-to-bl from-orange-base to-purple-base opacity-20 blur-xl" />
        <div className="rounded-lg relative overflow-hidden">
          <Image
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            className="w-[500px] h-[250px] group-hover:scale-105 rounded-xl transition relative z-1"
            alt={data.img.alt}
            priority
          />
        </div>
        <div className="absolute z-2 inset-0 bg-linear-to-b from-transparent to-accent-white/80 dark:to-accent-dark/90">
          <p className="absolute left-0 bottom-0 p-3 md:text-xl text-sm italic font-bold text-accent-dark dark:text-accent-white">
            {data.title}
          </p>
        </div>
      </div>
    </Link>
  );
};
