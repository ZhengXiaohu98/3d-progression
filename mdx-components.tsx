import type { MDXComponents } from 'mdx/types';
import { Codeblock } from './components/page/blog';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Codeblock
  }
}