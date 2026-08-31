import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Our History',
  description:
    'SHED Foundation was established in Tanzania in January 2006 and received NGO status in March 2006. A look at the wide range of health, education, research, and community-development initiatives over the years.',
  openGraph: {
    title: 'Our History | SHED Foundation',
    description:
      'From primary health care to education and community development — the history of SHED Foundation since 2006 and its enduring partnership with Village Life Outreach Project.',
    url: 'https://www.shedfoundation.org/history',
    type: 'website',
  },
};

export default function HistoryPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
          alt="Community meeting in a rural setting"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Our History</div>
          <h1>From 2006 to today: a partnership with the communities of northern Tanzania.</h1>
          <p>SHED Foundation&apos;s story, including the many programs that have shaped its work over the years.</p>
        </div>
      </section>

      <WaveDivider />

      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <div className="kicker">Our History</div>
          <h2 style={{ fontSize: '32px', color: 'var(--green-darker)', margin: '0 0 20px', fontWeight: 600 }}>Our History</h2>
          <div style={{ maxWidth: '720px', fontSize: '15.5px', lineHeight: 1.75, color: 'var(--ink-soft)' }}>
            <p style={{ marginBottom: '1rem' }}>
              SHED Foundation was established in Tanzania in January 2006 and received NGO status in March 2006,
              with its headquarters in Shirati in the Rorya District of northern Tanzania. The Foundation was
              created to improve health, education, and community development in underserved Tanzanian communities.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Over the years, SHED has participated in a wide range of health, education, research, and
              community-development initiatives. Its work has included primary and maternal health care, childhood
              health programs, Burkitt lymphoma treatment and research, public-health initiatives, educational
              assistance, international health-education partnerships, and community-development projects. SHED has
              collaborated with Tanzanian communities as well as organizations and universities in Tanzania and
              abroad.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              One of SHED&apos;s most important and enduring partnerships has been with{' '}
              <em>Village Life Outreach Project</em>, which has worked with SHED in Tanzania since the early years
              of the Foundation. Together, SHED, Village Life, and local communities have helped expand access to
              health care, education, nutrition, clean water, and sustainable community development. Today, this
              partnership remains central to SHED Foundation&apos;s work.
            </p>
            <p>
              <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Learn more about Village Life Outreach Project &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
