import FeaturedProject from './components/FeaturedProject';
import BrandMockups from './components/BrandMockups';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Reveal from './components/Reveal';
import ResponsiveImage from './components/ResponsiveImage';
import ServiceCard from './components/ServiceCard';
import { SERVICES } from './services';
import PortfolioSlider from './components/PortfolioSlider';
import { PORTFOLIO_SLIDES } from './portfolio';

const EMAIL = 'kontakt@filipkepka.pl';
const PROJECTS = [
  {
    id: 'branding',
    name: 'Logo i branding',
    tag: 'TOŻSAMOŚĆ MARKI',
    title: (
      <>
        Logo i <br />
        <em>branding.</em>
      </>
    ),
    description:
      'Pierwsze wrażenie zostaje na długo. Tworzę spójny język wizualny, który pozwala marce mówić własnym głosem.',
    className: 'branding',
    skills: ['Logo', 'Księga znaku', 'Identyfikacja'],
  },
  {
    id: 'menu',
    name: 'Projekty menu',
    tag: 'PROJEKT MENU',
    title: (
      <>
        Projekty <br />
        <em>menu.</em>
      </>
    ),
    description:
      'Dobre menu prowadzi do dobrego wyboru. Porządkuję ofertę i nadaję jej czytelną formę.',
    className: 'print',
    skills: [
      'Projekt karty dań i napojów',
      'Czytelna hierarchia informacji',
      'Pliki przygotowane do druku',
    ],
  },
  {
    id: 'druk',
    name: 'Materiały do druku',
    tag: 'DESIGN, KTÓRY MOŻESZ DOTKNĄĆ',
    title: (
      <>
        Materiały <br />
        <em>do druku.</em>
      </>
    ),
    description:
      'Projekt, który trafia do rąk. Tworzę plakaty, ulotki i broszury z dbałością o układ i czytelność.',
    className: 'print',
    skills: ['Plakaty', 'Ulotki', 'Broszury'],
  },
  {
    id: 'digital',
    name: 'Grafiki reklamowe',
    tag: 'GRAFIKA PROMOCYJNA',
    title: (
      <>
        Grafiki <br />
        <em>reklamowe.</em>
      </>
    ),
    description:
      'Grafika ma zatrzymać wzrok w kilka sekund. Łączę mocny obraz z prostym komunikatem, by oferta była zrozumiała na pierwszy rzut oka.',
    className: 'digital',
    skills: ['Grafika promocyjna'],
  },
];

