import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkDirective from "remark-directive";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";
import { remarkGenericHtml } from "./directive";

export async function convertToHtml(markdown: string) {
    const result = await unified()
      .data("settings", { fragment: true })
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkDirective)
      .use(remarkGenericHtml)
      .use(remarkRehype, {
        allowDangerousHtml: true,
      })
      .use(rehypeHighlight)
      .use(rehypeStringify, {
        allowDangerousHtml: true,
      })
      .process(markdown);
    return result.toString();
}
