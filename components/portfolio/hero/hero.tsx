import Feature from '@/components/portfolio/hero/feature/feature';
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


// **** Component **** //

const Hero = () => {
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
      <SocialLinks pointer />

      {/* Feature cards */}
      <Feature title="80+ Froks" icon="logo-github" iconColor='purple' position={{ top: "10%", left: "8%" }}>
        <Image className={styles.pattern} src={WavePattern} alt='A pattern of lines that represent waves' />
        <Typography variant='body-1' className={styles.FeatureDescription}>Trusted by developers <span className={styles.purpleText}>worldwide</span></Typography>
      </Feature>

      <Feature title="8 Years of Coding" icon="code-slash" iconColor='pink' position={{ top: "73%", left: "20%" }}>
        <Image className={styles.pattern} src={SquaresPattern} alt='A pattern of squares' />
        <Typography variant='body-1' className={styles.FeatureDescription}>Nearly a decade of coding experience, building reliable and impactful solutions</Typography>
      </Feature>

      <Feature title="500+ Stars" icon="star" iconColor='orange' position={{ top: "55%", right: "15%" }}>
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
