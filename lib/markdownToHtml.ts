import ad from '@asciidoctor/core';
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  if (process.env.USE_REHYPE) {
    const result = await unified()
      .data("settings", { fragment: true })
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, {
        allowDangerousHtml: true,
      })
      .use(rehypeHighlight)
      .use(rehypeStringify, {
        allowDangerousHtml: true,
      })
      .process(markdown);
    return result.toString();
  } else {
    const a = ad();
    return a.convert(markdown);
  }
}
