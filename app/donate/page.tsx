import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './donate.module.css';

export const metadata: Metadata = {
  title: 'Donate — SHED Foundation',
  description:
    'Support SHED Foundation\u2019s health, education and development work in Shirati, Tanzania. SHED Foundation, US Branch is a 501(c)(3) tax-exempt nonprofit.',
  openGraph: {
    title: 'Donate | SHED Foundation',
    description:
      'Support free maternal care, education grants and village development in Shirati, Tanzania.',
    url: 'https://www.shedfoundation.org/donate',
    type: 'website',
  },
};

export default function DonatePage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
          alt="Lake Victoria shoreline, Shirati, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Donate</div>
          <h1>Your gift reaches Sota Village directly.</h1>
          <p>
            SHED Foundation has run a village-based clinic, education grants
            and community development programs in Shirati since 2006, with
            almost no overhead between your gift and the people it reaches.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.impact}>
        <div className="wrap">
          <div className={styles.impactHead}>
            <div className="kicker">Where It Goes</div>
            <h2>Three programs, one small foundation.</h2>
            <p>
              Every gift supports the same three pillars SHED Foundation has
              run since its founding &mdash; health, education and
              development &mdash; centered on Sota Village and the wider
              Rorya District.
            </p>
          </div>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-7.5-4.6-10-9.1C.4 8.4 2 4.5 5.8 4c2-.3 3.8.6 6.2 3 2.4-2.4 4.2-3.3 6.2-3 3.8.5 5.4 4.4 3.8 7.9C19.5 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M9 12h2l1.2-2.2L13.8 14 15 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Health</h3>
              <p>
                Keeps Sota Health Clinic running &mdash; free maternal care,
                childhood immunizations, Burkitt&rsquo;s Lymphoma treatment
                and ultrasound imaging for a community with no other nearby
                facility.
              </p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Education</h3>
              <p>
                Funds grants for health care workers, secondary school
                assistance and gifts in kind like the desks donated to
                Shirati primary schools.
              </p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-5.2 7-11.5A7 7 0 0 0 5 10.5C5 16.8 12 22 12 22z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="12" cy="10.3" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </div>
              <h3>Development</h3>
              <p>
                Supports the Global Development Partnership Program with
                Village Life Outreach Project &mdash; malaria prevention,
                sanitation, water and the Roche Health Center.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ways}>
        <div className="wrap">
          <div className={styles.waysHead}>
            <div className="eyebrow">How To Donate</div>
            <h2>One simple way to give, today.</h2>
            <p>
              SHED Foundation currently accepts donations by mail through its
              US Branch. There&rsquo;s no online payment page yet &mdash; if
              that changes, this page will be the first place it shows up.
            </p>
          </div>

          <div className={styles.waysLayout}>
            <div className={styles.checkCard}>
              <div className="kicker">By Mail, In The US</div>
              <h3>Make checks payable to:</h3>
              <div className={styles.payee}>
                <div className={styles.label}>Payee</div>
                <p className={styles.name}>Sabrina Khan</p>
                <address>
                  SHED Foundation, US Branch<br />
                  2131 Curtis Drive<br />
                  Penngrove, CA 94951<br />
                  USA
                </address>
              </div>
              <div className={styles.taxBadges}>
                <span className={styles.badge}>501(c)(3) tax-exempt</span>
                <span className={styles.badge}>Fully registered nonprofit</span>
              </div>
              <p className={styles.taxNote}>
                SHED Foundation, US Branch holds tax-exempt status under
                Section 501(c)(3) of the Internal Revenue Code, and gifts are
                deductible under Section 170.
              </p>
            </div>

            <div className={styles.otherCard}>
              <div className="eyebrow">Giving From Outside The US</div>
              <h3>Wiring from Tanzania or elsewhere?</h3>
              <p>
                SHED Foundation&rsquo;s Tanzania office hasn&rsquo;t published
                a bank transfer or mobile money option publicly, so we
                don&rsquo;t want to guess at routing details here. The
                fastest way to give from outside the US, or to ask about
                larger or recurring gifts, is to reach the team directly.
              </p>
              <div className={styles.contactLine}>
                <a href="mailto:shedftanzania@gmail.com">shedftanzania@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reassure}>
        <div className="wrap">
          <div className={styles.reassureBox}>
            <p>
              &ldquo;SHED Foundation will continue to open its doors for
              partnership agreements, projects, and opportunities designed
              to provide health, education and development to underserved
              villages and communities in Tanzania.&rdquo;
            </p>
            <cite>&mdash; SHED Foundation</cite>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Questions before you give?</h2>
          <p>We&rsquo;re happy to talk through where a gift goes, or set up something recurring.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
