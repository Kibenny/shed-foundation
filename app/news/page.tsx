import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './news.module.css';

export const metadata: Metadata = {
  title: 'News — SHED Foundation',
  description:
    'Updates from SHED Foundation\u2019s work in Shirati, Tanzania. Check back soon, or follow along on Facebook.',
  openGraph: {
    title: 'News | SHED Foundation',
    description: 'Updates from SHED Foundation\u2019s work in Shirati, Tanzania.',
    url: 'https://www.shedfoundation.org/news',
    type: 'website',
  },
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1600&auto=format&fit=crop"
          alt="Sota Village, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">News</div>
          <h1>Updates from Shirati.</h1>
          <p>
            The latest from the Sota Health Clinic, our schools and our
            partner villages &mdash; as we have it to share.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className="wrap">
          <div className={styles.introInner}>
            <div className="kicker">Check Back Soon</div>
            <h2>We don&rsquo;t have a news archive to show here yet.</h2>
            <p>
              This site is being rebuilt page by page, and a news section
              hasn&rsquo;t been part of SHED Foundation&rsquo;s site before
              now. Rather than fill this page with guesses, we&rsquo;re
              leaving it here as a placeholder until there&rsquo;s something
              real to publish.
            </p>
            <p>
              In the meantime, the most current updates on clinic activity,
              school support and partner village work come through SHED
              Foundation&rsquo;s Facebook page.
            </p>
            <div className={styles.linkRow}>
              <a
                href="https://www.facebook.com/SHEDFoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow on Facebook
              </a>
              <Link href="/contact" className="btn-secondary on-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.updates}>
        <div className="wrap">
          <div className={styles.updatesInner}>
            <div className={styles.sectionHead}>
              <h3>Have an update to share?</h3>
            </div>
            <div className={styles.placeholderCard}>
              <p>
                If you&rsquo;re part of SHED Foundation and have a recent
                clinic milestone, school update or partner announcement,
                send it our way and we&rsquo;ll get a real news section
                built around it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Support the work behind every future update.</h2>
          <p>Your gift keeps the clinic, schools and partner villages running between now and the next headline.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
