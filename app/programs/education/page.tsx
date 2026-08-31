import type { Metadata } from 'next';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'SHED Foundation works with Village Life Outreach Project to support education and opportunities for children and communities in rural northern Tanzania.',
  openGraph: {
    title: 'Education | SHED Foundation',
    description:
      'Current partnership efforts connect education with broader initiatives involving nutrition, health, and sustainable community development.',
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
          <h1>Education and opportunities for children and communities.</h1>
          <p>
            SHED Foundation works with Village Life Outreach Project to support education and opportunities for
            children and communities in rural northern Tanzania.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <div className="kicker">Education</div>
          <h2 style={{ fontSize: '32px', color: 'var(--green-darker)', margin: '0 0 20px', fontWeight: 600 }}>Education</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: '720px' }}>
            SHED Foundation works with Village Life Outreach Project to support education and opportunities for
            children and communities in rural northern Tanzania. Current partnership efforts connect education with
            broader initiatives involving nutrition, health, and sustainable community development, helping create
            stronger opportunities for children and families.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="https://villagelifeoutreachproject.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Learn more about our work with Village Life Outreach Project &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
