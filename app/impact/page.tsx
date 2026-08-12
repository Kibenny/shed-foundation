import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './impact.module.css';

export const metadata: Metadata = {
  title: 'Our Impact — Two Decades in the Rorya District',
  description:
    'A look at SHED Foundation\u2019s impact since 2006 — clinical care, education partnerships and village-based development across Shirati and the Rorya District, Tanzania.',
  openGraph: {
    title: 'Our Impact | SHED Foundation',
    description:
      'Two decades of health, education and development work in Shirati, Tanzania, from the founding of SHED Foundation in 2006 to today.',
    url: 'https://www.shedfoundation.org/impact',
    type: 'website',
  },
};

const timeline = [
  {
    year: '2006',
    title: 'SHED Foundation is founded',
    text: 'Registered with the Tanzanian government on 24 January 2006 as a not-for-profit company; granted NGO status on 21 March 2006.',
  },
  {
    year: '2007',
    title: 'Groundbreaking at Sota Village',
    text: 'Founding members break ground on the clinic that would become Sota Health Clinic, &ldquo;Derek\u2019s House.&rdquo;',
  },
  {
    year: '2014',
    title: 'Mass immunization campaigns',
    text: 'Introductory mass campaigns bring the Rubella and Measles vaccine into the routine immunization schedule at 9 and 18 months.',
  },
  {
    year: '2015',
    title: 'GlobeMed partnership begins; Tohara campaign',
    text: 'SHED Foundation becomes the official partner of GlobeMed at Duke University, continuing schistosomiasis control work. The same year, a Rorya District circumcision campaign completes over 3,000 procedures in under three months as part of HIV prevention efforts.',
  },
  {
    year: '2016',
    title: 'Government mass treatment expands',
    text: 'Tanzania\u2019s Ministry of Health begins annual zonal mass treatment for schistosomiasis in Lake Zone primary schools, building on groundwork laid by SHED Foundation and Village Life Outreach Project.',
  },
  {
    year: '2017',
    title: 'GlobeMed partnership concludes',
    text: 'The Duke University GlobeMed chapter partnership wraps up after two years of joint schistosomiasis control work.',
  },
  {
    year: '2018',
    title: 'HPV vaccine reaches Sota',
    text: 'Sota Health Clinic becomes one of the sites for Tanzania\u2019s national rollout of the papillomavirus vaccine for girls aged 9 to 14.',
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1600&auto=format&fit=crop"
          alt="Community gathering, Rorya District"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Our Impact</div>
          <h1>Two decades of change in the Rorya District.</h1>
          <p>
            From a groundbreaking in Sota Village in 2007 to a clinic that
            treats thousands of patients a year, here&rsquo;s a look at
            what SHED Foundation and our partners have built together.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.statsStrip}>
        <div className="wrap">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.num}>20<span>+</span></div>
              <div className={styles.label}>Years serving the Shirati community</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.num}>2<span>,269</span></div>
              <div className={styles.label}>Outpatient visits in a single month (Dec 2015)</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.num}>3<span>,000+</span></div>
              <div className={styles.label}>Male circumcision procedures completed in one 2015 campaign</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.num}>7</div>
              <div className={styles.label}>Founding board members and counting</div>
            </div>
          </div>
          <p className={styles.dataNote}>
            Figures reflect the most recently published data from SHED
            Foundation&rsquo;s clinical and program records.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="wrap">
          <div className={styles.introHead}>
            <div className="kicker">Why It Matters</div>
            <h2>Health, education and development are connected — so is our impact.</h2>
            <p>
              SHED Foundation&rsquo;s three pillars reinforce each other. A
              child treated for schistosomiasis stays in school. A mother
              who receives a free antenatal ultrasound catches a
              complication early. A village with clean water sees fewer
              cases at the clinic. Below is a look at what each program
              area has delivered.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.byProgram}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">By Program</div>
            <h2>What each pillar has delivered.</h2>
          </div>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <div className="tag">Health</div>
              <h3>Sota Health Clinic</h3>
              <ul>
                <li>Free antenatal ultrasound for every pregnant patient</li>
                <li>Five-cycle Burkitt&rsquo;s Lymphoma follow-up treatment program</li>
                <li>Childhood immunizations against eight diseases, free of charge</li>
                <li>3,000+ circumcision procedures in a single 2015 campaign</li>
              </ul>
            </div>
            <div className={styles.programCard}>
              <div className="tag">Education</div>
              <h3>Grants &amp; Partnerships</h3>
              <ul>
                <li>Education grants for health care workers</li>
                <li>Secondary school assistance for local students</li>
                <li>Two-year GlobeMed at Duke University partnership (2015–2017)</li>
                <li>Ongoing hosting of visiting medical, PA and nursing students</li>
              </ul>
            </div>
            <div className={styles.programCard}>
              <div className="tag">Development</div>
              <h3>Village Life Outreach Project</h3>
              <ul>
                <li>Malaria prevention, sanitation and water programs</li>
                <li>Roche Health Center under construction with University of Cincinnati</li>
                <li>Schistosomiasis control work later adopted nationally by Tanzania&rsquo;s Ministry of Health</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Our History</div>
            <h2>Milestones since 2006.</h2>
          </div>
          <div className={styles.timelineList}>
            {timeline.map((item) => (
              <div className={styles.timelineItem} key={item.year}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Be part of the next chapter.</h2>
          <p>Every gift extends the reach of health, education and development programs in Shirati.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
