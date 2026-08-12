import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './education.module.css';

export const metadata: Metadata = {
  title: 'Education — Grants, Schools & Global Health Partnership',
  description:
    'SHED Foundation supports education through grants for health care workers, secondary school assistance, and the Global Health Education Partnership Program hosting visiting medical students in Shirati, Tanzania.',
  openGraph: {
    title: 'Education | SHED Foundation',
    description:
      'Education grants for health care workers, secondary school assistance and a Global Health Education Partnership Program connecting visiting students with village health work in Shirati, Tanzania.',
    url: 'https://www.shedfoundation.org/programs/education',
    type: 'website',
  },
};

export default function EducationPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600&auto=format&fit=crop"
          alt="Primary school classroom, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Education</div>
          <h1>Grants, school support and global health training.</h1>
          <p>
            From secondary school assistance to hosting visiting medical
            students, SHED Foundation invests in education as a path to
            better health and opportunity across Shirati.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className={`wrap ${styles.introGrid}`}>
          <div>
            <div className="kicker">Our Focus</div>
            <h2>Three ways we invest in education.</h2>
            <p>
              SHED Foundation provides education grants to health care
              workers, assistance with basic education at the secondary
              school level, and runs the Global Health Education
              Partnership Program, which connects students and
              professionals from around the world with village health work
              in Shirati.
            </p>
            <p>
              Through the partnership program, SHED Foundation hosts
              visiting medical students, doctors in training, and their
              professors, who work alongside the clinic to analyze village
              health issues and help educate patients. Physician assistant
              students and nursing students have also completed elective
              rotations at our facilities.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              alt="Students placeholder"
            />
            <p className="photo-note">
              Photo placeholder — the original site includes a &ldquo;Donated
              Desks to Shirati Primary Schools&rdquo; photo. Pull it from
              shedfoundation.info/education.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Partnership</div>
            <h2>GlobeMed at Duke University.</h2>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>2015 – 2017 Partnership</h3>
              <p>
                In 2015, SHED Foundation became the official partner of
                GlobeMed, the Duke University chapter. The program carried
                forward schistosomiasis control work already underway
                through Village Life Outreach Project in its target
                villages, extending it to additional primary schools in
                Rorya District, Mara Region. The partnership concluded in
                2017.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Government Mass Treatment</h3>
              <p>
                Starting in 2016, Tanzania&rsquo;s Ministry of Health began
                annual zonal mass treatment for schistosomiasis in Lake
                Zone primary schools, including schools previously targeted
                by SHED Foundation and Village Life Outreach Project.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Village Life Outreach Project — Education</h3>
              <p>
                SHED Foundation&rsquo;s education work continues alongside
                our partner Village Life Outreach Project.
              </p>
              <Link href="http://villagelifeoutreachproject.org/our-work/education/" target="_blank" rel="noopener noreferrer">
                Find out more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gifts}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Gifts in Kind</div>
            <h2>Material support for local schools.</h2>
          </div>
          <div className={styles.giftsGrid}>
            <div className={styles.giftCard}>
              <img
                src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=900&auto=format&fit=crop"
                alt="Mama Africa Project placeholder"
              />
              <h3>Mama Africa Project, 2006</h3>
              <p>
                Provided material aid to orphaned primary school children,
                delivered in partnership with the Mama Africa Foundation of
                Canada.
              </p>
              <p className="photo-note">
                Photo placeholder — the original site has a gallery of
                gift-in-kind photos from this project.
              </p>
            </div>
            <div className={styles.giftCard}>
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop"
                alt="Donated desks placeholder"
              />
              <h3>Donated Desks</h3>
              <p>
                School desks donated to Shirati primary schools, documented
                in a photo series credited to Carina Luppold on the
                original site.
              </p>
              <p className="photo-note">
                Photo placeholder — source: &ldquo;SHED Foundation - Donated
                Desks (Carina Luppold)&rdquo; on shedfoundation.info/education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Help send a child to school.</h2>
          <p>Your gift funds education grants, school supplies and global health training in Shirati.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
