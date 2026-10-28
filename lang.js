/*
 * Elevate Property Services -- bilingual EN/ES support (added by Claude).
 *
 * Why this file exists: the site already shipped a complete Spanish
 * translation dictionary inside its React bundle, and the "Switch language"
 * button already flips the right internal state -- but nothing in the
 * bundle actually re-renders the page text when that state changes, so
 * clicking it did nothing visible. Rather than patch the minified,
 * un-mapped production bundle (assets/index-*.js / assets/routes-*.js),
 * this script re-implements the toggle in plain, readable JS using the
 * SAME translation strings, driven by data-i18n / data-i18n-placeholder
 * attributes added to index.html. It is a normal (non-module) script, so
 * it keeps working even if the React bundle fails to load for any reason.
 *
 * To edit copy: change the strings in the DICT object below -- both the
 * "en" and "es" branches share the same shape, keyed the same way as the
 * data-i18n="..." attributes in index.html (e.g. data-i18n="hero.title"
 * reads DICT[lang].hero.title). Array items use their numeric index, e.g.
 * data-i18n="services.items.0.title".
 */
/*
 * ===================================================================
 *  EDIT YOUR WEBSITE TEXT HERE  (this is the ONLY file you need)
 * ===================================================================
 *  - "en" = English text, "es" = Spanish text.
 *  - Change only the words between the quotes. Keep the quotes and commas.
 *  - Do not use a plain " inside a phrase (use ' or ’ instead).
 *  - Save, then reload the page and click EN/ES to check.
 *  - Tip: Ctrl+F for the phrase you want to change.
 * ===================================================================
 */
