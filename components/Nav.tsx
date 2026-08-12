'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MagneticDonateButton from './MagneticDonateButton';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <Image src="/images/SHED LOGO-Photoroom.png" alt="SHED Foundation" width={220} height={72} className={styles.logoMark} priority />
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li className={styles.dropdownWrap}>
            <Link href="/programs/health" onClick={() => setOpen(false)}>Programs</Link>
            <div className={styles.dropdown}>
              <Link href="/programs/health" onClick={() => setOpen(false)}>Health</Link>
              <Link href="/programs/education" onClick={() => setOpen(false)}>Education</Link>
              <Link href="/programs/development" onClick={() => setOpen(false)}>Development</Link>
            </div>
          </li>
          <li><Link href="/impact" onClick={() => setOpen(false)}>Impact</Link></li>
          <li><Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
          <li><Link href="/news" onClick={() => setOpen(false)}>News</Link></li>
          <li><Link href="/partners" onClick={() => setOpen(false)}>Partners</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li className={styles.mobileDonate}>
            <Link href="/donate" className="btn-donate" onClick={() => setOpen(false)}>Donate</Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <MagneticDonateButton />
          <button
            className={styles.mobileToggle}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
