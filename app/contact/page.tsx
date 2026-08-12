import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact — SHED Foundation',
  description:
    'Get in touch with SHED Foundation in Shirati, Tanzania, for partnership inquiries, general questions, or donation questions.',
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
          <p>
            Whether you&rsquo;re a medical school exploring a partnership or
            just have a question, here&rsquo;s the right person to reach.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className="wrap">
          <div className={styles.introInner}>
            <div className="kicker">Get In Touch</div>
            <h2>Two people, one small office in Shirati.</h2>
            <p>
              SHED Foundation runs lean &mdash; enquiries are split between
              the Medical Director for clinical partnerships and the Deputy
              Executive Director for everything else.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.layout}>
            <div className={styles.roleCards}>
              <div className={styles.roleCard}>
                <div className={styles.tag}>
                  Medical &amp; Research Partnerships
                </div>
                <h3>Dr. Esther L. Kawira, MD</h3>
                <p className={styles.person}>Medical Director, SHED Foundation</p>
                <p>
                  For medical schools and health professionals interested in
                  establishing a partnership relationship with Sota Health
                  Clinic.
                </p>
                <a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.tag}>
                  General Enquiries
                </div>
                <h3>Mr. Nyamusi Magatti</h3>
                <p className={styles.person}>Deputy Executive Director, SHED Foundation</p>
                <p>
                  For all other questions &mdash; donations, volunteering,
                  media, or anything else not covered above.
                </p>
                <a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a>
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
                  <div className={styles.value}>
                    Utegi Road, P.O. Box 39<br />
                    Shirati, Rorya District, Mara, Tanzania
                  </div>
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
                  <div className={styles.value}>
                    <a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a>
                  </div>
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
                  <div className={styles.value}>
                    <a href="tel:+255621045742">+255 621 045742</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.label}>US Branch (Donations)</div>
                  <div className={styles.value}>
                    2131 Curtis Drive<br />Penngrove, CA 94951, USA
                  </div>
                </div>
              </div>

              <a
                className={styles.mapLink}
                href="https://www.google.com/maps/search/?api=1&query=SHED%20Foundation%20Utegi%20Road%20Shirati%20Tanzania"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions &rarr;
              </a>
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
