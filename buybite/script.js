// Submissions are delivered by Formspree to whatever email you verified
// on your Formspree account (set that to roger_j95@hotmail.com).
// Replace this with your real endpoint from https://formspree.io — it
// looks like "https://formspree.io/f/xxxxxxxx".
const FORM_ENDPOINT = "https://formspree.io/f/mjykoekq";

const translations = {
  en: {
    navWhy: "Why Buy&Bite",
    navHow: "How it works",
    navHosts: "For your space",
    cta: "Bring Buy&Bite here",
    heroEyebrow: "A little market, right where you are",
    heroTitle: "Good things happen between meetings.",
    heroBody:
      "At Buy&Bite, we bring the convenience of a trusted corner store to your workplace or community, with selected products always available and ready to support your day.",
    browse: "See how it works",
    trustedLine: "Your team deserves better breaks.",
    alwaysOpen: "always open",
    imageNote: "Your break, your way.",
    todaysEdit: "Today's edit",
    freshReady: "Your favorites, always available.",
    quickMessage: "Grab, pay, and keep moving.",
    trusted: "Your team deserves better breaks.",
    proofDescription:
      "We bring snacks, drinks, and essential products directly to your office, making every break more comfortable, practical, and enjoyable.",
    secure: "100% digital payments",
    stocked: "Personalized selection",
    ready: "Quick, simple installation",
    inside: "Inside MiMercado",
    categories: "More than a store, a culture of trust.",
    categoriesBody:
      "Every purchase is an act of trust. Our self-service model encourages honesty, autonomy, and respect—values that build a more conscious, collaborative community.",
    drinks: "Take what you need",
    drinksBody: "No checkouts or intermediaries.",
    crunch: "Pay simply",
    crunchBody: "Fast, digital, and secure.",
    fresh: "Trust in action",
    freshBody: "A space built on shared honesty and respect.",
    simplePart: "The simple part",
    howTitle: "Take what you need. Pay your way.",
    howBody:
      "No line, no waiting, no awkward checkout. Just a small moment of choice that fits into your day.",
    step1Title: "Pick your moment",
    step1Body: "Find your market in the lobby, lounge, gym or break room.",
    step2Title: "Grab something good",
    step2Body:
      "Choose a cold drink, a fresh piece of fruit, or a little treat.",
    step3Title: "Pay in a tap",
    step3Body: "Yape, Plin, POS card or tap-to-pay. You’re on your way.",
    payments: "Payments accepted",
    cardTap: "Card / Tap",
    hostCardTitle: "A small amenity with a big aftertaste.",
    hostCardBody:
      "More energy in the afternoon. More reasons to linger. A space that feels like it thought of everything.",
    hostEyebrow: "For the people who host us",
    hostTitle: "A thoughtful amenity for your space",
    hostBody:
      "Give your people a reason to stay a little longer. We handle the stocking, the upkeep, and the details.",
    benefit1: "A convenient perk people actually use",
    benefit2: "A polished fit for your space",
    benefit3: "Restocked, cleaned and cared for by us",
    benefit4: "Simple reporting and a dedicated contact",
    benefit5: "Convenience, wellbeing and trust in one place",
    benefit6: "Close support and dedicated attention",
    quoteEyebrow: "Let's make room for good breaks",
    quoteTitle: "Want a market in your space?",
    quoteBody:
      "Tell us a little about your location. We'll come back with a friendly, no-pressure recommendation.",
    takes: "Takes about 2 minutes",
    submitted: "Request received",
    again: "Send another request",
    name: "Full name",
    email: "Email address",
    company: "Company or building",
    address: "Address",
    location: "District – City",
    employeeCount: "Number of employees",
    message: "Anything we should know?",
    submit: "Request a quote",
    footer: "Small markets. Better days.",
    chat: "Chat with us",
    formError:
      "Please complete all required fields with a valid email address.",
    sendError:
      "Something went wrong sending your request. Please try again, or message us on WhatsApp.",
  },
  es: {
    navWhy: "Por qué Buy&Bite",
    navHow: "Cómo funciona",
    navHosts: "Para tu espacio",
    cta: "Quiero Buy&Bite aquí",
    heroEyebrow: "Un pequeño mercado, justo donde estás",
    heroTitle: "Las cosas buenas pasan entre reuniones.",
    heroBody:
      "En Buy&Bite acercamos la comodidad de la bodeguita de confianza a tu lugar de trabajo o comunidad, con productos seleccionados, siempre disponibles y listos para acompañarte durante el día.",
    browse: "Mira cómo funciona",
    trustedLine: "Tu equipo merece mejores pausas.",
    alwaysOpen: "siempre abierto",
    imageNote: "Tu descanso, a tu manera.",
    todaysEdit: "Selección de hoy",
    freshReady: "Tus favoritos, siempre disponibles.",
    quickMessage: "Toma, paga y sigue con tu día.",
    trusted: "Tu equipo merece mejores pausas.",
    proofDescription:
      "Llevamos snacks, bebidas y productos esenciales directamente a tu oficina, para que cada pausa sea más cómoda, práctica y agradable.",
    secure: "Pagos 100% digitales",
    stocked: "Surtido personalizado",
    ready: "Instalación rápida y simple",
    inside: "Dentro de Buy&Bite",
    categories: "Más que una tienda, una cultura de confianza.",
    categoriesBody:
      "Cada compra es un acto de confianza. Nuestro modelo de autoservicio promueve la honestidad, la autonomía y el respeto, valores que fortalecen una comunidad más consciente y colaborativa.",
    drinks: "Toma lo que necesitas",
    drinksBody: "Sin cajas ni intermediarios.",
    crunch: "Paga de forma simple",
    crunchBody: "Rápido, digital y seguro.",
    fresh: "Confianza en acción",
    freshBody:
      "Un espacio construido sobre la honestidad y el respeto compartido.",
    simplePart: "La experiencia Buy&Bite",
    howTitle: "Todo lo que necesitas. Justo donde lo necesitas.",
    howBody:
      "Desde snacks y bebidas hasta productos de cuidado personal para esas pequeñas emergencias del día a día. Comenzamos con una selección cuidadosamente elegida y la adaptamos a los gustos y necesidades de cada espacio.",
    step1Title: "A pocos pasos de ti",
    step1Body:
      "Encuentra Buy&Bite en tu lobby, sala de descanso o espacio común. Siempre cerca cuando lo necesitas.",
    step2Title: "Elige lo que te provoca",
    step2Body:
      "Snacks, bebidas, frutas y esenciales para el día a día. Toma lo que quieras, cuando quieras.",
    step3Title: "Paga en segundos",
    step3Body:
      "Con Yape, Plin o tarjeta. Sin filas, sin efectivo y sin esperas.",
    payments: "Medios de pago",
    cardTap: "Tarjeta / Contactless",
    hostCardTitle: "Más bienestar. Menos gestión.",
    hostCardBody:
      "Nosotros nos encargamos de todo para que tu equipo disfrute de la experiencia.",
    hostEyebrow: "Para quienes nos reciben",
    hostTitle: "Un beneficio para tu equipo. Simple para tu organización",
    hostBody:
      "Ofrece a tu equipo una solución práctica, moderna y basada en la confianza. Nosotros nos encargamos de la implementación, el surtido, la reposición y el seguimiento, sin costo ni compromiso para tu organización.",
    benefit1: "Sin inversión para la empresa",
    benefit2: "Implementación rápida y sencilla",
    benefit3: "Nosotros surtimos, monitoreamos y cuidamos el espacio",
    benefit4: "Surtido personalizable según las preferencias de tu equipo",
    benefit5: "Conveniencia, bienestar y confianza en un solo lugar",
    benefit6: "Acompañamiento cercano y atención dedicada",
    quoteEyebrow: "Hagamos espacio para los buenos descansos",
    quoteTitle: "Quieres una bodeguita de confianza en tu espacio?",
    quoteBody:
      "Cuéntanos un poco sobre tu negocio, te responderemos con una recomendación adecuada a tus necesidades, sin costos, sin presiones..",
    takes: "Toma unos 2 minutos",
    submitted: "Solicitud recibida",
    again: "Enviar otra solicitud",
    name: "Nombre y apellidos",
    email: "Correo electrónico",
    company: "Empresa o Edificio",
    address: "Dirección",
    location: "Distrito – Ciudad",
    employeeCount: "Número de colaboradores",
    message: "Algo que debamos saber?",
    submit: "Solicitar una cotización",
    footer: "Mejores pausas, mejores días .",
    chat: "Escríbenos",
    formError: "Completa los campos obligatorios con un correo válido.",
    sendError:
      "Algo salió mal al enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.",
  },
};

