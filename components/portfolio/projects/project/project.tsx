import type { StaticImageData } from "next/image";

import React, { useState } from "react";

import Button from "@/components/ui/button/button";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import { PhotoSlider } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import styles from "./project.module.css";


// **** Types **** //

interface IProps {
  thumbnail: StaticImageData;
  alt: string;
  demoButton: { link?: string; text: string; icon: any; };
  projectButton: { link: string; text: string; icon: any; };
  screenshots?: StaticImageData[];
  width?: string;
  height?: string;
}


// **** Component **** //

const Project = ({ thumbnail, alt, demoButton, projectButton, screenshots, width, height }: IProps) => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  // (event) Opens the photo slider when the 
  const handleOpenSlider = () => {
    setIndex(0);
    setVisible(true);
  };

  // (event) Closes the slider when clicking outside 
  const handleCloseSlider = () => {
    setVisible(false);
  };

  return (
    <div className={styles.project} style={{
      aspectRatio: `${width}/${height}`
    }}>
      <Image
        className={styles.thumbnail}
        src={thumbnail}
        alt={alt}
      />

      <div className={styles.overlay}>
        <Button
          className={styles.demoButton}
          href={demoButton.link}
          target="_blank"
          endAdornment={<IonIcon className={styles.icon} name={demoButton.icon} />}
          onClick={(event) => handleOpenSlider ? handleOpenSlider() : {}}
        >
          {demoButton.text}
        </Button>
        <Button
          className={styles.projectButton}
          variant="outlined"
          color="white"
          href={projectButton.link}
          target="_blank"
          endAdornment={<IonIcon className={styles.icon} name={projectButton.icon} />}
        >
          {projectButton.text}
        </Button>
      </div>

      {/* The photo slider */}
      {
        screenshots && screenshots.length > 0
          ? (<PhotoSlider
            images={screenshots.map((img, index) => ({ src: img.src, key: index }))}
            visible={visible}
            onClose={handleCloseSlider}
            index={index}
            onIndexChange={setIndex}
          />)
          : (<></>)
      }
    </div >
  );
};


// **** Default export **** //

export default Project;
