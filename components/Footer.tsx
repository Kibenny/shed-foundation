import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.brandRow}>
              <Link href="/"><Image src="/images/shed-logo.png" alt="SHED Foundation" width={80} height={53} className={styles.footerLogoImg} /></Link>
              <span className={styles.footerBrand}>SHED Foundation</span>
            </div>
            <p className={styles.footerFullName}>Shirati Health, Education and Development Foundation</p>
            <p>
              Registered NGO in Tanzania since March 2006. Utegi Road, P.O. Box 39, Shirati, Tanzania.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs/health">Health</Link></li>
              <li><Link href="/programs/education">Education</Link></li>
              <li><Link href="/programs/development">Development</Link></li>
              <li><Link href="/history">History</Link></li>
              <li><Link href="/impact">Impact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer">Village Life Outreach Project</a></li>
              <li><Link href="/contact">Partner With Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a></li>
              <li><a href="https://www.facebook.com/SHEDFoundation/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><Link href="/contact">Contact page</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>&copy; {new Date().getFullYear()} SHED Foundation. All rights reserved.</div>
          <div>Built by Kibet Web &amp; Graphic Studio</div>
        </div>
      </div>
    </footer>
  );
}
