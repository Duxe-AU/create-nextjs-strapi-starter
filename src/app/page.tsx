import SectionRenderer from "@/components/SectionRenderer";
import BreakerText from "@/components/home/BreakerText";
import Milestones from "@/components/home/Milestones";
import SplitSection from "@/components/home/SplitSection";

export const revalidate = process.env.NEXT_PUBLIC_BUILD_SSG === "1" && process.env.NODE_ENV === "production"
  ? null
  : 0;

export default function HomePage() {
  return (
    <main>
      <SectionRenderer
        slug="/"
        sections={[
          { queryParam: { "home.milestones": { populate: "items.image" } }, component: Milestones },
          { queryParam: { "home.breaker-text": { populate: "message" } }, component: BreakerText, },
          { queryParam: { "home.split-section": { populate: ["firstColumnImage", "firstColumnContent", "secondColumnImage", "secondColumnContent"] } }, component: SplitSection, },
        ]}
      />
    </main>
  )
}
