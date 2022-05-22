import { marked } from "marked";

export default async function markdownToHtml(markdown: string) {
  return await marked.parse(markdown);
}
