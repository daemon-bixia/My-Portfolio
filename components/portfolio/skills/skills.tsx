"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Sparkle from "@/components/vectors/sparkle"
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";

import Projects from "@/public/images/skills/projects.png";
import Books from "@/public/images/skills/books.png";
import Mesh2 from "@/public/images/gradients/mesh-2.png";

import styles from "./skills.module.css";


// **** Component **** //

const Skills = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.skills}`,
        start: "top center"
      },
    });

    tl.fromTo(`.${styles.skills}`, { y: 200, }, { y: 0, opacity: 1, duration: 1, });
    tl.fromTo(`.${styles.sparkles} path`, { transformOrigin: 'center', transform: 'scale(0.7)' }, { transform: 'scale(1)', duration: 0.7, }, 0.5);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  });

  return (
    <section id="skills" className={styles.skills} >
      <header className={styles.sectionHeader}>
        <Sparkle className={styles.sparkles} />
        <Typography className={styles.title} variant='display-1'>What <span className="colorful-text">I Bring</span> to the table</Typography>
        <Typography className={styles.description} variant='body-2'>A versatile skillset focused on delivering innovative and impactful solutions.</Typography>
      </header>

      <div className={styles.skillGrid}>
        <div className={styles.leftGrid}>
          {/* the projects image */}
          <a href="https://github.com/demon-bixia" target="_blank" className={styles.image} style={{ background: `url(${Projects.src})` }}>
            <div className={styles.OpenIndicator}><IonIcon className={styles.icon} name="open-outline" /></div>
            <div className={styles.linkInfo}>
              <Typography variant="heading-1">Github.com</Typography>
              <Typography variant="body-1">Check out more projects on github</Typography>
            </div>
          </a>
          {/* the design skills */}
          <div className={styles.skillList}>
            <div className={styles.skillItem}>
              <Typography className={styles.number} variant="heading-2">#3</Typography>
              <Typography className={styles.title} variant="heading-4">UI/UX Design</Typography>
              <Typography className={styles.description} variant="body-2">I design user experiences for digital products, ensuring every interaction is intuitive and seamless. By focusing on user needs and behavior, I can create interfaces that are visually appealing.</Typography>
            </div>
            <div className={styles.skillItem}>
              <Typography className={styles.number} variant="heading-2">#4</Typography>
              <Typography className={styles.title} variant="heading-4">Graphics Design</Typography>
              <Typography className={styles.description} variant="body-2">I specialize in graphic design, creating compelling visuals such as logos and illustrations that effectively communicate brand identity and captivate audiences.</Typography>
            </div>
          </div>
        </div>

        <div className={styles.rightGrid}>
          {/*  software skills */}
          <div className={styles.skillList}>
            <div className={styles.skillItem}>
              <Typography className={styles.number} variant="heading-2">#1</Typography>
              <Typography className={styles.title} variant="heading-4">Back End Development</Typography>
              <Typography className={styles.description} variant="body-2">I specialize in building server-side applications, including robust APIs and dynamic web applications, tailored to meet diverse project needs.</Typography>
            </div>
            <div className={styles.skillItem}>
              <Typography className={styles.number} variant="heading-2">#2</Typography>
              <Typography className={styles.title} variant="heading-4">Front End Development</Typography>
              <Typography className={styles.description} variant="body-2">I develop intuitive and engaging client-side interfaces for web applications, crafting user-friendly websites that prioritize seamless experiences.</Typography>
            </div>
          </div>
          {/* the books image */}
          <div className={styles.booksMockup}>
            <a href="https://dribbble.com/demon-bixia" target="_blank" className={styles.image} style={{ background: `url(${Books.src})` }}>
              <div className={styles.OpenIndicator}><IonIcon className={styles.icon} name="open-outline" /></div>
              <div className={styles.linkInfo}>
                <Typography variant="heading-1">Dribbble.com</Typography>
                <Typography variant="body-1">Check out more of my designs on dribbble</Typography>
              </div>
            </a>
            <div className={styles.colors}>
              {/* Pink */}
              <div className={styles.colorPalette}>
                <Typography className={styles.name} variant="heading-2">Magic Pink</Typography>
                <div>
                  <Typography className={styles.hexValue} variant="body-1">HEX #F05EE1</Typography>
                  <Typography className={styles.rgbValue} variant="body-1">RBG 306 83 65</Typography>
                </div>
              </div>
              {/* Blue */}
              <div className={styles.colorPalette}>
                <Typography className={styles.name} variant="heading-2">Energy Blue</Typography>
                <div>
                  <Typography className={styles.hexValue} variant="body-1">HEX #4FA5E5</Typography>
                  <Typography className={styles.rgbValue} variant="body-1">RBG 206 74 60</Typography>
                </div>
              </div>
              {/* Purple */}
              <div className={styles.colorPalette}>
                <Typography className={styles.name} variant="heading-2">Marine Purple</Typography>
                <div>
                  <Typography className={styles.hexValue} variant="body-1">HEX #956EDF</Typography>
                  <Typography className={styles.rgbValue} variant="body-1">RBG 261 64 65</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the second mesh gradient at the end of the skills section */}
      <Image className={styles.mesh2} src={Mesh2} alt="a colorful mesh gradient made up of 3 colors pink, blue, and purple" />
    </section>
  );
};


// **** Default export **** //

export default Skills;
