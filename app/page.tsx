import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'SHED Foundation — Health, Education & Development in Shirati, Tanzania',
  description:
    'SHED Foundation (Shirati Health, Education and Development Foundation) is a Tanzanian nonprofit working in close partnership with Village Life Outreach Project and Roche Health Center.',
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
          <h1>Health, education and development in northern Tanzania.</h1>
          <p>
            SHED Foundation (Shirati Health, Education and Development Foundation) is a Tanzanian nonprofit
            working in close partnership with Village Life Outreach Project and Roche Health Center.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/about" className="btn-primary">About Us</Link>
            <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Village Life Outreach Project
            </a>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.mission}>
        <div className="wrap">
          <div className={styles.missionHead}>
            <div className="kicker">Our Mission</div>
            <h2>Three pillars, one partnership with Village Life Outreach Project.</h2>
          </div>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>&#10084;</div>
              <h3>Health</h3>
              <p>
                SHED Foundation works in partnership with Village Life Outreach Project and Roche Health Center
                to improve access to quality health care in rural northern Tanzania.
              </p>
              <Link href="/programs/health">Learn about Health &rarr;</Link>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>&#127891;</div>
              <h3>Education</h3>
              <p>
                SHED works with Village Life Outreach Project to support education and opportunities for
                children and communities in rural northern Tanzania.
              </p>
              <Link href="/programs/education">Learn about Education &rarr;</Link>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>&#127793;</div>
              <h3>Development</h3>
              <p>
                SHED partners with Village Life Outreach Project and local communities to support sustainable
                development, with a focus on clean water, health, education, and nutrition.
              </p>
              <Link href="/programs/development">Learn about Development &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.impact}>
        <div className="wrap">
          <div className={styles.impactTop}>
            <h2>Two decades of partnership in the Rorya District.</h2>
            <p>
              SHED was registered in January 2006 and granted NGO status in March 2006, with a mandate to work
              in health, education, and development in northern Tanzania.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><div className={styles.num}>2006</div><div className={styles.label}>Official registration and NGO status</div></div>
            <div className={styles.stat}><div className={styles.num}>3</div><div className={styles.label}>Program areas: health, education, development</div></div>
            <div className={styles.stat}><div className={styles.num}>1</div><div className={styles.label}>Local mission centered in Shirati</div></div>
            <div className={styles.stat}><div className={styles.num}>1</div><div className={styles.label}>Principal partner: Village Life Outreach Project</div></div>
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
          </div>
          <div>
            <div className="kicker">In Partnership</div>
            <p className={styles.storyQuote}>
              &ldquo;Together with Village Life Outreach Project and local communities, SHED Foundation supports
              health, education, and sustainable community development for the people of the Shirati region.&rdquo;
            </p>
            <div className={styles.storyAttr}>
              SHED Foundation &amp; Village Life Outreach Project
              <span>Working together in northern Tanzania</span>
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
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop" alt="Health program" />
              <div className={styles.programLabel}><div className="tag">Health</div><h3>Roche Health Center &amp; Community Care</h3></div>
            </Link>
            <Link href="/programs/education" className={styles.programCard}>
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" alt="Education program" />
              <div className={styles.programLabel}><div className="tag">Education</div><h3>Children, Schools &amp; Community Learning</h3></div>
            </Link>
            <Link href="/programs/development" className={styles.programCard}>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" alt="Development program" />
              <div className={styles.programLabel}><div className="tag">Development</div><h3>Water, Nutrition &amp; Community</h3></div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#fff' }}>
        <div className="wrap">
          <div className="kicker">Our History</div>
          <h2 style={{ fontSize: '30px', color: 'var(--green-darker)', margin: '0 0 16px', fontWeight: 600 }}>Registered in January 2006, granted NGO status in March 2006.</h2>
          <p style={{ maxWidth: 720, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            SHED Foundation began in Shirati, Rorya District, with a mandate to work in health, education, and
            development in northern Tanzania. Many of the programs described on earlier pages of this site are
            part of SHED&apos;s history, not its current activities.
          </p>
          <Link href="/history" className="btn-primary">Read our full history &rarr;</Link>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Partner with us.</h2>
          <p>SHED Foundation works in close partnership with Village Life Outreach Project and the communities of Shirati.</p>
          <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Village Life Outreach Project
          </a>
        </div>
      </section>
    </>
  );
}
