
export const metadata = {
  title: "Blog | Xiaohu",
  description: "Explores creative animation techniques and showcases the implementation of dynamic web animations. No ordinary content, just in-depth guides and examples of how to bring web designs to life with motion."
};

export default function BlogLayout({ children }) {
  return (
    <section className="font-petrona">
      <div className="container lg:w-[1024px] md:w-[700px] sm:w-full md:py-40 sm:py-32">
        {children}
      </div>
    </section>
  );
}
