import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import SideBar from "./components/SideBar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full px-0 py-4 relative">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="relative z-10">
        <HeroSection />
        <Projects />
        <AboutMe />
        <SideBar />
        <TechStack />
        <footer className="text-center py-4 text-[#ADB7BE] mt-12">
          <div className="flex flex-col items-center gap-4">
            <p>
              © {new Date().getFullYear()} Peter Sylvan L. Vecina. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
