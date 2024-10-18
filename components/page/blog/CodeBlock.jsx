"use client";
import { CopyBlock, atomOneDark } from 'react-code-blocks';

const Code = ({ code, language, title }) => {
  return (
    <div className="not-prose  flex flex-col max-w-[724px] text-sm tracking-wider rounded border dark:border-accent-300 border-gray-light">
      {title &&
        <div className="py-2 pl-5 dark:bg-[#181818] dark:text-accent-900 bg-[#fafafa] text-accent-300 text-lg border-b dark:border-accent-300 border-gray-light">
          {title}
        </div>
      }
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={false}
        theme={
          {
            ...atomOneDark,
            backgroundColor: { light: "#fafafa", dark: "#121212" },
          }}
        wrapLines={true}
        codeBlock
      />
    </div>

  );
}

export default Code;