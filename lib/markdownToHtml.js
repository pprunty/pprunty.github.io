// lib/markdownToHtml.js
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm'; // Import the GFM plugin

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)       // Parse markdown
    .use(remarkGfm)         // Add GFM support (including strikethrough)
    .use(remarkRehype, { allowDangerousHtml: true }) // Transform to HTML (rehype format) and allow HTML
    .use(rehypeHighlight)   // Highlight code blocks
    .use(rehypeStringify, { allowDangerousHtml: true }) // Stringify to HTML and allow HTML
    .process(markdown);

  return String(result);
}
