import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact — SHED Foundation',
  description: 'Get in touch with SHED Foundation in Shirati, Tanzania.',
  openGraph: {
    title: 'Contact | SHED Foundation',
    description: 'Reach SHED Foundation in Shirati, Rorya District, Mara, Tanzania.',
    url: 'https://www.shedfoundation.org/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop"
          alt="Rural road in Rorya District, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Contact</div>
          <h1>Reach the team in Shirati.</h1>
          <p>Whether you&rsquo;re a partner or just have a question, here&rsquo;s how to reach us.</p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className="wrap">
          <div className={styles.introInner}>
            <div className="kicker">Get In Touch</div>
            <h2>Contact SHED Foundation.</h2>
            <p>For partnership inquiries, general questions, or donation questions, use the contacts below.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.layout}>
            <div className={styles.roleCards}>
              <div className={styles.roleCard} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <img src="/images/nyamusi-magatti.png" alt="Mr. Nyamusi Magatti" style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '3px solid #e7eae0' }} />
                <div>
                  <div className={styles.tag}>General Enquiries</div>
                  <h3>Mr. Nyamusi Magatti</h3>
                  <p className={styles.person}>Deputy Executive Director, SHED Foundation</p>
                  <p>SHED Foundation, Utegi Road, P.O. Box 39, Shirati, Rorya District, Mara, Tanzania</p>
                  <a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.tag}>Partnerships</div>
                <h3>Village Life Outreach Project</h3>
                <p>SHED Foundation&apos;s principal current partner.</p>
                <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer">
                  villagelifeoutreachproject.org &rarr;
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3>SHED Foundation</h3>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21s7-7.4 7-12.5A7 7 0 0 0 5 8.5C5 13.6 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                    <circle cx="12" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.label}>Address</div>
                  <div className={styles.value}>Utegi Road, P.O. Box 39<br />Shirati, Rorya District, Mara, Tanzania</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5h16v14H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                    <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.label}>Email</div>
                  <div className={styles.value}><a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a></div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L15 12l5 2v3c0 1.1-.9 2-2 2C10.6 19 5 13.4 5 6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.label}>Phone (Tanzania)</div>
                  <div className={styles.value}><a href="tel:+255621045742">+255 621 045742</a></div>
                </div>
              </div>
              <a className={styles.mapLink} href="https://www.google.com/maps/search/?api=1&query=SHED%20Foundation%20Utegi%20Road%20Shirati%20Tanzania" target="_blank" rel="noopener noreferrer">Get Directions &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Prefer to support with a gift instead?</h2>
          <p>You can donate directly without waiting to hear back from us.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
