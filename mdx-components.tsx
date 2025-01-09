import type { MDXComponents } from 'mdx/types';
import { Codeblock } from './components/page/blog';

const TableWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full overflow-x-scroll scrollbar-hidden">
    {children}
  </div>
);
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Codeblock,
    table: (props) => (
      <TableWrapper>
        <table {...props} />
      </TableWrapper>
    ),
  }
}