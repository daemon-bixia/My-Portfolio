"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Contact from "@/components/portfolio/contact/contact";
import Hero from "@/components/portfolio/hero/hero";
import Projects from "@/components/portfolio/projects/projects";
import Skills from "@/components/portfolio/skills/skills";
import Image from "next/image";

import Mesh1 from "@/public/images/gradients/mesh-1.png";

import styles from "./page.module.css";


// **** Register Plugins **** //

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);


// **** Component **** //

export default function Home() {
  return (
    <div>
      {/* The first gradient image in the background  */}
      <Image className={styles.mesh1} src={Mesh1} alt="a colorful mesh gradient" />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div >
  );
};
