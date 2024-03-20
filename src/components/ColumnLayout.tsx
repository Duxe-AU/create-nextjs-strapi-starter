import { parse } from "marked";
import Markdown from "./Markdown";

type ColumnLayoutProps = {
  items?: {
    content: string;
  }[];
}

export default function ColumnLayout({
  items = [],
}: ColumnLayoutProps) {
  const gridCols = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
  ];

  if (gridCols[items.length] == null) return null;

  return (
    <section className="container">
      <div className={`grid ${gridCols[items.length - 1]} gap-2`}>
        {items
          .filter(({ content }) => content != null)
          .map(
          ({ content, }, index) => <Markdown key={index}>{content}</Markdown>
        )}
      </div>
    </section>
  )
}
