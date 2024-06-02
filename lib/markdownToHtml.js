// lib/markdownToHtml.js
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)       // Parse markdown
    .use(remarkRehype)      // Transform to HTML (rehype format)
    .use(rehypeHighlight)   // Highlight code blocks
    .use(rehypeStringify)   // Stringify to HTML
    .process(markdown);

  return String(result);
}
