'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import ContactForm from '@/components/portfolio/contact/contact-form/contact-form';
import Typography from '@/components/ui/typography/typography';
import SocialLinks from '@/components/portfolio/socials/social-links';

import Plane from '@/components/vectors/plane';

import styles from './contact.module.css';


// **** Component **** //

export const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.contact}`,
        start: "top center"
      },
    });

    tl.fromTo(`.${styles.contact}`, { y: 200, }, { y: 0, opacity: 1, duration: 1 });
    tl.to(`.${styles.plane} g`, {
      duration: 3,
      motionPath: {
        path: `.${styles.plane} path:nth-child(2)`,
        align: `.${styles.plane} path:nth-child(2)`,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      }
    });
    tl.to(`.${styles.plane} path:nth-child(1)`, { strokeDashoffset: 0, duration: 3 }, "<0.12");
  });

  return (
    <section id='contact' className={styles.contact}>
      <header className={styles.sectionHeader}>
        <Plane className={styles.plane} />
        <Typography className={styles.title} variant='display-1'><span className="colorful-text">Let&apos;s Build Together</span></Typography>
        <Typography className={styles.description} variant='body-2'>I&apos;d love to hear from you! Whether you’re interested in collaborating, have questions about my work, or want to discuss new opportunities, feel free to reach out.</Typography>
      </header>

      <ContactForm />

      {/* Social links */}
      <SocialLinks className={styles.socialLinks} />
    </section>
  );
};


// **** Default export **** //

export default Contact;
