import Markdown from "../Markdown";

type BreakerTextProps = {
  message?: string;
}

export default function BreakerText({ message }: BreakerTextProps) {
  return (
    <section className="container !max-w-screen-sm text-center py-10 mt-12 mb-16 border-b-2 border-neutral-700">
      {message && <Markdown>{message}</Markdown>}
    </section>
  )
}
