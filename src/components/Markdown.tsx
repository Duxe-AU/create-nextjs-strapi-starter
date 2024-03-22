import { parse } from "marked";

type MarkdownProps = {
  children: string;
  className?: string;
}

export default function Markdown({ children, className = "" }: MarkdownProps) {
  // find all source that fetch from Strapi media
  const content = children
    .replace(/]\(\/uploads\//g, `](${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/`);

  return (
    <div
      className={`prose ${className}`}
      dangerouslySetInnerHTML={{ __html: parse(content) }}
    ></div>
  )
}
