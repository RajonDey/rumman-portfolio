import profileData from "../data/profile.json";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

export default function Home() {
  const { profile, education, experience, projects, skills } = profileData;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero profile={profile} />
      <About summary={profile.summary} />
      <Experience experience={experience} />
      <Education education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}
