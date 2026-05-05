import Hero from "@/components/Hero";
import Architect from "@/components/Architect";
import Services from "@/components/Services";
import LiveGithubRepos from "@/components/LiveGithubRepos";
import Packages from "@/components/Packages";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-tactical-black">
      <Hero />
      <Architect />
      <Services />
      <LiveGithubRepos />
      <Packages />
      <TechStack />
      <Footer />
    </main>
  );
}
