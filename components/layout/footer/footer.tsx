import Link from "@/components/ui/link/link";
import Typography from "@/components/ui/typography/typography";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";

import MyLogo from "@/public/vectors/logo.svg";
import styles from "./footer.module.css";



// **** Components **** //

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.grid}>
        <Image className={styles.logo} src={MyLogo} alt="MS Logo" />

        <div className={styles.copyright}>
          <Typography className={styles.copyright} variant="body-2">
            &copy; {new Date().getFullYear()} Muhammad Salah. All rights reserved
          </Typography>
        </div>

        <ul className={styles.socialLinks}>
          <li className={styles.item}>
            <Link className={styles.socialLink} href='https://www.reddit.com/user/ms-coder' target="_blank">
              <IonIcon className={styles.icon} name='logo-reddit' />
            </Link>
          </li>

          <li className={styles.item}>
            <Link className={styles.socialLink} href='https://twitter.com/demon_bixia' target="_blank">
              <IonIcon className={styles.icon} name='logo-twitter' />
            </Link>
          </li>

          <li className={styles.item}>
            <Link className={styles.socialLink} href='https://www.linkedin.com/in/muhammad-salah-320a49193/' target="_blank">
              <IonIcon className={styles.icon} name='logo-linkedin' />
            </Link>
          </li>

          <li className={styles.item}>
            <Link className={styles.socialLink} href='https://web.facebook.com/profile.php?id=100090191961277' target="_blank">
              <IonIcon className={styles.icon} name='logo-facebook' />
            </Link>
          </li>

          <li className={styles.item}>
            <Link className={styles.socialLink} href='https://github.com/demon-bixia' target="_blank">
              <IonIcon className={styles.icon} name='logo-github' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};


// **** Default export **** //

export default Footer;
