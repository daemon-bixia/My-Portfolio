import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";
import React from "react";


import styles from './feature.module.css';



// **** Types **** //

interface IProps {
  icon: any;
  iconColor: string;
  title: string;
  children: React.ReactNode;
  position: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  }
}


// **** Component **** //

const Feature = ({ title, icon, iconColor, position, children }: IProps) => {
  return (
    <div
      className={styles.feature}
      style={{
        left: position.left, right: position.right,
        top: position.top, bottom: position.bottom
      }}
    >
      <div className={styles.iconTitleContainer}>
        <div className={`${styles.iconContainer} ${styles[iconColor]}`}>
          <IonIcon name={icon} className={styles.icon} />
        </div>
        <Typography variant="heading-3">{title}</Typography>
      </div>
      {children}
    </div >
  );
};


// **** Default export **** //

export default Feature;
