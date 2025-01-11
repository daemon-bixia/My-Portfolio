import NextLink from "next/link";
import IonIcon from "@reacticons/ionicons";

import styles from './icon-button.module.css'


// **** Types **** //

interface IProps {
  href: string;
  icon: any;
  blank?: boolean;
}


// **** Component **** //

const IconButton = ({ href, icon, blank }: IProps) => {
  return (
    <NextLink href={href} className={styles.iconButton} target={blank ? "_black" : undefined}>
      <IonIcon className={styles.icon} name={icon} />
    </NextLink>
  )
};


// **** Default export **** //

export default IconButton;