(function () {
  "use strict";

  var DICT = {
    "en": {
      "langLabel": "ES",
      "top": "Cleaning, maintenance and comprehensive care for residential and corporate properties.",
      "nav": {
        "services": "Services",
        "why": "About us",
        "process": "How it works",
        "contact": "Contact"
      },
      "quote": "Request a Quote",
      "hero": {
        "kicker": "Cleaner spaces. Higher standards.",
        "title": "Better-cared-for properties.",
        "titleAccent": "Higher standards.",
        "description": "We offer cleaning, maintenance and comprehensive care services for homes, offices and short-term rentals, with constant attention and a real commitment to quality.",
        "primary": "Request a quote",
        "secondary": "See services",
        "floatTitle": "More than cleaning",
        "floatText": "Comprehensive solutions for taking care of your property.",
        "badge2": "Insured and verified staff"
      },
      "marquee": [
        "Personalized attention",
        "Consistent quality standards",
        "Reliable, professional service",
        "Care and supervision on every visit"
      ],
      "services": {
        "kicker": "What we do",
        "title": "Everything your property needs,",
        "titleAccent": "under one standard.",
        "intro": "Comprehensive solutions for homes, offices and short-term rentals, always with the same level of quality and attention.",
        "items": [
          {
            "icon": "home",
            "title": "Residential and commercial cleaning",
            "text": "Homes, apartments, offices and corporate spaces. Recurring and deep services, post-move cleaning and space preparation."
          },
          {
            "icon": "building",
            "title": "Specialized Services",
            "text": "Cleaning of windows and surfaces of different materials, along with deep cleaning services for kitchens, bathrooms and spaces that need an extra level of care."
          },
          {
            "icon": "office",
            "title": "Property management",
            "text": "We oversee and coordinate the operational needs of your property, from maintenance and supplies to handling requests and following up on services."
          },
          {
            "icon": "key",
            "title": "Short-term rental support",
            "text": "Cleaning between guests, linen changes, restocking of supplies, inspections and preparing the property for each new stay."
          }
        ]
      },
      "why": {
        "kicker": "Why Elevate",
        "title": "Details you can see.",
        "titleAccent": "Trust you can feel.",
        "description": "We care for every property with the same level of attention, professionalism and detail. We work with trained staff, defined processes and consistent standards in every service.",
        "values": [
          {
            "icon": "check",
            "title": "Standardized processes",
            "text": "We work with checklists and defined procedures to keep the service consistent on every visit."
          },
          {
            "icon": "shield",
            "title": "Trusted staff",
            "text": "We work with people who are recommended, previously vetted and highly experienced in cleaning, maintenance and property care, because we know trust starts with who enters your space."
          },
          {
            "icon": "droplet",
            "title": "The right products for every space",
            "text": "We use products selected for each surface, prioritizing effective cleaning and care for spaces, people and pets."
          },
          {
            "icon": "clock",
            "title": "Personalized attention",
            "text": "We adapt our services to the specific needs of each property to provide a tailor-made solution."
          }
        ],
        "stats": [
          [
            "Trust",
            "Because we know who enters your property"
          ],
          [
            "Care",
            "Because details matter"
          ],
          [
            "Management",
            "Because we take care of it so you don't have to"
          ]
        ]
      },
      "process": {
        "kicker": "Simple from the first contact",
        "title": "Three steps to a",
        "titleAccent": "spotless property.",
        "steps": [
          [
            "01",
            "Tell us what you need",
            "Tell us about your property and the services you're looking for. We'll recommend the best option for your needs."
          ],
          [
            "02",
            "Receive your proposal",
            "We'll send you a clear proposal with defined services and a schedule that fits your needs."
          ],
          [
            "03",
            "Leave it in our hands",
            "We take care of every detail so your property stays spotless and well looked after."
          ]
        ]
      },
      "contact": {
        "kicker": "Let's make it spotless",
        "title": "Your best-managed property is",
        "titleAccent": "one message away.",
        "description": "Tell us about your home, apartment, office or Airbnb. We reply within one business day with a plan and price tailored to you.",
        "phone": "+51 938 707 127",
        "email": "contacto@elevateps.com.pe",
        "area": "Lima",
        "form": {
          "name": "Your name",
          "namePh": "Jane Smith",
          "email": "Email",
          "emailPh": "jane@example.com",
          "phone": "Phone",
          "phonePh": "999 999 999",
          "type": "What do you need help with?",
          "choose": "Choose a service",
          "options": [
            "Residential and commercial cleaning",
            "Specialized Services",
            "Property management",
            "Short-term rental support"
          ],
          "message": "Anything we should know?",
          "messagePh": "Tell us about your property, number of rooms, or how often you need us…",
          "submit": "Send request",
          "successTitle": "We received your message.",
          "successText": "Thank you. A member of the Elevate team will contact you within one business day.",
          "again": "Send another request",
          "required": "Please fill in the required fields."
        }
      },
      "footer": {
        "tagline": "Cleaning, maintenance and comprehensive care for residential and corporate properties.",
        "explore": "Explore",
        "touch": "Get in touch",
        "rights": "© 2026 Elevate Property Services. Cleaner spaces. Higher standards."
      },
      "heroGuestReady": "100% guest-ready",
      "airbnbCaption": "Airbnb turnovers"
    },
    "es": {
      "langLabel": "EN",
      "top": "Limpieza, mantenimiento y cuidado integral de propiedades residenciales y corporativas.",
      "nav": {
        "services": "Servicios",
        "why": "Nosotros",
        "process": "Cómo funciona",
        "contact": "Contacto"
      },
      "quote": "Solicitar cotización",
      "hero": {
        "kicker": "Espacios más limpios. Estándares más altos.",
        "title": "Propiedades mejor cuidadas.",
        "titleAccent": "Estándares más altos.",
        "description": "Ofrecemos servicios de limpieza, mantenimiento y cuidado integral para hogares, oficinas y alquileres temporales, con atención constante y un compromiso real con la calidad.",
        "primary": "Solicitar cotización",
        "secondary": "Ver servicios",
        "floatTitle": "Más que limpieza",
        "floatText": "Soluciones integrales para el cuidado de tu propiedad.",
        "badge2": "Personal asegurado y verificado"
      },
      "marquee": [
        "Atención personalizada",
        "Estándares consistentes de calidad",
        "Servicio confiable y profesional",
        "Cuidado y supervisión en cada visita"
      ],
      "services": {
        "kicker": "Lo que hacemos",
        "title": "Todo lo que tu propiedad necesita,",
        "titleAccent": "bajo un solo estándar.",
        "intro": "Soluciones integrales para hogares, oficinas y alquileres temporales, siempre con el mismo nivel de calidad y atención.",
        "items": [
          {
            "icon": "home",
            "title": "Limpieza residencial y comercial",
            "text": "Casas, departamentos, oficinas y espacios corporativos. Servicios recurrentes, profundos, post mudanza y acondicionamiento de espacios."
          },
          {
            "icon": "building",
            "title": "Servicios Especializados",
            "text": "Limpieza de ventanas y superficies de distintos materiales, junto con servicios de limpieza profunda para cocinas, baños y espacios que requieren un nivel adicional de cuidado."
          },
          {
            "icon": "office",
            "title": "Gestión de propiedades",
            "text": "Supervisamos y coordinamos las necesidades operativas de tu propiedad, desde mantenimiento y abastecimiento hasta la atención de requerimientos y seguimiento de servicios."
          },
          {
            "icon": "key",
            "title": "Soporte para alquileres temporales",
            "text": "Limpieza entre huéspedes, cambio de blancos, reposición de suministros, inspecciones y preparación de la propiedad para cada nueva estadía."
          }
        ]
      },
      "why": {
        "kicker": "Por qué Elevate",
        "title": "Detalles que se ven.",
        "titleAccent": "Confianza que se siente.",
        "description": "Cuidamos cada propiedad con el mismo nivel de atención, profesionalismo y detalle. Trabajamos con personal capacitado, procesos definidos y estándares consistentes en cada servicio.",
        "values": [
          {
            "icon": "check",
            "title": "Procesos estandarizados",
            "text": "Trabajamos con listas de verificación y procedimientos definidos para mantener un servicio consistente en cada visita."
          },
          {
            "icon": "shield",
            "title": "Personal de confianza",
            "text": "Trabajamos con personas recomendadas, previamente evaluadas y con amplia experiencia en limpieza, mantenimiento y cuidado de propiedades, porque sabemos que la confianza empieza con quienes ingresan a tu espacio."
          },
          {
            "icon": "droplet",
            "title": "Productos adecuados para cada espacio",
            "text": "Utilizamos productos seleccionados según cada superficie, priorizando la limpieza efectiva y el cuidado de los espacios, las personas y las mascotas."
          },
          {
            "icon": "clock",
            "title": "Atención personalizada",
            "text": "Adaptamos nuestros servicios a las necesidades específicas de cada propiedad para brindar una solución a medida."
          }
        ],
        "stats": [
          [
            "Confianza",
            "Porque sabemos quién entra a tu propiedad"
          ],
          [
            "Cuidado",
            "Porque los detalles sí importan"
          ],
          [
            "Gestión",
            "Porque nos ocupamos para que tú no tengas que hacerlo"
          ]
        ]
      },
      "process": {
        "kicker": "Simple desde el primer contacto",
        "title": "Tres pasos hacia una",
        "titleAccent": "propiedad impecable.",
        "steps": [
          [
            "01",
            "Cuéntanos qué necesitas",
            "Cuéntanos sobre tu propiedad y los servicios que buscas. Te recomendaremos la mejor opción según tus necesidades."
          ],
          [
            "02",
            "Recibe tu propuesta",
            "Te enviaremos una propuesta clara, con servicios definidos y una planificación que se adapte a tus necesidades."
          ],
          [
            "03",
            "Déjalo en nuestras manos",
            "Nos ocupamos de cada detalle para que tu propiedad se mantenga impecable y bien atendida."
          ]
        ]
      },
      "contact": {
        "kicker": "Dejémoslo impecable",
        "title": "Tu propiedad mejor gestionada está a",
        "titleAccent": "un mensaje de distancia.",
        "description": "Cuéntanos sobre tu casa, departamento, oficina o Airbnb. Respondemos en un día hábil con un plan y precio a tu medida.",
        "phone": "+51 938 707 127",
        "email": "contacto@elevateps.com.pe",
        "area": "Lima",
        "form": {
          "name": "Tu nombre",
          "namePh": "Jane Smith",
          "email": "Correo electrónico",
          "emailPh": "jane@ejemplo.com",
          "phone": "Teléfono",
          "phonePh": "999 999 999",
          "type": "¿En qué necesitas ayuda?",
          "choose": "Elige un servicio",
          "options": [
            "Limpieza residencial y comercial",
            "Servicios Especializados",
            "Gestión de propiedades",
            "Soporte para alquileres temporales"
          ],
          "message": "¿Algo que debamos saber?",
          "messagePh": "Cuéntanos sobre tu propiedad, número de habitaciones o con qué frecuencia nos necesitas…",
          "submit": "Enviar solicitud",
          "successTitle": "Recibimos tu mensaje.",
          "successText": "Gracias. Un miembro del equipo Elevate te contactará en un día hábil.",
          "again": "Enviar otra solicitud",
          "required": "Por favor completa los campos obligatorios."
        }
      },
      "footer": {
        "tagline": "Limpieza, mantenimiento y cuidado integral de propiedades residenciales y corporativas.",
        "explore": "Explorar",
        "touch": "Contacto",
        "rights": "© 2026 Elevate Property Services. Espacios más limpios. Estándares más altos."
      },
      "heroGuestReady": "100% listo para huéspedes",
      "airbnbCaption": "Turnovers de Airbnb"
    }
  };

  // Share the text with the website code so everything reads from this one place.
  window.ELEVATE_DICT = DICT;

  function get(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  var TITLES = {
    en: "Cleaning Company in Lima, Peru | Elevate Property Services",
    es: "Empresa de Limpieza en Lima, Per\u00fa | Elevate Property Services"
  };

  function applyLang(lang) {
    var dict = DICT[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    if (TITLES[lang]) document.title = TITLES[lang];

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var value = get(dict, nodes[i].getAttribute("data-i18n"));
      if (typeof value === "string") nodes[i].textContent = value;
    }

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < placeholders.length; j++) {
      var pValue = get(dict, placeholders[j].getAttribute("data-i18n-placeholder"));
      if (typeof pValue === "string") placeholders[j].setAttribute("placeholder", pValue);
    }
  }

  var currentLang = "es"; // Spanish is the default language

  function toggleLang(event) {
    // Stop the click from ever reaching the React app's own (non-functional)
    // handler for this button, so the two toggles can never fight each other.
    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();

    currentLang = currentLang === "en" ? "es" : "en";
    applyLang(currentLang);
  }

  // The page is served in English HTML and switched to Spanish by this script.
  // We wait until React has finished attaching to the page before swapping the
  // text, otherwise React could see the changed text, discard the page and
  // redraw it in English.
  function reactIsAttached() {
    var el = document.querySelector("[data-i18n]");
    if (!el) return true;
    for (var k in el) {
      if (k.indexOf("__reactFiber$") === 0 || k.indexOf("__reactProps$") === 0) return true;
    }
    return false;
  }

  function applyDefaultLang() {
    var done = false;
    var deadline = null;
    function go() {
      if (done) return;
      done = true;
      applyLang(currentLang);
    }
    function poll() {
      if (done) return;
      if (reactIsAttached() || (deadline !== null && Date.now() > deadline)) return go();
      setTimeout(poll, 50);
    }
    function start() {
      deadline = Date.now() + 1000; // if React never attaches, switch anyway
      poll();
    }
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start);
    poll(); // also start checking right away; applies as soon as React is ready
  }

  function init() {
    var langButton = document.querySelector('[aria-label="Switch language"]');
    if (langButton) {
      // Capture phase: runs before the React root's bubble-phase listener,
      // so stopPropagation() above reliably prevents React from also acting
      // on this same click.
      langButton.addEventListener("click", toggleLang, true);
    }
    applyDefaultLang();
  }

  // This script is loaded at the very end of <body>, after all markup above
  // it has already been parsed, so the elements it needs already exist --
  // no need to wait for DOMContentLoaded.
  init();
})();
