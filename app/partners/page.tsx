import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './partners.module.css';

export const metadata: Metadata = {
  title: 'Partners — SHED Foundation',
  description:
    'The organizations and institutions SHED Foundation works alongside to deliver health, education and development to Shirati, Tanzania.',
  openGraph: {
    title: 'Partners | SHED Foundation',
    description:
      'The friends and partners of SHED Foundation, from Village Life Outreach Project to Shirati KMT Hospital.',
    url: 'https://www.shedfoundation.org/partners',
    type: 'website',
  },
};

const partners = [
  {
    name: 'Village Life Outreach Project, Inc.',
    url: 'http://villagelifeoutreachproject.org/',
    blurb:
      "SHED Foundation's partner for the Global Development Partnership Program, based in Cincinnati, Ohio. Together the two organizations address health, malaria prevention, education, sanitation and water in target villages, and are building the Roche Health Center with the University of Cincinnati.",
  },
  {
    name: 'Direct Relief',
    url: 'https://www.directrelief.org/',
    blurb:
      "A humanitarian aid organization that has featured SHED Foundation's Burkitt's Lymphoma treatment work, including patient stories from Sota Health Clinic.",
  },
  {
    name: "Burkitt's Lymphoma Fund for Africa (BLFA)",
    url: 'http://blfundafrica.org/',
    blurb:
      "Works alongside SHED Foundation on Burkitt's Lymphoma, the childhood cancer treated and followed up at Sota Health Clinic.",
  },
  {
    name: 'GlobeMed at Duke University',
    url: 'http://globemedatduke.wixsite.com/home',
    blurb:
      'Became an official partner in 2015, continuing schistosomiasis control work in target villages and primary schools across Rorya District. The partnership concluded in 2017.',
  },
  {
    name: 'EMBLEM',
    url: 'https://emblem.cancer.gov/',
    blurb:
      "A three-country case-control study of childhood Burkitt's Lymphoma across Tanzania, Uganda and Kenya, funded by the U.S. National Cancer Institute. Sota Health Clinic served as a research site.",
  },
  {
    name: 'Goshen College: Tanzania Study-Service Term (SST)',
    url: 'https://www.goshen.edu/tanzania/',
    blurb:
      "A study-abroad and service-learning program in Tanzania, listed among SHED Foundation's partner organizations.",
  },
  {
    name: 'USC Keck School of Medicine, Office for Global Health',
    url: 'http://keck.usc.edu/',
    blurb:
      "Home to the faculty appointment held by Dr. Esther Kawira, SHED Foundation's Medical Director and a founding member, who worked at Shirati Hospital for 23 years.",
  },
  {
    name: 'Shirati KMT Hospital',
    url: 'http://shiratihospital.org/',
    blurb:
      'The referral hospital roughly ten minutes by ambulance from Sota Health Clinic, providing advanced care such as Cesarean sections when needed.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
          alt="Collaborative community meeting placeholder"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Partners</div>
          <h1>We don&rsquo;t do this work alone.</h1>
          <p>
            From a village clinic in Sota to research institutions and
            universities abroad, SHED Foundation&rsquo;s programs run on
            long-standing partnerships.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className="wrap">
          <div className={styles.introInner}>
            <div className="kicker">Friends &amp; Partners</div>
            <h2>Eight organizations, one shared mandate.</h2>
            <p>
              SHED Foundation stays open to partnership agreements, projects
              and opportunities that bring health, education and development
              to underserved villages and communities in Tanzania. The
              organizations below are the ones it has worked alongside so
              far &mdash; from clinical research collaborators to the
              referral hospital ten minutes down the road.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.grid}>
        <div className="wrap">
          <div className={styles.partnerGrid}>
            {partners.map((p) => (
              <div className={styles.partnerCard} key={p.name}>
                <div className={styles.partnerMark}>{p.name.charAt(0)}</div>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  Visit website &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className="wrap">
          <div className={styles.joinBox}>
            <h2>Interested in partnering with us?</h2>
            <p>
              SHED Foundation may enter into arrangements with any person,
              group or association engaged in supporting its mission of
              health, education and development for underserved communities
              in Tanzania.
            </p>
            <Link href="/contact" className="btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Not ready to partner? You can still help.</h2>
          <p>A gift supports the same programs these partnerships make possible.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
