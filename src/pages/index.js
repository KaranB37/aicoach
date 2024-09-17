import Cardsection from "@/Components/Cardsection/Cardsection";
import Cards from "@/Components/Cardsection/Cardsection";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Layout from "@/Components/Layout/Layout";
import Promptscroll from "@/Components/promptscroll/promptscroll";
import { MacbookScroll } from "@/Components/ui/macbook-scroll";
import bgimage from "@/Assets/icons/video.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/Assets/icons/logo.svg";
import video from "@/Assets/videos/AIchatbot.mp4";

export default function Home() {
  // Peerlist logo
  const Badge = ({ className }) => {
    return (
      <div>
        <Image src={logo} style={{ height: "130px", width: "130px" }} alt=" " />
      </div>
    );
  };

  return (
    <Layout title={"Home"}>
      <Hero />
      <Promptscroll />
      <Cardsection />
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <span>
              Experience AgentCoach in Action <br />
              {/* See how AgentCoach enhances
              your real estate journey with powerful AI-driven features. */}
            </span>
          }
          badge={<Badge className="h-10 w-10 transform -rotate-12" />}
          src={video}
          // videosrc={video}
          // imgsrc={bgimage}
          showGradient={false}
        />
      </div>

      <Footer />
    </Layout>
  );
}
