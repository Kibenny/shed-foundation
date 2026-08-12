import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './development.module.css';

export const metadata: Metadata = {
  title: 'Development — Global Development Partnership Program',
  description:
    'SHED Foundation delivers community development through the Global Development Partnership Program with Village Life Outreach Project, addressing malaria prevention, sanitation, water and health infrastructure in Shirati, Tanzania.',
  openGraph: {
    title: 'Development | SHED Foundation',
    description:
      'Community development addressing health, malaria prevention, education, sanitation and water, delivered village by village with our partner Village Life Outreach Project.',
    url: 'https://www.shedfoundation.org/programs/development',
    type: 'website',
  },
};

export default function DevelopmentPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
          alt="Village water and sanitation project, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Development</div>
          <h1>Village-led development, delivered with our partners.</h1>
          <p>
            Through the Global Development Partnership Program, SHED
            Foundation works alongside Village Life Outreach Project to
            help communities address their own priorities — from clean
            water to malaria prevention.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className={`wrap ${styles.introGrid}`}>
          <div>
            <div className="kicker">Global Development Partnership Program</div>
            <h2>Assistance delivered through Village Life Outreach Project.</h2>
            <p>
              Development assistance is given to target villages through
              our partner Village Life Outreach Project, based in
              Cincinnati, Ohio. Together, we help village members address
              health, sanitation and water concerns in their own
              environment, using an approach shaped by the community
              itself rather than imposed from outside.
            </p>
            <p>
              The program addresses a connected set of issues — health,
              malaria prevention, education, sanitation and water — on the
              understanding that progress in one area supports progress in
              the others.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1200&auto=format&fit=crop"
              alt="Lake Victoria village placeholder"
            />
            <p className="photo-note">
              Photo placeholder — replace with an original SHED Foundation
              or Village Life Outreach Project photo of village
              development work.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.issues}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Focus Areas</div>
            <h2>Five connected issues, one village-based approach.</h2>
          </div>
          <div className={styles.issueGrid}>
            <div className={styles.issueCard}>
              <div className={styles.issueIcon}>&#10084;</div>
              <h3>Health</h3>
            </div>
            <div className={styles.issueCard}>
              <div className={styles.issueIcon}>&#128027;</div>
              <h3>Malaria Prevention</h3>
            </div>
            <div className={styles.issueCard}>
              <div className={styles.issueIcon}>&#127891;</div>
              <h3>Education</h3>
            </div>
            <div className={styles.issueCard}>
              <div className={styles.issueIcon}>&#128167;</div>
              <h3>Sanitation &amp; Water</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.feature}>
        <div className={`wrap ${styles.featureGrid}`}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
              alt="Roche Health Center placeholder"
            />
            <p className="photo-note">
              Photo placeholder — the original site features a photo of the
              Roche Health Center under construction. Pull it from
              shedfoundation.info/development-1.
            </p>
          </div>
          <div>
            <div className="kicker">Building Together</div>
            <h2>The Roche Health Center.</h2>
            <p>
              In partnership with the University of Cincinnati, Ohio,
              Village Life Outreach Project is building the Roche Health
              Center to expand access to care for target villages in the
              Rorya District.
            </p>
            <Link href="http://villagelifeoutreachproject.org/our-work/roche-health-center/" target="_blank" rel="noopener noreferrer" className="btn-secondary on-light">
              Learn About the Roche Health Center
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.partnerNote}>
        <div className="wrap">
          <div className={styles.partnerBox}>
            <p>
              Village Life Outreach Project is SHED Foundation&rsquo;s
              development partner, based in Cincinnati, USA. Explore their
              full body of work across health, water, sanitation and
              education.
            </p>
            <Link href="http://villagelifeoutreachproject.org/our-work/" target="_blank" rel="noopener noreferrer">
              Visit Village Life Outreach Project &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Support village-led development in Shirati.</h2>
          <p>Your gift helps fund clean water, sanitation and malaria prevention efforts across the Rorya District.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
