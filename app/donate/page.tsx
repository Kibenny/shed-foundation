import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Donation information for SHED Foundation is currently being updated. Please check back soon.',
  openGraph: {
    title: 'Donate | SHED Foundation',
    description: 'Thank you for your interest in supporting SHED Foundation. Updated donation information will be available here soon.',
    url: 'https://www.shedfoundation.org/donate',
    type: 'website',
  },
};

export default function DonatePage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
          alt="Lake Victoria shoreline, Shirati, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Donate</div>
          <h1>Donation information is being updated.</h1>
          <p>Thank you for your interest in supporting SHED Foundation. Updated donation information will be available here soon.</p>
        </div>
      </section>

      <WaveDivider />

      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <div className="kicker">In the meantime</div>
          <h2 style={{ fontSize: '32px', color: 'var(--green-darker)', margin: '0 0 16px', fontWeight: 600 }}>Thank you for your support.</h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--ink-soft)', maxWidth: '680px' }}>
            SHED Foundation is grateful for every contribution that helps sustain health, education, and community
            development in northern Tanzania. We are currently preparing updated donation information as part of the
            next phase of our website.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            For questions about supporting SHED, please <Link href="/contact" className="btn-primary">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