let currentLanguage = "en";
const root = document.documentElement;
const form = document.querySelector("[data-quote-form]");
const success = document.querySelector("[data-success]");
const error = document.querySelector("[data-form-error]");

function setLanguage(language) {
  currentLanguage = language;
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });
  document.title =
    language === "es"
      ? "Buy&Bite — Mejores descansos, justo donde estás"
      : "Buy&Bite — Better breaks, right where you are";
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }),
);

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const submitButton = form.querySelector("button[type=submit]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(form).entries());
  if (
    !values.name.trim() ||
    !values.company.trim() ||
    !values.address.trim() ||
    !values.location.trim() ||
    !values.employeeCount.trim() ||
    !validEmail(values.email)
  ) {
    error.textContent = translations[currentLanguage].formError;
    error.hidden = false;
    return;
  }
  if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
    // Safety net: this fires only if the site goes live before FORM_ENDPOINT
    // (top of this file) has been replaced with your real Formspree URL.
    console.error(
      "Buy&Bite form: FORM_ENDPOINT is still a placeholder. Set it to your real Formspree endpoint (https://formspree.io/f/xxxxxxxx).",
    );
    error.textContent = translations[currentLanguage].sendError;
    error.hidden = false;
    return;
  }

  error.hidden = true;
  submitButton.disabled = true;

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (!response.ok) throw new Error("Form submission failed");
    form.hidden = true;
    success.hidden = false;
  } catch (err) {
    error.textContent = translations[currentLanguage].sendError;
    error.hidden = false;
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("[data-again]").addEventListener("click", () => {
  form.reset();
  form.hidden = false;
  success.hidden = true;
});

setLanguage("es");
