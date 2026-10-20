// Kategorie grupują istniejące projekty z aktualnego portfolio.
// TODO (Filip): Uzupełnij przykład realizacji strony www, gdy będą dostępne materiały.
// Opcjonalne pole description: krótki opis zadania lub kontekstu oparty na danych projektu.
// Przy braku danych pozostaw description: '' i komentarz TODO; pusty opis nie jest wyświetlany.
export const PORTFOLIO_SLIDES = {
  branding: [
    {
      src: '/assets/portfolio/carmel-aktualne.webp',
      alt: 'Logo Carmel Dog Grooming Studio z rysunkiem psa',
      title: 'Carmel Dog Grooming Studio',
      url: 'https://www.instagram.com/carmel.doggrooming/',
      description: 'Projekt logo dla salonu groomerskiego.',
      theme: 'carmel',
    },
    {
      src: '/assets/portfolio/lodzka-37.webp',
      alt: 'Żółty znak Łódzka 37',
      title: 'Łódzka 37',
      url: 'https://lodzka37.pl/',
      description: 'Projekt znaku i identyfikacji wizualnej.',
      theme: 'dark',
      viewBox: '62 78 879 656',
    },
    {
      src: '/assets/portfolio/celebrujmy-logo.webp',
      alt: 'Białe logo Celebrujmy',
      title: 'Celebrujmy',
      url: 'https://celebrujmy.pl/#',
      description: 'Projekt logo marki Celebrujmy.',
      theme: 'dark',
    },
  ],
  menu: [
    {
      src: '/assets/portfolio/white-bull.webp',
      alt: 'Karta barowa White Bull prezentowana w restauracji',
      title: 'WhiteBull Steak House',
      url: 'https://www.whitebull.com.pl/',
      description: 'Projekt karty dań i napojów. Zobacz pełne menu.',
      theme: 'print',
      gallery: true,
    },
  ],
  druk: [
    {
      src: '/assets/portfolio/celebrujmy-broszura.webp',
      mobileSrc: '/assets/portfolio/celebrujmy-broszura-pion.webp',
      mobileAlt:
        'Ulotka Celebrujmy: okładka z logo i szklanką whisky oraz rozkładówka z tekstem o marce i zdjęciem kobiety z kieliszkiem',
      mobileTheme: 'celebrujmy-mobile',
      alt: 'Złota składana broszura Celebrujmy na ciemnym tle',
      title: 'Celebrujmy',
      url: 'https://celebrujmy.pl/#',
      description: 'Projekt składanej ulotki promującej ofertę marki Celebrujmy.',
      theme: 'print',
    },
    {
      src: 'projekty-pionowe',
      title: 'Projekty plakatów',
      theme: 'pair',
      items: [
        {
          src: '/assets/portfolio/lato-muzyczne.webp',
          alt: 'Plakat Inowrocławskiego Lata Muzycznego',
          title: 'Inowrocławskie Lato Muzyczne',
          description: 'Projekt plakatu promującego Inowrocławskie Lato Muzyczne.',
          theme: 'poster',
          url: 'https://kckino.pl/inowroclawskie-lato-muzyczne-2026/',
        },
        {
          src: '/assets/portfolio/inobank-senior-plakat.webp',
          alt: 'Plakat lokaty dla seniora dla InoBank',
          title: 'InoBank',
          description: 'Projekt plakatu promującego lokatę dla seniora.',
          theme: 'poster',
          url: 'https://inobank.pl/',
        },
      ],
    },
    {
      src: '/assets/portfolio/paluszek-tlo-rozszerzone.webp',
      mobileSrc: '/assets/portfolio/paluszek-konkurs-pion.webp',
      mobileAlt:
        'Dwie rozkładówki broszury konkursowej Paluszek Lewiatan: zasady zbierania pieczątek, pola na pieczątki i elektroniczna waga kuchenna',
      alt: 'Broszura konkursowa sklepu Paluszek z zasadami zbierania pieczątek i nagrodą',
      title: 'Paluszek',
      url: 'https://epaluszek.pl/',
      description: 'Broszura konkursowa dla sklepu Paluszek.',
      theme: 'brochure',
      mobileTheme: 'brochure-mobile',
    },
  ],
  digital: [
    {
      src: '/assets/portfolio/inobank-lokata.webp',
      mobileSrc: '/assets/portfolio/inobank-kwadrat.webp',
      mobileAlt:
        'Kwadratowa grafika lokaty platynowej InoBank: srebrny sejf i oprocentowanie 4,45%',
      mobileTheme: 'digital-mobile',
      alt: 'Grafika promocyjna lokaty dla InoBank',
      title: 'InoBank',
      description: 'Projekt grafiki promującej lokatę InoBank.',
      theme: 'digital',
      url: 'https://inobank.pl/',
    },
  ],
};
