import IconButton from "@/components/ui/icon-button/icon-button";
import Image from "next/image";
import ArrowLeft from "@/components/vectors/arrow-left";
import ArrowDown from "@/components/vectors/arrow-down";

import Typography from "@/components/ui/typography/typography";
import React from "react";

import { socialLinks } from "@/constants";

import styles from "./social-links.module.css"


// **** Types **** //

interface IProps {
  pointer?: boolean;
  className?: string;
  pointerSelector?: string;
  letsConnect?: string;
}


// **** Component **** //

const SocialLinks = ({ pointer, pointerSelector, letsConnect, className }: IProps) => {
  return (
    <React.Fragment>
      <div className={`${styles.socialLinks} ${className}`}>

        {
          pointer
            ? (<div className={`${styles.pointer} ${pointerSelector}`}>
              <Typography className={`${styles.letsConnect} ${letsConnect}`} variant="body-3">Let's connect</Typography>
              <ArrowDown className={styles.arrowDown} />
              <ArrowLeft className={styles.arrowLeft} />
            </div>)
            : (<></>)
        }

        {socialLinks.map((link, index) => (
          <IconButton icon={link[0]} href={link[1]} blank key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};


// **** Default export **** //

export default SocialLinks;
