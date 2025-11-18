import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Experience from "@/components/Exprience/Exprience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publication";
import Training from "@/components/Training";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
    
      <AboutSectionOne />
      <Projects />
      <Publications />
      <Training />
      <Experience />
    </>
  );
};

export default AboutPage;