function ServiceIcon({ type }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      {type === 'logo' ? (
        <>
          <path d="m20 5 15 15-15 15L5 20Z" />
          <path d="M20 5v30M5 20h30" />
        </>
      ) : type === 'menu' ? (
        <>
          <rect x="9" y="5" width="23" height="30" rx="2" />
          <path d="M15 13h11M15 19h11M15 25h7M5 10v22" />
        </>
      ) : (
        <>
          <rect x="4" y="7" width="32" height="25" rx="3" />
          <path d="M4 14h32M10 10.5h1m3 0h1m3 0h1M14 20l-4 4 4 4m12-8 4 4-4 4" />
        </>
      )}
    </svg>
  );
}
function Logo() {
  return (
    <span className="logo-crop">
      <img src="/assets/filip-kepka-logo.png" width="800" height="657" alt="FK — Filip Kępka" />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Przejdź do treści
      </a>
      <Header logo={<Logo />} />
      <Reveal />
      <main id="main">
        {/* 01 — HERO. Autorska kompozycja ze znakiem FK. */}
        <section className="hero section-shell" id="start">
          <div className="hero-body">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="small-line" /> DOBRY DESIGN MA ZNACZENIE
              </p>
              <h1>
                Filip
                <br />
                <span>
                  Kępka<span className="accent">.</span>
                </span>
              </h1>
              <h2>
                Projektuję materiały dla firm,
                <br className="desktop-break" /> które zapewniają <em>efekty.</em>
              </h2>
              <p className="hero-description">
                Od pierwszego pomysłu do ostatniego detalu.
                <br />
                Pomagam markom wyglądać dobrze i mówić jasno.
              </p>
              <a className="button button-primary" href="#portfolio">
                Zobacz portfolio
              </a>
            </div>
            <FeaturedProject />
          </div>
        </section>
        {/* 02 — PORTFOLIO. Każda kategoria ma własny pełnoekranowy panel. */}
        <div id="portfolio" className="portfolio">
          {PROJECTS.map((project) => (
            <section
              key={project.id}
              id={project.id}
              className={`project-section ${project.className}`}
            >
              <div className="section-shell project-inner">
                <div className="project-layout" data-reveal>
                  <div className="project-copy">
                    <p className="eyebrow">{project.tag}</p>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                    <a className="text-link" href="#kontakt">
                      Porozmawiajmy o Twoim projekcie
                    </a>
                  </div>
                  <div className="project-presentation">
                    <PortfolioSlider slides={PORTFOLIO_SLIDES[project.id]} label={project.name} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {/* 03 — OFERTA */}
        <section className="services section-shell section-spacing" id="oferta">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">W CZYM MOGĘ POMÓC</p>
              <h2>
                Dobry design.
                <br />
                <em>Jasne zasady.</em>
              </h2>
            </div>
            <p>
              Mała zmiana czy zupełnie nowy początek?
              <br />
              Dobierzmy zakres do Twoich potrzeb.
            </p>
          </div>
          <div className="service-grid" data-reveal>
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
                icon={<ServiceIcon type={service.icon} />}
              />
            ))}
          </div>
          <p className="pricing-note">
            Ceny orientacyjne. Dokładną wycenę otrzymasz po rozmowie i ustaleniu zakresu.
          </p>
        </section>
        {/* Koncepcje FK — przykłady zastosowania identyfikacji, poza realizacjami klientów. */}
        <section className="brand-concepts section-spacing" aria-labelledby="brand-concepts-title">
          <div className="section-shell">
            <div className="section-heading" data-reveal>
              <div>
                <h2 id="brand-concepts-title">
                  Jak mogłaby wyglądać
                  <br />
                  Twoja <em>marka</em>?
                </h2>
              </div>
              <p>Przykładowe koncepcje z identyfikacją FK — nie są realizacjami dla klientów.</p>
            </div>
            <BrandMockups />
            <a className="button button-primary brand-concepts__cta" href="#kontakt">
              Porozmawiajmy o Twojej marce
            </a>
          </div>
        </section>
        {/* 04 — PROCES WSPÓŁPRACY */}
        <section className="process section-shell section-spacing" id="proces">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">OD ROZMOWY DO REALIZACJI</p>
              <h2>
                Twój pomysł.
                <br />
                <em>Nasz proces.</em>
              </h2>
            </div>
          </div>
          <ol className="timeline" data-reveal>
            {[
              ['Konsultacja', 'poznaję Twoją firmę, ustalamy cele, termin i wycenę.'],
              ['Propozycje', 'prezentuję kierunki wizualne, Ty wybierasz właściwy.'],
              ['Doprecyzowanie', 'wspólnie dopracowujemy projekt do finalnej wersji.'],
              ['Przekazanie', 'otrzymujesz komplet plików gotowych do użycia.'],
            ].map(([title, description], i) => (
              <li key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>
        {/* 05 — O MNIE */}
        <section className="about section-shell section-spacing" id="o-mnie">
          <div className="about-layout" data-reveal>
            <div className="portrait-placeholder glass">
              <ResponsiveImage
                className="portrait-image"
                src="/assets/filip-kepka-portret.webp"
                alt="Filip Kępka, projektant graficzny"
                sizes="(max-width: 400px) max(calc(100vw - 32px), 312px), (max-width: 800px) calc(100vw - 40px), (max-width: 1100px) 408px, min(calc((100vw - 112px) * 0.3735), 538px)"
                loading="lazy"
              />
              <span className="eyebrow">POZNAJMY SIĘ</span>
              <div className="portrait-caption">
                <strong>Filip Kępka</strong>
                <span>Projektant graficzny / freelancer</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">CZEŚĆ, JESTEM FILIP</p>
              <h2>
                Za projektem
                <br />
                stoi <em>człowiek.</em>
              </h2>
              <p>
                Łączę wrażliwość wizualną z myśleniem o użytkowniku. Moje wykształcenie to studia
                magisterskie z Architektury Informacji, ze specjalizacją UX/UI.
              </p>
              <p>
                Doświadczenie zdobywam jako freelancer i w agencji marketingowej. Dzięki temu patrzę
                na projekt szerzej: ma nie tylko dobrze wyglądać, ale też odpowiadać na potrzeby
                Twojej firmy.
              </p>
              <aside className="kitchen-note">
                <span aria-hidden="true">↳</span>
                <div>
                  <h3>Gastronomię znam od kuchni. Dosłownie.</h3>
                  <p>
                    Praca w gastronomii nauczyła mnie, jak goście czytają menu i o co pytają przy
                    stoliku. Wykorzystuję to w projektowaniu — bo dobra karta ma pomagać w wyborze,
                    a nie go utrudniać.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {/* 06 — OPINIE. Treści i logotypy przekazane przez klientów. */}
        <section className="testimonials section-shell section-spacing" id="opinie">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">PO DRUGIEJ STRONIE PROJEKTU</p>
              <h2>
                Dobra współpraca.
                <br />
                <em>Dobre słowa.</em>
              </h2>
            </div>
          </div>
          <div className="testimonial-grid" data-reveal>
            {[
              [
                '„Odświeżony projekt kart menu zaskoczył zarówno naszych gości, jak i nas samych. Te same pozycje, przedstawione w nowej formie, zwiększyły sprzedaż o 80%. Dziś nasze menu prezentuje się tak premium, jak to, co podajemy na talerzu i w kieliszku."',
                'WhiteBull Steak House',
                'Restauracja',
                '/assets/portfolio/white-bull-opinia.webp',
              ],
              [
                '„Tuż przed otwarciem salonu zostaliśmy bez logo, a Filip uratował sytuację. Od pierwszej rozmowy rozumiał, czego potrzebujemy, a cały proces przebiegł szybko. Mimo krótkiego czasu efekt był profesjonalny i dopracowany w każdym szczególe."',
                'Carmel Dog Grooming Studio',
                'Salon groomerski',
                '/assets/portfolio/carmel-aktualne.webp',
              ],
            ].map(([quote, name, company, logo]) => (
              <figure className="quote-card glass" key={name}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{quote}</blockquote>
                <figcaption>
                  <span
                    className={`client-logo${company === 'Restauracja' ? ' client-logo--restaurant' : ''}`}
                  >
                    <ResponsiveImage src={logo} alt={`Logo ${name}`} sizes="120px" />
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <span>{company}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        {/* 07 — KONTAKT. mailto otwiera klienta poczty, nie udaje wysyłki z serwera. */}
        <section className="contact section-shell section-spacing" id="kontakt">
          <div className="contact-layout" data-reveal>
            <div className="contact-copy">
              <p className="eyebrow">MASZ POMYSŁ? NAPISZ.</p>
              <h2>
                Zróbmy coś
                <br />
                <em>dobrego.</em>
              </h2>
              <p>
                Opowiedz mi o swojej firmie i o tym, czego potrzebujesz. Wspólnie znajdziemy dobry
                kierunek.
              </p>
              <div className="contact-details">
                <span>E-MAIL</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <span>TELEFON</span>
                <a href="tel:+48726492987">+48 726 492 987</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="footer section-shell">
        <a className="brand" href="#start">
          <Logo />
          <span>
            FILIP KĘPKA<span>PROJEKTANT GRAFICZNY</span>
          </span>
        </a>
        <p>© {new Date().getFullYear()} Filip Kępka</p>
        <a className="back-top" href="#start">
          Do góry <span>↑</span>
        </a>
      </footer>
    </>
  );
}
