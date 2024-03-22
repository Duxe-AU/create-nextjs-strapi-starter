import SectionRenderer from "@/components/SectionRenderer";
import BreakerText from "@/components/home/BreakerText";
import Milestones from "@/components/home/Milestones";
import SplitSection from "@/components/home/SplitSection";

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
