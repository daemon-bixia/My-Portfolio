import IconButton from "@/components/ui/icon-button/icon-button";
import Image from "next/image";
import ArrowLeft from "@/public/vectors/decorations/arrow-left.svg";
import ArrowDown from "@/public/vectors/decorations/arrow-down.svg";

import Typography from "@/components/ui/typography/typography";
import React from "react";

import { socialLinks } from "@/constants";

import styles from "./social-links.module.css"


// **** Component **** //

const SocialLinks = () => {
  return (
    <React.Fragment>
      <div className={styles.socialLinks}>

        {/* pointer */}
        <div className={styles.pointer}>
          <Typography className={styles.letsConnect} variant="body-3">Let's connect</Typography>
          <Image className={styles.arrowDown} src={ArrowDown} alt="Arrow pointing to social links" />
          <Image className={styles.arrowLeft} src={ArrowLeft} alt="Arrow pointing to social links" />
        </div>

        {socialLinks.map((link) => (
          <IconButton icon={link[0]} href={link[1]} blank />
        ))}
      </div>
    </React.Fragment>
  );
};


// **** Default export **** //

export default SocialLinks;
