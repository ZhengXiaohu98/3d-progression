import dynamic from "next/dynamic";
import { CTA, Footer } from "@/components/layout";
import { PageTip } from "@/components/general";
import Link from "next/link.js";
const AboutAnimations = dynamic(() => import("./animation"));


const About: React.FC = () => {
  return (
    <div className="container lg:max-w-[1092px] sm:w-full sm:pt-28 md:pt-32 lg:pt-40 dark:text-accent-white text-accent-dark">
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold font-playwrite-gbs">
        A Little About Me
      </h1>
      <p className="sm:mt-2 md:mt-3 lg:mt-4 tracking-wide dark:text-accent-900 text-accent-300 md:text-base sm:text-sm">
        {"Hello, visitor! I’m Xiaohu, which stands for 'little tiger.' I’m an enthusiastic web developer with passion!"}
      </p>
      <Link href="/blog/animated-dashed-line-with-gsap" className="peer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-auto sm:my-6 md:my-8 lg:my-10" viewBox="0 0 700 50"><path className="hr" d="M3.1390135288238525,10.76233196258545C18.843049151897432,14.421524667739869,65.93721735239029,33.20179315090179,95.51569366455078,32.28699493408203C125.09416997671127,31.37219671726227,149.38117317199706,5.533632202148437,177.1300506591797,5.381165981292725C204.8789281463623,5.228699760437012,226.72644790649414,32.0000003027916,258.744384765625,31.390134811401367C290.7623216247558,30.78026932001114,333.75785064697266,0.4215246295928956,365.4708557128906,1.7937219142913818C397.1838607788086,3.165919198989868,416.4753268432617,39.004484436511994,445.2914733886719,39.461883544921875C474.10761993408204,39.919282653331756,506.3139181518555,4.636771450042724,534.9776000976562,4.484304904937744C563.6412820434571,4.331838359832764,587.6771551513672,38.869954240322116,613.9013671875,38.56502151489258C640.1255792236328,38.26008878946304,664.9955194091797,2.8430488872528077,689.2376708984375,2.6905829906463623C713.4798223876953,2.538117094039917,738.5112280273438,37.36323057413101,756.5022583007812,37.66816329956055C774.4932885742187,37.973096024990085,788.5112103271484,10.12556083202362,795.0672607421875,4.484304904937744" fill="none" strokeWidth="2" stroke="url(&quot;#SvgjsLinearGradient1005&quot;)" strokeLinecap="round" strokeDasharray="4 6" strokeOpacity="0.67"></path><defs><linearGradient id="SvgjsLinearGradient1005" gradientTransform="rotate(249, 0.5, 0.5)"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
      </Link>
      <PageTip text={"Curious about how this part is implemented? Check out this article to find out!"} />
      <div className="flex flex-col sm:gap-4 md:gap-6 lg:gap-8">
        <h2 className="lg:text-2xl md:text-xl sm:text-lg font-bold font-playwrite-gbs">My Journey</h2>
        <div className="flex flex-col sm:gap-4 md:gap-6 lg:gap-8 tracking-wider lg:text-lg dark:text-accent-900 text-accent-300 md:text-base sm:text-sm">
          <p>{"I currently work at Fanruan, a software company, focusing on the development of our official website. While I’m the primary developer, I’m still on a long learning journey. I have gained some experience in website internationalization and SEO, but I feel I still need to improve in performance optimization. Right now, I’m diving into Three.js, and I find UI/UX-related topics fascinating, though I sometimes feel I lack an innate sense of aesthetics 😀."}</p>
          <p>{"I graduated with a degree in Computer Science. I wasn't initially sure what type of work I enjoyed. However, I discovered the joy of web development, especially with Next.js, which has made creating websites so much easier."}</p>
          <p>{"I love challenges! If you have any great ideas or innovative concepts, feel free to reach out to me anytime."}</p>
        </div>
      </div>
      <CTA />
      <Footer />
      <AboutAnimations />
    </div>
  )
}

export default About;
