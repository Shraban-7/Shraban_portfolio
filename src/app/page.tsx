"use client";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-deep-navy-700 to-midnight-blue-800 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full max-w-7xl mx-auto sm:px-10 px-5">
        <Navbar />
      </div>
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full max-w-7xl mx-auto sm:px-10 px-5">
        <Grid />
        <Skills />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
