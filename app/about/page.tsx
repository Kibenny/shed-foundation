import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'SHED Foundation (Shirati Health, Education and Development Foundation) is a Tanzanian nonprofit founded in 2006 to improve health, education, and community development in northern Tanzania.',
  openGraph: {
    title: 'About SHED Foundation',
    description:
      'SHED Foundation is a Tanzanian nonprofit working closely with Village Life Outreach Project and local communities in the Shirati region.',
    url: 'https://www.shedfoundation.org/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1600&auto=format&fit=crop"
          alt="Rural village road near Lake Victoria, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">About Us</div>
          <h1>Health, education and community development in northern Tanzania.</h1>
          <p>
            SHED Foundation (Shirati Health, Education and Development Foundation) is a Tanzanian nonprofit
            organization founded in 2006 to improve health, education, and community development in underserved
            communities in northern Tanzania. Today, SHED works closely with Village Life Outreach Project and
            local communities to support sustainable health, education, and development initiatives in the Shirati
            region.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className={`wrap ${styles.introGrid}`}>
          <div>
            <div className="kicker">Who We Are</div>
            <h2>Working in partnership with the communities of Shirati.</h2>
            <p>
              Today, SHED works closely with Village Life Outreach Project and local communities to support
              sustainable health, education, and development initiatives in the Shirati region.
            </p>
            <p>
              <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Visit Village Life Outreach Project &rarr;
              </a>
            </p>
          </div>
          <div className={styles.introFigure}>
            <img
              src="https://images.unsplash.com/photo-1571847140471-1d7766e825ea?q=80&w=1200&auto=format&fit=crop"
              alt="Lakeside community near Shirati"
            />
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
            <div className={styles.boardCard}>
              <img src="/images/erick-kawira.png" alt="Erick Nyambock Kawira" className={styles.boardPhoto} />
              <div className="role">Chairman of the Board</div>
              <h3>Erick Nyambock Kawira</h3>
            </div>
          </div>

          <div className={styles.memoriam}>
            <span className="label">Founding Board Members</span>
            <div className={styles.memoriamNames}>
              <span>Josiah Ogada Magati</span>
              <span>Josiah Okeyo Kawira</span>
              <span>Jared Okombo</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
