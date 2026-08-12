import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'SHED Foundation — Health, Education & Development in Shirati, Tanzania',
  description:
    'Since 2006, SHED Foundation has delivered primary healthcare, education grants and community development to underserved villages in Shirati and the Rorya District, Tanzania.',
  openGraph: {
    url: 'https://www.shedfoundation.org/',
  },
};

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1600&auto=format&fit=crop"
          alt="Sota Village, Lake Victoria"
        />
        <div className={styles.heroContent}>
          <div className="eyebrow">Shirati &middot; Rorya District &middot; Lake Victoria, Tanzania</div>
          <h1>Health, education and development for the villages of Lake Victoria.</h1>
          <p>
            Since 2006, SHED Foundation has delivered primary healthcare,
            education grants and community development to underserved
            villages in Shirati and beyond.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/donate" className="btn-primary">Support Our Mission</Link>
            <Link href="/impact" className="btn-secondary">See Our Work</Link>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.mission}>
        <div className="wrap">
          <div className={styles.missionHead}>
            <div className="kicker">Our Mission</div>
            <h2>Three pillars, one village-based approach.</h2>
          </div>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>&#10084;</div>
              <h3>Health</h3>
              <p>
                A village-based primary care facility providing preventive
                and curative care, maternal services, HIV/TB diagnosis, and
                ultrasound imaging for pregnancy and abdominal disorders.
              </p>
              <Link href="/programs/health">Learn about Health &rarr;</Link>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>&#127891;</div>
              <h3>Education</h3>
              <p>
                Education grants for health workers, secondary school
                assistance, and our Global Health Education Partnership
                Program connecting students worldwide.
              </p>
              <Link href="/programs/education">Learn about Education &rarr;</Link>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>&#127793;</div>
              <h3>Development</h3>
              <p>
                Community development delivered with our partner, Village
                Life Outreach Project — addressing water, sanitation and
                malaria prevention village by village.
              </p>
              <Link href="/programs/development">Learn about Development &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.impact}>
        <div className="wrap">
          <div className={styles.impactTop}>
            <h2>Two decades of measurable change in the Rorya District.</h2>
            <p>
              Since our founding in 2006, our work has reached families
              across Shirati, Sota Village and the surrounding communities
              of Lake Victoria.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><div className={styles.num}>20<span>+</span></div><div className={styles.label}>Years serving the Shirati community</div></div>
            <div className={styles.stat}><div className={styles.num}>10<span>,000+</span></div><div className={styles.label}>Patients treated annually</div></div>
            <div className={styles.stat}><div className={styles.num}>150<span>+</span></div><div className={styles.label}>Villages reached through partner programs</div></div>
            <div className={styles.stat}><div className={styles.num}>7<span></span></div><div className={styles.label}>Founding board members and counting</div></div>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={`wrap ${styles.storyGrid}`}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop"
              alt="Community health worker"
            />
            <p className="photo-note">Photo placeholder — replace with an original SHED Foundation clinical photo.</p>
          </div>
          <div>
            <div className="kicker">From the Field</div>
            <p className={styles.storyQuote}>
              &ldquo;Our clinic in Sota Village means a mother no longer has
              to walk three hours to reach safe care. That&rsquo;s the
              difference SHED makes, one family at a time.&rdquo;
            </p>
            <div className={styles.storyAttr}>
              Dr. Esther Kawira
              <span>Medical Director &amp; Founding Member, SHED Foundation</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.programs}>
        <div className="wrap">
          <div className={styles.missionHead} style={{ marginBottom: 0 }}>
            <div className="kicker">Our Work</div>
            <h2>See where your support goes.</h2>
          </div>
          <div className={styles.programsGrid}>
            <Link href="/programs/health" className={styles.programCard}>
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
                alt="Health program"
              />
              <div className={styles.programLabel}><div className="tag">Health</div><h3>Primary Care &amp; Maternal Health</h3></div>
            </Link>
            <Link href="/programs/education" className={styles.programCard}>
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop"
                alt="Education program"
              />
              <div className={styles.programLabel}><div className="tag">Education</div><h3>Grants &amp; School Support</h3></div>
            </Link>
            <Link href="/programs/development" className={styles.programCard}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                alt="Development program"
              />
              <div className={styles.programLabel}><div className="tag">Development</div><h3>Water, Sanitation &amp; Community</h3></div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className="wrap">
          <div className="kicker">Friends &amp; Partners</div>
          <div className={styles.partnerRow}>
            <div>Village Life Outreach Project</div>
            <div>Direct Relief</div>
            <div>Shirati KMT Hospital</div>
            <div>Burkitt&rsquo;s Lymphoma Fund for Africa</div>
            <div>Goshen College</div>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Your gift reaches Shirati directly.</h2>
          <p>Every contribution supports village-based health, education and development programs.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
