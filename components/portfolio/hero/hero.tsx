"use client"
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";

import Feature from "@/components/portfolio/hero/feature/feature";
import SocialLinks from "@/components/portfolio/socials/social-links";
import Button from "@/components/ui/button/button";
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";

import WavePattern from "@/public/vectors/decorations/wave-pattern.svg";
import SquaresPattern from "@/public/vectors/decorations/squares-pattern.svg";
import TopographyPattern from "@/public/vectors/decorations/topography-pattern.svg";
import DriveResults from "@/public/vectors/decorations/DriveResults.svg"
import EndlessInnovation from "@/public/vectors/decorations/EndlessInnovation.svg"

import styles from "./hero.module.css";


// **** Plugins **** //

gsap.registerPlugin(useGSAP);


// **** Component **** //

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(`.${styles.welcomeText}`, { opacity: 1, duration: 0.5 });
    tl.to(`.${styles.contactButton}`, { opacity: 1, duration: 0.5 }, 0);
    tl.to(`.${styles.rollPill}`, { opacity: 1, duration: 0.5 });
    tl.fromTo(`.${styles.socialLinks}`, { x: 40, }, { x: 0, opacity: 1, duration: 0.5 });
    tl.to(`.${styles.letsConnect}`, { opacity: 1, duration: 0.2 });
    tl.to(`.${styles.pointer} svg path:nth-child(2)`, { strokeDashoffset: 0, duration: 0.8 });
    tl.to(`.${styles.pointer} svg path`, { strokeDashoffset: 0, duration: 0.1 });
    tl.fromTo(`.${styles.rollPill}`,
      { background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0) 40%)`, duration: 0.4, },
      { background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 0.6) 150%, rgba(0, 0, 0, 0) 100%)`, repeat: -1, repeatDelay: 3, duration: 0.4, },
    );
    tl.to(`.${styles.driveResults}`, { opacity: 1, duration: 1 });
    tl.to(`.${styles.endlessInnovation}`, { opacity: 1, duration: 1 }, "<0");
    tl.fromTo(`.${styles.feature}`, { y: 20 }, { y: 0, opacity: 1, duration: 1 }, "<0");
    tl.to(`.${styles.feature1}`, { y: 6, yoyo: true, repeat: -1, opacity: 1, duration: 3, repeatDelay: 0.1 });
    tl.to(`.${styles.feature2}`, { y: 6, yoyo: true, repeat: -1, opacity: 1, duration: 3, repeatDelay: 0.2 });
    tl.to(`.${styles.feature3}`, { y: 6, yoyo: true, repeat: -1, opacity: 1, duration: 3, repeatDelay: 0.3 });
  });

  return (
    <section id="hero" className={styles.hero}>
      {/* Welcoming text */}
      <header className={styles.welcome}>
        <div className={styles.rollPill}>
          <Typography variant="body-2">Developer & Designer</Typography>
        </div>

        <Typography className={styles.welcomeText} variant='display-1'>
          <span className={styles.bold}>Hey!</span> I&apos;m <span className={`${styles.bold} colorful-text`}>Muhammad Salah</span><span className={styles.bold}>,</span> I Love Building Web Applications <span className={styles.bold}>That Drive Results!</span>
        </Typography>
      </header>

      {/* Let's talk button */}
      <Button className={styles.contactButton} color="gray" href="#contact">
        Let&apos;s Talk <IonIcon className={styles.icon} name="arrow-forward" />
      </Button>

      {/* Social links */}
      <SocialLinks
        className={styles.socialLinks}
        pointerSelector={styles.pointer}
        letsConnect={styles.letsConnect}
        pointer
      />

      {/* Feature cards */}
      <Feature className={`${styles.feature} ${styles.feature1}`} title="80+ Froks" icon="logo-github" iconColor='purple'>
        <Image className={styles.pattern} src={WavePattern} alt='A pattern of lines that represent waves' />
        <Typography variant='body-1' className={styles.FeatureDescription}>Trusted by developers <span className={styles.purpleText}>worldwide</span></Typography>
      </Feature>

      <Feature className={`${styles.feature} ${styles.feature2}`} title="8 Years of Coding" icon="code-slash" iconColor='pink'>
        <Image className={styles.pattern} src={SquaresPattern} alt='A pattern of squares' />
        <Typography variant='body-1' className={styles.FeatureDescription}>Nearly a decade of coding experience, building reliable and impactful solutions</Typography>
      </Feature>

      <Feature className={`${styles.feature} ${styles.feature3}`} title="500+ Stars" icon="star" iconColor='orange' >
        <Image className={styles.pattern} src={TopographyPattern} alt='A pattern of that represents a topography' />
        <Typography variant='body-1' className={styles.FeatureDescription}><span className={styles.orangeText}>From 20 projects</span>, endless innovation.</Typography>
      </Feature>


      {/* Background text */}
      <Image className={styles.driveResults} src={DriveResults} alt="A decorated text that says drive results" />
      <Image className={styles.endlessInnovation} src={EndlessInnovation} alt="A decorated text that says Endless innovation" />
    </section>
  );
};


// **** Default export **** //

export default Hero;
