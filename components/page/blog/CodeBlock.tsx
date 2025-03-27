"use client";
import { CopyIcon } from "@/components/icon";
import { useRef, DetailedHTMLProps } from "react";
import { useToast } from "@/utils";
import { Toast } from "@/components/general";

interface CodeblockProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  "data-language"?: string;
}

const determineLanguage = (classname: string) => {
  if (!classname) return;

  return classname.split('-')[1];
};

export const Codeblock = ({ children, ...props }: CodeblockProps) => {

  const { toast, showToast } = useToast();
  const language = determineLanguage(props?.className as string);
  const ref = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (typeof window === "undefined" || !ref.current) return;
    window.navigator.clipboard.writeText(ref.current.innerText);
    showToast("Code Copied!")
  };

  return (
    <figure className="relative rounded-lg border dark:border-accent-300 border-[#ccc] group">
      {
        language &&
        <div className="flex items-center w-full justify-between h-10 md:h-12 px-3 md:px-4 dark:bg-[#282828] bg-[#f8f8f8] border-b dark:border-accent-300 border-[#ccc] rounded-t-lg">
          <div className="flex gap-2 text-sm items-center">
            {
              language === "jsx" &&
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
                <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
              </svg>
            }
            {
              language === "js" &&
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 h-6" viewBox="0 0 14 14">
                <path d="m 5.868485,12.493589 c -0.48791,-0.2883 -0.90366,-0.5407 -0.92387,-0.561 -0.0202,-0.02 0.15951,-0.1208 0.3994,-0.2237 l 0.43617,-0.1869 0.55527,0.3254 c 0.3054,0.179 0.61154,0.3247 0.68031,0.3238 0.0688,-9e-4 1.09678,-0.5627 2.28446,-1.2485 l 2.15943,-1.2467996 0,-2.6593 0,-2.6593 -2.15943,-1.2534 c -1.18768,-0.6893 -2.21273,-1.2546 -2.27788,-1.2561 -0.0652,-10e-4 -1.10027,0.5633 -2.30027,1.2549 l -2.1818,1.2576 -0.0249,2.6348 -0.0249,2.6347 0.72909,0.4247996 c 0.69449,0.4047 1.07393,0.5086 1.30183,0.3564 0.28509,-0.1904 0.31919,-0.5186996 0.31919,-3.0728996 l 0,-2.5938 0.35208,0.029 0.35209,0.029 0.0248,2.8243 c 0.0247,2.8087996 0.0237,2.8258996 -0.19059,3.1451996 -0.29398,0.4381 -0.87921,0.6291 -1.45552,0.475 -0.481,-0.1287 -1.78964,-0.8627 -2.04894,-1.1493 -0.16816,-0.1858996 -0.17919,-0.3759996 -0.17919,-3.0888996 0,-2.6722 0.013,-2.9052 0.17225,-3.0811 0.2703,-0.2986 4.88644,-2.92770004 5.14007,-2.92750004 0.25583,3.0004e-4 4.6989,2.52390004 5.06233,2.87540004 l 0.23472,0.227 0,2.9063 0,2.9063 -0.23472,0.2296996 c -0.19757,0.1933 -3.61169,2.2228 -4.57239,2.718 -0.46713,0.2407 -0.67716,0.1931 -1.62906,-0.3694 z m 1.44358,-2.7091996 c -0.87553,-0.2738 -1.30705,-0.7383 -1.36608,-1.4704 -0.0256,-0.3175 -0.0234,-0.3193 0.41172,-0.3475 0.41906,-0.027 0.44008,-0.016 0.49982,0.2557 0.13773,0.6271 0.88818,0.93 2.04447,0.8251 0.72834,-0.066 1.05545,-0.2935 1.05545,-0.734 0,-0.2714 -0.0486,-0.3417 -0.32861,-0.4759 -0.18073,-0.087 -0.72998,-0.2039 -1.22054,-0.2608 -0.49057,-0.057 -1.09138,-0.1686 -1.33514,-0.2482 -1.44856,-0.4735 -1.26873,-2.3669 0.26138,-2.7522 0.50799,-0.1279 1.66812,-0.1316 2.11757,-0.01 0.74685,0.2074 1.25803,0.7525 1.31948,1.4068 0.0308,0.3281 0.0302,0.3287 -0.3922,0.3563 -0.41555,0.027 -0.42637,0.02 -0.61027,-0.3756 -0.22179,-0.4776 -0.5489,-0.6246 -1.40777,-0.6325 -0.76434,-0.01 -1.2101,0.2153 -1.24957,0.6231 -0.0394,0.4065 0.21476,0.5231 1.57818,0.7241 1.41578,0.2086 1.98633,0.472 2.20468,1.0177 0.35736,0.8932 -0.13704,1.7734 -1.16806,2.0795 -0.60826,0.1807 -1.8607,0.1887 -2.41451,0.016 z" />
              </svg>
            }
            {
              language === "tsx" &&
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 16 16">
                <path className="fill-current" fillRule="nonzero" clipRule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" />
              </svg>
            }
            {
              language === "html" &&
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
              </svg>
            }
            {
              language === "css" &&
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
              </svg>
            }
            <p className="text-sm">{language}</p>
          </div>
          <div onClick={handleCopy} className="lg:opacity-0 group-hover:opacity-100 cursor-pointer transition duration-150 dark:hover:bg-gray-dark hover:bg-gray-dark/15 p-.5 rounded-md w-7 h-7 flex items-center justify-center">
            <CopyIcon />
          </div>
        </div>
      }
      <pre
        ref={ref}
        {...props}
      >
        {children}
      </pre>
      <Toast toast={toast} />
    </figure>
  );
}
