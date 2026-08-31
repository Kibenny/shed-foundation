import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Development',
  description:
    'SHED Foundation partners with Village Life Outreach Project and local communities to support sustainable development in rural northern Tanzania.',
  openGraph: {
    title: 'Development | SHED Foundation',
    description:
      'Community-led solutions that strengthen access to clean water, health, education, nutrition, and other resources that improve quality of life.',
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
          <h1>Community-led development in rural northern Tanzania.</h1>
          <p>
            SHED Foundation partners with Village Life Outreach Project and local communities to support
            sustainable development in the Shirati region.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <div className="kicker">Development</div>
          <h2 style={{ fontSize: '32px', color: 'var(--green-darker)', margin: '0 0 20px', fontWeight: 600 }}>Development</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: '720px' }}>
            SHED Foundation partners with Village Life Outreach Project and local communities to support
            sustainable development in rural northern Tanzania. This work focuses on community-led solutions
            that strengthen access to clean water, health, education, nutrition, and other resources that
            improve quality of life and create long-term opportunities for local families.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Learn more about Village Life Outreach Project &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
