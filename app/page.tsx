import Image from "next/image";

const LINKS = {
  instagram: "https://www.instagram.com/hassaniossef",
  threads: "https://www.threads.com/@hassaniossef",
  facebook: "https://www.facebook.com/hassaniossefoficial/",
  tse: "https://divulgacandcontas.tse.jus.br/divulga/#/candidato/NORDESTE/BA/20322002026/50002535049/2026/BA",
};

const CANDIDATE = {
  fullName: "Hassan Andrade Iossef",
  ballotName: "Hassan de Zé Cocá",
  number: "11122",
  office: "Deputado Estadual",
  state: "Bahia",
  party: "Progressistas (PP)",
  federation: "Federação União Progressista (UNIÃO/PP)",
  cnpj: "68.319.408/0001-64",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: CANDIDATE.fullName,
  alternateName: CANDIDATE.ballotName,
  jobTitle: `Candidato a ${CANDIDATE.office} pela ${CANDIDATE.state}`,
  affiliation: { "@type": "Organization", name: CANDIDATE.party },
  birthPlace: "Jequié, Bahia, Brasil",
  url: siteUrl,
  image: `${siteUrl}/candidato.jpg`,
  sameAs: [LINKS.instagram, LINKS.threads, LINKS.facebook, LINKS.tse],
};

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ThreadsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function ExternalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function Squiggle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 104 48" fill="none" className={className} aria-hidden="true">
      <path d="M4 40 22 8 40 40 58 8 76 40 94 8" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RingBadge({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id="ring-path" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
      </defs>
      <circle cx="100" cy="100" r="98" fill="#0B1660" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="#E2FF3D" strokeWidth="3" />
      <text fill="#ffffff" fontSize="14" fontWeight="800" fontStyle="italic" letterSpacing="1.5" textLength="468" lengthAdjust="spacingAndGlyphs">
        <textPath href="#ring-path">A FORÇA DO TRABALHO • A FORÇA DO TRABALHO •</textPath>
      </text>
      <text x="100" y="114" textAnchor="middle" fontSize="38" fontWeight="900" fontStyle="italic" fill="#E2FF3D">
        2026
      </text>
    </svg>
  );
}

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_10%,#2E4DFF_0%,#1230D6_45%,#0A1A8F_100%)]" />
      <div className="absolute -left-[8%] -top-[4%] w-[140%] -rotate-[8deg] whitespace-nowrap font-black italic leading-[0.82] tracking-[0.02em] text-white/[0.06] text-[22vw] lg:text-[16vw]">
        <div>11122 11122 11122 11122</div>
        <div className="-ml-[9vw]">11122 11122 11122 11122</div>
        <div>11122 11122 11122 11122</div>
        <div className="-ml-[9vw]">11122 11122 11122 11122</div>
        <div>11122 11122 11122 11122</div>
        <div className="-ml-[9vw]">11122 11122 11122 11122</div>
      </div>
      <Squiggle className="absolute -left-6 top-24 h-20 w-40 -rotate-12 text-brand-lime opacity-90 sm:top-28 lg:h-24 lg:w-48" />
      <Squiggle className="absolute -left-3 top-28 h-20 w-40 -rotate-12 text-brand-pink opacity-80 sm:top-32 lg:h-24 lg:w-48" />
      <Squiggle className="absolute -right-6 bottom-28 hidden h-16 w-32 rotate-[14deg] text-brand-pink opacity-80 lg:block lg:bottom-32 lg:h-20 lg:w-40" />
      <Squiggle className="absolute -right-3 bottom-32 hidden h-16 w-32 rotate-[14deg] text-brand-lime opacity-90 lg:block lg:bottom-36 lg:h-20 lg:w-40" />
    </div>
  );
}

const iconButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition hover:bg-brand-lime hover:text-brand-navy hover:ring-brand-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="relative flex min-h-screen flex-col overflow-hidden bg-brand-blue text-white">
        <Backdrop />

        <header className="relative z-10 flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#" className="flex items-baseline gap-1.5 whitespace-nowrap font-black italic leading-none" aria-label="Hassan de Zé Cocá">
            <span className="text-xl tracking-tight sm:text-2xl">HASSAN</span>
            <span className="text-base text-brand-lime sm:text-lg">de Zé Cocá</span>
          </a>
          <nav className="flex items-center gap-2 sm:gap-3" aria-label="Redes sociais">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={iconButton} aria-label="Instagram @hassaniossef">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className={iconButton} aria-label="Facebook Hassan Iossef Oficial">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={LINKS.threads} target="_blank" rel="noopener noreferrer" className={iconButton} aria-label="Threads @hassaniossef">
              <ThreadsIcon className="h-5 w-5" />
            </a>
            <span className="ml-1 hidden rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider ring-1 ring-white/20 sm:inline-flex">
              Progressistas · PP
            </span>
          </nav>
        </header>

        <section className="relative z-10 flex flex-1 items-center px-5 pb-8 pt-2 sm:px-8 lg:px-12 lg:pb-6">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-navy/50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-lime ring-1 ring-white/15 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-brand-pink" />
                Deputado Estadual · Bahia<span className="hidden sm:inline"> · Eleições 2026</span>
              </p>

              <h1 className="mt-4 font-black italic leading-[0.85] tracking-tight">
                <span className="block text-[16vw] sm:text-7xl lg:text-[clamp(4.5rem,12vh,7.5rem)]">HASSAN</span>
                <span className="block text-[8.5vw] text-brand-lime sm:text-4xl lg:text-[clamp(2.25rem,6vh,3.75rem)]">de Zé Cocá</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-balance text-base text-white/85 sm:text-lg lg:mx-0">
                <strong className="font-extrabold text-white">A força do trabalho.</strong>{" "}
                <span className="hidden sm:inline">Empresário, natural de Jequié, candidato a Deputado Estadual pela Bahia pela {CANDIDATE.federation}.{" "}</span>
                <span className="font-extrabold italic text-brand-lime">É Hassan de novo!</span>
              </p>

              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-5 lg:justify-start">
                <div className="inline-flex items-center rounded-2xl bg-brand-lime px-5 py-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] sm:px-6">
                  <span className="-mr-[0.03em] text-6xl font-black italic leading-none tracking-[0.03em] text-brand-pink sm:text-7xl lg:text-[clamp(4rem,10vh,6rem)]">
                    {CANDIDATE.number}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-black uppercase tracking-wider text-white sm:text-base">Para Deputado Estadual</p>
                  <p className="text-xs font-semibold text-white/75 sm:text-sm">Digite {CANDIDATE.number} e confirme</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:mt-5 lg:justify-start">
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-lime px-5 py-3 text-sm font-extrabold text-brand-navy shadow-lg transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Seguir no Instagram
                </a>
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/30 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href={LINKS.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/30 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
                >
                  <ThreadsIcon className="h-4 w-4" />
                  Threads
                </a>
              </div>

              <p className="mt-4 text-sm text-white/75 lg:mt-3">
                <a
                  href={LINKS.tse}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold underline decoration-brand-lime/70 underline-offset-4 transition hover:text-white"
                >
                  Candidatura registrada no TSE
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
              </p>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-2 -rotate-2 translate-x-3 translate-y-3 rounded-[2rem] bg-brand-pink/90" />
                <div className="relative overflow-hidden rounded-[2rem] ring-4 ring-brand-lime shadow-2xl">
                  <Image
                    src="/candidato.jpg"
                    alt="Hassan de Zé Cocá, candidato a Deputado Estadual pela Bahia, número 11122"
                    width={986}
                    height={1656}
                    priority
                    sizes="(min-width: 1024px) 420px, 56vw"
                    className="block h-auto w-[56vw] max-w-[280px] sm:w-[46vw] sm:max-w-[340px] lg:h-[calc(100vh-12rem)] lg:min-h-[440px] lg:w-auto lg:max-w-none"
                  />
                </div>
                <RingBadge className="absolute -right-5 -top-5 h-24 w-24 animate-spin-slow drop-shadow-xl sm:h-28 sm:w-28 lg:-left-14 lg:right-auto lg:top-6 lg:h-40 lg:w-40" />
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/15 bg-brand-navy/40 px-5 py-4 text-xs text-white/70 backdrop-blur sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div className="space-y-1">
              <p className="font-semibold text-white/85">© 2026 Hassan Iossef · Candidato a Deputado Estadual — Bahia</p>
              <p>
                {CANDIDATE.federation} · Candidato CNPJ: <span className="tabular-nums">{CANDIDATE.cnpj}</span>
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-semibold" aria-label="Links">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-lime">Instagram</a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-lime">Facebook</a>
              <a href={LINKS.threads} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-lime">Threads</a>
              <a href={LINKS.tse} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-lime">DivulgaCand · TSE</a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
