import { parse } from "marked";

type MarkdownProps = {
  children: string;
}

export default function Markdown({ children }: MarkdownProps) {
  // find all source that fetch from Strapi media
  const content = children
    .replace(/]\(\/uploads\//g, `](${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/`);

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: parse(content) }}
    ></div>
  )
}
