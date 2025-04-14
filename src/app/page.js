import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import SideBar from "./components/SideBar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4 relative">
      <div className="absolute inset-0 bg-[#121212] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <HeroSection />
        <AboutMe />
        <SideBar />
        <TechStack />
        <Projects />
        <footer className="text-center py-4 text-[#ADB7BE] mt-12">
          <div className="flex flex-col items-center gap-4">
            <p>
              © {new Date().getFullYear()} Peter Sylvan Vecina. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
