import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './gallery.module.css';

export const metadata: Metadata = {
  title: 'Gallery — SHED Foundation',
  description:
    'A look at SHED Foundation\u2019s work across the Sota Health Clinic, education grants and gifts in kind, and community development in Shirati, Tanzania.',
  openGraph: {
    title: 'Gallery | SHED Foundation',
    description:
      'Photos from SHED Foundation\u2019s health, education and development work in Shirati, Tanzania.',
    url: 'https://www.shedfoundation.org/gallery',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop"
          alt="Lake Victoria shoreline near Shirati, Tanzania"
        />
        <div className="page-hero-content">
          <div className="eyebrow">Gallery</div>
          <h1>Life across our health, education and development work.</h1>
          <p>
            Moments from the Sota Health Clinic, our schools and partner
            villages, and the people who make SHED Foundation&rsquo;s work
            possible &mdash; captured over nearly two decades in Shirati.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className="wrap">
          <div className={styles.noteBox}>
            <div className={styles.noteMark}>&ldquo;</div>
            <div>
              <h2>A note on these photos</h2>
              <p>
                We don&rsquo;t yet have real photography loaded into this
                site. Every image below is a temporary stock placeholder,
                standing in for a specific photo from SHED Foundation&rsquo;s
                archive &mdash; each one captioned with what the original
                photo showed and where it came from, so real files can drop
                straight in once we have them. Nothing here describes a real
                photo we haven&rsquo;t seen; the captions reflect only what
                was documented on the organization&rsquo;s own site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Health</div>
            <h2>Sota Health Clinic, &ldquo;Derek&rsquo;s House.&rdquo;</h2>
            <p>Clinical care, imaging, immunization and outreach work at the clinic in Sota Village.</p>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop"
                alt="Rural health clinic placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Sota Health Clinic</h3>
                <p className="photo-note">
                  Placeholder for the clinic exterior, captioned &ldquo;SHED
                  Foundation &ndash; Sota Health Clinic&rdquo; on the
                  original Health page.
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop"
                alt="Clinic inpatient care placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Inpatient Visits</h3>
                <p className="photo-note">
                  Placeholder for a photo credited to Dr. Esther Kawira,
                  captioned &ldquo;Inpatients Visits&rdquo; on the original
                  Health page.
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=900&auto=format&fit=crop"
                alt="Clinic outpatient waiting area placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Outpatient Visits</h3>
                <p className="photo-note">
                  Placeholder for the &ldquo;Outpatient Visits&rdquo; photo
                  from the original Health page, illustrating the clinic&rsquo;s
                  day-to-day caseload.
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop"
                alt="Portable ultrasound imaging placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Imaging &amp; Ultrasound</h3>
                <p className="photo-note">
                  Placeholder for the &ldquo;portable ultrasound
                  machine&rdquo; photo shown on the original Health page.
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop"
                alt="EMBLEM study research placeholder"
              />
              <div className={styles.cardBody}>
                <h3>EMBLEM Study</h3>
                <p className="photo-note">
                  Placeholder for the photo captioned &ldquo;SHED Foundation
                  &ndash; EMBLEM Study&rdquo; on the original Health page.
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=900&auto=format&fit=crop"
                alt="Community health outreach placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Male Circumcision Project (&ldquo;Tohara&rdquo;)</h3>
                <p className="photo-note">
                  Placeholder for the photo captioned &ldquo;SHED Foundation
                  &ndash; Sota Health Clinic (Tohara Project)&rdquo; on the
                  original Health page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Education</div>
            <h2>Grants, gifts in kind and school support.</h2>
            <p>Material aid and education assistance delivered to schools and health workers in Rorya District.</p>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop"
                alt="School children receiving aid placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Mama Africa Project, 2006</h3>
                <p className="photo-note">
                  Placeholder for one of a six-photo set on the original
                  Education page, captioned: &ldquo;Mama Africa Project 2006:
                  This project provided material aid to orphaned primary
                  school children by Mama Africa Foundation of Canada.&rdquo;
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop"
                alt="Classroom desks placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Donated Desks</h3>
                <p className="photo-note">
                  Placeholder for a set of photos on the original Education
                  page, captioned &ldquo;SHED Foundation &ndash; Donated
                  Desks (Carina Luppold)&rdquo; and, on the homepage,
                  &ldquo;Donated Desks to Shirati Primary Schools.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Development</div>
            <h2>Roche Health Center &amp; partner villages.</h2>
            <p>Development work carried out with Village Life Outreach Project across target villages.</p>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=900&auto=format&fit=crop"
                alt="Community health center construction placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Roche Health Center</h3>
                <p className="photo-note">
                  Placeholder for the photo referenced on the original
                  Development page as &ldquo;(pictured)&rdquo; alongside the
                  Roche Health Center, built with Village Life Outreach
                  Project and the University of Cincinnati.
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1509390986743-8b78c4a3ef43?q=80&w=900&auto=format&fit=crop"
                alt="Village outreach program placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Sota Health Clinic</h3>
                <p className="photo-note">
                  Placeholder for the clinic photo used to illustrate
                  &ldquo;To Improve Development&rdquo; on the original
                  homepage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">History &amp; Team</div>
            <h2>Nearly two decades in Shirati.</h2>
            <p>The people and milestones behind SHED Foundation, since its 2006 registration.</p>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop"
                alt="Groundbreaking ceremony placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Groundbreaking, Sota &mdash; 2007</h3>
                <p className="photo-note">
                  Placeholder for the photo captioned on the original
                  homepage: &ldquo;2007: Groundbreaking, Sota. Killion N.,
                  Josiah K., Dr. Esther K., Manaen K. and Josia M. (L to
                  R).&rdquo;
                </p>
              </div>
            </div>
            <div className={styles.galleryCard}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
                alt="Founding board members portrait placeholder"
              />
              <div className={styles.cardBody}>
                <h3>Founding Board Members</h3>
                <p className="photo-note">
                  Placeholder for a group portrait of the founding board
                  &mdash; no specific photo was documented on the original
                  site; SHED Foundation should confirm before this is used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="wrap">
          <p>
            Have real photos from the clinic, schools or partner villages?
            We&rsquo;d love to replace every placeholder above with the real
            thing &mdash; <Link href="/contact">get in touch</Link>.
          </p>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Help us document this work for years to come.</h2>
          <p>Your gift supports the clinic, schools and villages behind every photo on this page.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
