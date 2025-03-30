import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <HeroSection />
      <AboutMe />
      <SideBar />
    </main>
  );
}
