import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us — Who We Are',
  description:
    'SHED Foundation has provided health, education and development programs to underserved communities in Shirati, Tanzania since its registration in 2006. Meet our board of directors and history.',
  openGraph: {
    title: 'About SHED Foundation — Who We Are',
    description:
      'Registered in Tanzania since 2006, SHED Foundation delivers health, education and development programs to Shirati and the Rorya District. Meet our board and founding history.',
    url: 'https://www.shedfoundation.org/about',
    type: 'website',
  },
};

const board = [
  {
    name: 'Rev. Manaen Kawira',
    role: 'Chairman, Board of Directors',
    bio: 'A retired General Secretary and pastor of the Tanzania Mennonite Church, Rev. Kawira brings decades of experience with World Vision and the Tanzanian government, and currently manages a family business in Shirati.',
  },
  {
    name: 'Dr. Esther Kawira',
    role: 'Medical Director & Founding Member',
    bio: "A Diplomate of the American Board of Family Medicine, Dr. Kawira holds a faculty appointment at the University of Southern California's Keck School of Medicine and spent 23 years on staff at Shirati Hospital.",
  },
  {
    name: 'Mr. Nyamusi Magatti',
    role: 'Deputy Executive Director',
    bio: 'Supports the day-to-day leadership of SHED Foundation\u2019s programs across health, education and development.',
  },
  {
    name: "Dr. Harun O'maitarya",
    role: 'Founding Member',
    bio: 'One of the founding members of SHED Foundation\u2019s Board of Directors.',
  },
  {
    name: 'Ms. Ellin Akinyi',
    role: 'Founding Member',
    bio: 'One of the founding members of SHED Foundation\u2019s Board of Directors.',
  },
  {
    name: 'Ms. Miriam Ngoya',
    role: 'Founding Member',
    bio: 'One of the founding members of SHED Foundation\u2019s Board of Directors.',
  },
  {
    name: 'Mr. Gaspar Dibogo',
    role: 'Founding Member',
    bio: 'One of the founding members of SHED Foundation\u2019s Board of Directors.',
  },
];

const inMemoriam = ['Josiah Ogada Magati', 'Josiah Okeyo Kawira', 'Jared Okombo'];

const partners = [
  { name: 'Village Life Outreach Project, Inc.', url: 'http://villagelifeoutreachproject.org/' },
  { name: 'Direct Relief', url: 'https://www.directrelief.org/' },
  { name: "Burkitt's Lymphoma Fund for Africa (BLFA)", url: 'http://blfundafrica.org/' },
  { name: 'GlobeMed at Duke University', url: 'http://globemedatduke.wixsite.com/home' },
  { name: 'EMBLEM', url: 'https://emblem.cancer.gov/' },
  { name: 'Goshen College: Tanzania Study-Service Term', url: 'https://www.goshen.edu/tanzania/' },
  { name: 'USC Keck School of Medicine, Office for Global Health', url: 'http://keck.usc.edu/' },
  { name: 'Shirati KMT Hospital', url: 'http://shiratihospital.org/' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1600&auto=format&fit=crop"
          alt="Rural village road near Lake Victoria, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Who We Are</div>
          <h1>Two decades of village-based health, education and development.</h1>
          <p>
            SHED Foundation was built by and for the community of Shirati — a
            Tanzanian-registered nonprofit with a mandate that now reaches
            across the Rorya District and beyond.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className={`wrap ${styles.introGrid}`}>
          <div>
            <div className="kicker">Our Story</div>
            <h2>Providers of health, education and development to underserved communities in Tanzania.</h2>
            <p>
              The Shirati Health, Education and Development Foundation (SHED
              Foundation, or SHEDF) is a registered private nonprofit
              organization that has operated since January 2006. The
              Tanzanian government granted it official non-governmental
              organization (NGO) status in March of that year.
            </p>
            <p>
              Headquartered in Shirati, a rural village in the Rorya
              District of North Western Tanzania on the shore of Lake
              Victoria, near the Kenya border, SHED Foundation carries a
              mandate to work anywhere in mainland Tanzania across three
              connected pillars: health, education and development.
            </p>
          </div>
          <div className={styles.introFigure}>
            <img
              src="https://images.unsplash.com/photo-1571847140471-1d7766e825ea?q=80&w=1200&auto=format&fit=crop"
              alt="Lakeside community near Shirati"
            />
            <p className="photo-note">
              Photo placeholder — replace with an original SHED Foundation
              photo of Shirati or Sota Village from the source site or
              Facebook page.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className={`wrap ${styles.historyGrid}`}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1200&auto=format&fit=crop"
              alt="Groundbreaking ceremony placeholder"
            />
            <p className="photo-note">
              Photo placeholder — the original site features a 2007
              groundbreaking photo at Sota Village showing Killion N.,
              Josiah K., Dr. Esther Kawira, Manaen Kawira and Josia M.
              (left to right). Source: shedfoundation.info homepage video
              section, &ldquo;Our History, 2007.&rdquo; Pull the original file for
              this section.
            </p>
          </div>
          <div>
            <div className="kicker">Our History</div>
            <h2>From registration to a mandate across mainland Tanzania.</h2>
            <p>
              SHED Foundation began its official existence on 24 January
              2006, when it was formally registered with the Tanzanian
              government as a not-for-profit company. On 21 March 2006, the
              government issued a Certificate of Compliance granting the
              organization NGO status.
            </p>
            <p>
              With its head office in Shirati — a rural village in the
              Rorya District bordered by Lake Victoria, near the
              Kenya–Tanzania border — SHED Foundation was given a mandate
              to work anywhere in mainland Tanzania in the areas of health,
              education and development.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.mandate}>
        <div className="wrap">
          <div className={styles.mandateBox}>
            <p>
              &ldquo;SHED Foundation continues to open its doors to
              partnership agreements, projects and opportunities designed
              to bring health, education and development to underserved
              villages and communities across Tanzania.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className={styles.board}>
        <div className="wrap">
          <div className={styles.boardHead}>
            <div className="kicker">Leadership</div>
            <h2>Board of Directors</h2>
          </div>
          <div className={styles.boardGrid}>
            {board.map((member) => (
              <div className={styles.boardCard} key={member.name}>
                <div className="role">{member.role}</div>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>

          <div className={styles.memoriam}>
            <span className="label">Founding Board Members — In Memoriam</span>
            <div className={styles.memoriamNames}>
              {inMemoriam.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className="wrap">
          <div className={styles.partnersHead}>
            <div className="kicker">Friends &amp; Partners</div>
            <h2>Organizations that make our work possible.</h2>
          </div>
          <div className={styles.partnersList}>
            {partners.map((p) => (
              <a href={p.url} target="_blank" rel="noopener noreferrer" key={p.name}>
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Your gift reaches Shirati directly.</h2>
          <p>Every contribution supports village-based health, education and development programs.</p>
          <a href="/donate" className="btn-primary">Donate Now</a>
        </div>
      </section>
    </>
  );
}
