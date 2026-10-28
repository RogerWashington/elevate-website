/*
 * Elevate Property Services -- contact form sender.
 * Works on its own (does not depend on React loading) and sends every
 * inquiry to Formspree. The destination email is set in the Formspree
 * dashboard for this form.
 */
(function () {
  var ENDPOINT = "https://formspree.io/f/mjyyyjno";

  var TXT = {
    en: {
      required: "Please enter your name and email.",
      sending: "Sending...",
      fail: "Could not send your message. Please try again or message us on WhatsApp.",
      okTitle: "Thank you!",
      okText: "We received your request and will get back to you shortly.",
      again: "Send another request"
    },
    es: {
      required: "Por favor ingresa tu nombre y correo.",
      sending: "Enviando...",
      fail: "No se pudo enviar tu mensaje. Intenta de nuevo o escr\u00edbenos por WhatsApp.",
      okTitle: "\u00a1Gracias!",
      okText: "Recibimos tu solicitud y te responderemos pronto.",
      again: "Enviar otra solicitud"
    }
  };

  function t() {
    var l = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    return TXT[l] || TXT.en;
  }

  function isContactForm(f) {
    return f && f.querySelector && f.querySelector('[name="email"]') && f.querySelector('[name="name"]');
  }

  function msgBox(form) {
    var box = form.querySelector(".ef-msg");
    if (!box) {
      box = document.createElement("p");
      box.className = "ef-msg";
      box.style.cssText = "margin:8px 0 0;font-size:14px;";
      form.appendChild(box);
    }
    return box;
  }

  document.addEventListener("submit", function (ev) {
    var form = ev.target;
    if (!isContactForm(form)) return;

    ev.preventDefault();
    ev.stopImmediatePropagation();

    var tx = t();
    var data = new FormData(form);
    var box = msgBox(form);

    if (!String(data.get("name") || "").trim() || !String(data.get("email") || "").trim()) {
      box.textContent = tx.required;
      return;
    }
    box.textContent = "";
    data.append("_subject", "New inquiry - Elevate Property Services website");

    var btn = form.querySelector('button[type="submit"]');
    var oldHtml = btn ? btn.innerHTML : "";
    if (btn) { btn.disabled = true; btn.textContent = tx.sending; }

    fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
      .then(function (r) {
        if (!r.ok) throw new Error("bad status " + r.status);
        var ok = document.createElement("div");
        ok.style.cssText = "padding:32px 8px;text-align:center;";
        ok.innerHTML =
          '<h3 style="font-size:24px;font-weight:700;margin:0 0 12px;">' + tx.okTitle + "</h3>" +
          '<p style="margin:0 0 20px;opacity:.85;">' + tx.okText + "</p>" +
          '<button type="button" style="border:1px solid rgba(255,255,255,.4);border-radius:999px;padding:10px 22px;font-weight:700;background:transparent;color:inherit;cursor:pointer;">' + tx.again + "</button>";
        form.style.display = "none";
        form.parentNode.insertBefore(ok, form.nextSibling);
        ok.querySelector("button").addEventListener("click", function () {
          form.reset();
          if (btn) { btn.disabled = false; btn.innerHTML = oldHtml; }
          ok.remove();
          form.style.display = "";
        });
      })
      .catch(function () {
        box.textContent = tx.fail;
        if (btn) { btn.disabled = false; btn.innerHTML = oldHtml; }
      });
  }, true);
})();
