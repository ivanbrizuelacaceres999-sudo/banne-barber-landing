// TODO: reemplazar por los números reales de Fato y Vane (formato: código país + número, sin +, sin espacios)
const WHATSAPP_NUMBERS = {
  fato: "595900000000",
  vane: "595900000000",
};

const WHATSAPP_MESSAGES = {
  fato: "Hola, quiero reservar un turno con Fato.",
  vane: "Hola, quiero reservar un turno con Vane.",
};

const INSTAGRAM_URL = "https://instagram.com/bannebarber"; // TODO: reemplazar por el usuario real

function buildWhatsAppLink(person) {
  const number = WHATSAPP_NUMBERS[person];
  const message = encodeURIComponent(WHATSAPP_MESSAGES[person]);
  return `https://wa.me/${number}?text=${message}`;
}

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = buildWhatsAppLink(el.dataset.wa);
});

document.querySelectorAll("[data-ig]").forEach((el) => {
  el.href = INSTAGRAM_URL;
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const topnav = document.getElementById("topnav");
if (topnav) {
  const onScroll = () => {
    topnav.style.background = window.scrollY > 40
      ? "rgba(20, 17, 16, 0.92)"
      : "rgba(20, 17, 16, 0.72)";
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
