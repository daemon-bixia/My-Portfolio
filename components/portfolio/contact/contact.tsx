'use client'

import ContactForm from '@/components/portfolio/contact/contact-form/contact-form';
import Typography from '@/components/ui/typography/typography';
import SocialLinks from '@/components/portfolio/socials/social-links';
import Image from 'next/image';

import Plane from '@/public/vectors/decorations/plane.svg';

import styles from './contact.module.css';


// **** Component **** //

export const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <header className={styles.sectionHeader}>
        <Image className={styles.plane} src={Plane} alt="an illustration of a paper plane flying" />
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
