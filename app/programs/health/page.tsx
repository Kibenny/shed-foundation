import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Health',
  description:
    'SHED Foundation works in partnership with Village Life Outreach Project and Roche Health Center to improve access to quality health care in rural northern Tanzania.',
  openGraph: {
    title: 'Health | SHED Foundation',
    description:
      'SHED supports locally based health services and collaborates with its partners to strengthen sustainable health care for the communities of Roche and the surrounding region.',
    url: 'https://www.shedfoundation.org/programs/health',
    type: 'website',
  },
};

export default function HealthPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop"
          alt="Rural health clinic, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Health</div>
          <h1>Supporting quality health care in the communities of Roche.</h1>
          <p>
            SHED Foundation works in partnership with Village Life Outreach Project and Roche Health Center to
            improve access to quality health care in rural northern Tanzania.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <div className="kicker">Health</div>
          <h2 style={{ fontSize: '32px', color: 'var(--green-darker)', margin: '0 0 20px', fontWeight: 600 }}>Health</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: '720px' }}>
            SHED Foundation works in partnership with Village Life Outreach Project and Roche Health Center to
            improve access to quality health care in rural northern Tanzania. SHED supports locally based health
            services and collaborates with its partners to strengthen sustainable health care for the communities
            of Roche and the surrounding region.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Village Life Outreach Project &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
