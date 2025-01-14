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
  className: string;
}


// **** Component **** //

const Feature = ({ title, icon, iconColor, className, children }: IProps) => {
  return (
    <div className={`${styles.feature} ${className}`}>
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
