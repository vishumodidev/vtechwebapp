import { Helmet } from "react-helmet-async";
import AboutStats from "../components/about/AboutStats";
import MissionVision from "../components/about/MissionVision";
import LeadershipMessage from "../components/about/LeadershipMessage";
import WhyWeExist from "../components/about/WhyWeExist";
import JourneyTimeline from "../components/about/JourneyTimeline";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About VTech | Skill Development & Placement</title>
        <meta
          name="description"
          content="Learn about VTech’s mission, vision, leadership, and journey in building industry-ready careers."
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "VTech",
            description:
              "Industry-aligned skill development and placement-focused training institution.",
            foundingDate: "2000",
            areaServed: "India",
          })}
        </script>
      </Helmet>

      <AboutStats />
      <MissionVision />
      <LeadershipMessage />
      <WhyWeExist />
      <JourneyTimeline />
    </>
  );
}
