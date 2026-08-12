import type { Metadata } from 'next';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';
import styles from './health.module.css';

export const metadata: Metadata = {
  title: 'Health — Sota Health Clinic',
  description:
    'SHED Foundation operates the Sota Health Clinic, "Derek\u2019s House" — a village-based primary care facility offering maternal health, ultrasound imaging, Burkitt\u2019s Lymphoma treatment, immunizations and family planning in Shirati, Tanzania.',
  openGraph: {
    title: 'Health — Sota Health Clinic | SHED Foundation',
    description:
      'A village-based primary care facility in Sota Village providing preventive and curative care, maternal health, Burkitt\u2019s Lymphoma treatment and childhood immunizations.',
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
          <h1>Sota Health Clinic, &ldquo;Derek&rsquo;s House.&rdquo;</h1>
          <p>
            A village-based primary care facility providing preventive and
            curative services to all ages, maternal health, cancer
            treatment and diagnostic imaging for the community of Sota
            Village and beyond.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className={styles.intro}>
        <div className={`wrap ${styles.introGrid}`}>
          <div>
            <div className="kicker">Primary Care</div>
            <h2>Preventive and curative care for every age, both genders.</h2>
            <p>
              Deliveries at the clinic are carried out by a nurse-midwife or
              nurse assistant, with patients typically discharged the day
              after delivery. When a labor patient needs advanced care such
              as a Cesarean section, an ambulance is called from Shirati
              Hospital to transport her.
            </p>
            <p>
              On the outpatient side, the clinic most often treats malaria,
              schistosomiasis, soil-transmitted helminths and amebiasis,
              alongside peptic ulcer disease, sexually transmitted
              infections, HIV and tuberculosis. TB treatment is provided
              free of charge nationwide in Tanzania.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
              alt="Clinic exterior placeholder"
            />
            <p className="photo-note">
              Photo placeholder — the original site includes a photo
              captioned &ldquo;Sota Health Clinic&rdquo; and another of Dr.
              Esther Kawira captioned &ldquo;Inpatients Visits.&rdquo; Pull
              these from shedfoundation.info/health.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.statsStrip}>
        <div className="wrap">
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.num}>2<span>,269</span></div>
              <div className={styles.label}>Outpatient visits recorded in December 2015</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.num}>3<span>,000+</span></div>
              <div className={styles.label}>Male circumcision procedures completed in under three months (2015)</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.num}>5</div>
              <div className={styles.label}>Follow-up treatment cycles for Burkitt&rsquo;s Lymphoma patients</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">What We Do</div>
            <h2>Clinical services at Sota Health Clinic.</h2>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Imaging &amp; Ultrasound</h3>
              <p>
                A portable ultrasound machine supports general abdominal and
                obstetric scanning. Every pregnant patient receives one
                routine ultrasound at her second antenatal visit, free of
                charge, and Burkitt&rsquo;s Lymphoma patients staying at the
                clinic are followed with regular scans to track tumor
                regression.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Burkitt&rsquo;s Lymphoma Treatment</h3>
              <p>
                Burkitt&rsquo;s Lymphoma is the most common childhood cancer
                in East Africa. Children with suspected cases are referred
                to Bugando Medical Center for diagnosis and initial
                treatment, then return to Sota Health Clinic for five
                follow-up treatment cycles.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>EMBLEM Study</h3>
              <p>
                SHED Foundation was a research site for the EMBLEM study, a
                case-control study of childhood Burkitt&rsquo;s Lymphoma
                across Tanzania, Uganda and Kenya, funded by the U.S.
                National Cancer Institute. Data collection at our site has
                concluded, with follow-up study planned.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Male Circumcision Project (&ldquo;Tohara&rdquo;)</h3>
              <p>
                Funded through the Association of Private Health Facilities
                in Tanzania and USAID, this HIV-prevention program ran a
                major campaign across health facilities in Rorya District
                and North Mara Region in May 2015, completing over 3,000
                procedures in under three months.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Inpatient &amp; Outpatient Care</h3>
              <p>
                The clinic provides ongoing preventive and curative care
                for all ages and genders, from routine outpatient
                treatment to inpatient delivery and recovery care, with
                ambulance referral to Shirati Hospital when advanced care
                is needed.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Roche Health Center</h3>
              <p>
                SHED Foundation&rsquo;s clinical work is complemented by the
                Roche Health Center, run with our partner Village Life
                Outreach Project.
              </p>
              <Link href="http://villagelifeoutreachproject.org/our-work/roche-health-center/" target="_blank" rel="noopener noreferrer">
                Visit Village Life Outreach Project &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rch}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div className="kicker">Reproductive &amp; Child Health</div>
            <h2>Maternal care and immunizations, free of charge.</h2>
          </div>
          <div className={styles.rchGrid}>
            <div className={styles.rchCard}>
              <h3>Childhood Immunizations</h3>
              <p>
                Provided free of charge across multiple visits during a
                child&rsquo;s first year of life, covering polio,
                diphtheria, pertussis, tetanus, hepatitis B, pneumococcus,
                TB and measles.
              </p>
            </div>
            <div className={styles.rchCard}>
              <h3>Rubella &amp; Measles Vaccine</h3>
              <p>
                Given to babies at 9 and 18 months. The vaccine became a
                routine part of the immunization schedule following
                introductory mass campaigns in 2014.
              </p>
            </div>
            <div className={styles.rchCard}>
              <h3>Antenatal Care</h3>
              <p>
                Provided free of charge in line with Tanzanian government
                policy, including screening for HIV and syphilis, tetanus
                immunization, iron and folic acid supplementation, and
                deworming medication.
              </p>
            </div>
            <div className={styles.rchCard}>
              <h3>HPV Vaccine</h3>
              <p>
                The papillomavirus vaccine, which prevents cervical cancer,
                began rolling out nationally in April 2018 for girls aged 9
                to 14. Sota Health Clinic is one of the participating
                sites, with annual vaccination of 9-year-olds continuing
                after the initial mass campaign.
              </p>
            </div>
            <div className={styles.rchCard}>
              <h3>Prevention of Mother-to-Child Transmission</h3>
              <p>
                Antiretroviral treatment begins immediately for any
                pregnant woman found HIV-positive during antenatal
                screening, and her newborn receives preventive medication
                for the first 18 months of life.
              </p>
            </div>
            <div className={styles.rchCard}>
              <h3>Family Planning</h3>
              <p>
                Sota Health Clinic offers oral contraceptives, injectable
                hormones, intrauterine devices, hormonal implants and
                condoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-band">
        <div className="wrap">
          <h2>Help keep the clinic doors open.</h2>
          <p>Your gift supports free maternal care, cancer treatment and childhood immunizations in Sota Village.</p>
          <Link href="/donate" className="btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
