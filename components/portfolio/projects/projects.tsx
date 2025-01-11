"use client"

import React from "react";

import Typography from "@/components/ui/typography/typography";
import Project from "@/components/portfolio/projects/project/project";
import IonIcon from "@reacticons/ionicons";
import Button from "@/components/ui/button/button";
import Image from "next/image";

import AvianDesignThumbnail from "@/public/images/designs/avian/thumbnail.png";
import Info from "@/public/images/designs/avian/screenshots/info.png";
import Messages from "@/public/images/designs/avian/screenshots/messages.png";
import Messaging from "@/public/images/designs/avian/screenshots/messaging.png";
import LawyerThumbnail from "@/public/images/designs/lawyer/thumbnail.png";
import Home from "@/public/images/designs/lawyer/screenshots/home.png";
import NeosThumbnail from "@/public/images/designs/neos/thumbnail.png";
import Landing from "@/public/images/designs/neos/screenshots/landing.png";
import AvianTemplateThumbnail from "@/public/images/projects/avian/thumbnail.png";
import BoltThumbnail from "@/public/images/projects/bolt/thumbnail.jpg";
import ThoughtlessThumbnail from "@/public/images/projects/thoughtless/thumbnail.png";
import LeftMesh from "@/public/images/gradients/left-mesh.png"
import RightMesh from "@/public/images/gradients/right-mesh.png"

import DockerLogo from "@/public/vectors/icons/docker.svg";
import DjangoLogo from "@/public/vectors/icons/django.svg";
import ReactLogo from "@/public/vectors/icons/react.svg";
import VueLogo from "@/public/vectors/icons/vue.svg";
import FigmaLogo from "@/public/vectors/icons/figma.svg";
import GimpLogo from "@/public/vectors/icons/gimp.svg";
import InkscapeLogo from "@/public/vectors/icons/inkscape.svg";

import styles from "./projects.module.css";


// **** Component **** //

const Projects = () => {

  return (
    <section id="projects" className={styles.projects}>
      {/* Section header */}
      <header className={styles.sectionHeader}>
        <Typography className={styles.title} variant='display-1'>Crafting solutions <span className="colorful-text">With Passion</span></Typography>
        <Typography className={styles.description} variant='body-2'>Explore a curated selection of my projects, highlighting creative solutions and impactful contributions across various domains.</Typography>
      </header>

      {/* The projects grid */}
      <div className={styles.projectsGrid}>
        <div className={styles.twoProjects}>
          <Project
            demoButton={{ link: 'https://github.com/demon-bixia/bolt-demo', text: 'View Demo', icon: 'open-outline' }}
            projectButton={{ link: 'https://github.com/demon-bixia/', text: 'Github', icon: 'logo-github' }}
            thumbnail={BoltThumbnail}
            alt="Bolt is an admin for the django web framework made with react and django rest framework"
            width="687"
            height="360"
          />
          <Project
            demoButton={{ link: 'https://replit.com/@demon-bixia/Thoughtless', text: 'View Demo', icon: 'open-outline' }}
            projectButton={{ link: 'https://github.com/demon-bixia/', text: 'Github', icon: 'logo-github' }}
            thumbnail={ThoughtlessThumbnail}
            alt="Thoughtless is a blogging platform created with the django web framework"
            width="487"
            height="360"
          />
        </div>
        <div className={styles.ProjectWithSeeMore}>
          <div className={styles.seeMore}>
            <div className={styles.tools}>
              <div className={styles.toolIcon}><Image src={ReactLogo} alt="react.js logo" /></div>
              <div className={styles.toolIcon}><Image src={VueLogo} alt="react.js logo" /></div>
              <div className={styles.toolIcon}><Image src={DjangoLogo} alt="react.js logo" /></div>
              <div className={styles.toolIcon}><Image src={DockerLogo} alt="react.js logo" /></div>
            </div>
            <div className={styles.titleAndDescription}>
              <Typography className={styles.title} variant="body-5">More Software Projects</Typography>
              <Typography className={styles.description} variant="body-1">Dive deeper into my portfolio of development projects.</Typography>
            </div>
            <Button
              className={styles.moreButton}
              typography='body-2'
              variant="outlined"
              color="gray"
              endAdornment={<IonIcon name="open-outline" />}>
              Github
            </Button>
          </div>
          <Project
            demoButton={{ link: 'http://avian-demo.netlify.app/', text: 'View Demo', icon: 'open-outline' }}
            projectButton={{ link: 'https://github.com/demon-bixia/', text: 'Github', icon: 'logo-github' }}
            thumbnail={AvianTemplateThumbnail}
            alt="Avian is a messaging application frontend template project coded in vue"
            width="904"
            height="464"
          />
          <Image className={styles.leftMesh} src={LeftMesh} alt='A gradient that starts from left and fades to right' />
        </div>
        <div className={styles.twoProjects}>
          <Project
            demoButton={{ text: 'View Shots', icon: 'images-outline' }}
            projectButton={{ link: 'https://dribbble.com/demon-bixia', text: 'Dribbble', icon: 'logo-dribbble' }}
            screenshots={[Home]}
            thumbnail={LawyerThumbnail}
            alt="A ui/ux and brand identity design of a lawyer firm website"
            width="487"
            height="360"
          />
          <Project
            demoButton={{ text: 'View Shots', icon: 'images-outline' }}
            projectButton={{ link: 'https://dribbble.com/demon-bixia', text: 'Dribbble', icon: 'logo-dribbble' }}
            screenshots={[Info, Messaging, Messages]}
            thumbnail={AvianDesignThumbnail}
            alt="A complete ui/ux design of mobile and web messaging application"
            width="687"
            height="360"
          />
        </div>
        <div className={styles.ProjectWithSeeMore}>
          <Project
            demoButton={{ text: 'View Shots', icon: 'images-outline' }}
            projectButton={{ link: 'https://dribbble.com/demon-bixia', text: 'Dribbble', icon: 'logo-dribbble' }}
            screenshots={[Landing]}
            thumbnail={NeosThumbnail}
            alt="A ui/ux design of a crypto landing page"
            width="904"
            height="464"
          />
          <div className={styles.seeMore}>
            <div className={styles.tools}>
              <div className={styles.toolIcon}><Image src={FigmaLogo} alt="react.js logo" /></div>
              <div className={styles.toolIcon}><Image src={GimpLogo} alt="react.js logo" /></div>
              <div className={styles.toolIcon}><Image src={InkscapeLogo} alt="react.js logo" /></div>
            </div>
            <div className={styles.titleAndDescription}>
              <Typography className={styles.title} variant="body-5">More Design Projects</Typography>
              <Typography className={styles.description} variant="body-1">Explore my collection of thoughtfully crafted designs.</Typography>
            </div>
            <Button
              className={styles.moreButton}
              typography='body-2'
              variant="outlined"
              color="gray"
              endAdornment={<IonIcon name="open-outline" />}>
              Dribbble
            </Button>
          </div>

          <Image className={styles.rightMesh} src={RightMesh} alt='A gradient that starts from right and fades to left' />
        </div>
      </div>
    </section >
  );
};


// **** Default export **** //

export default Projects;
