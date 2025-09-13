'use client';
import ProgramCard from "@/components/programs/pcard/programcard";
import ProgramSection from "@/components/programs/program_section";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-fit bg-black min-h-screen">
        <Hero />
        <ProgramSection />
      </div>
      <Footer />
    </div>
  );
}
