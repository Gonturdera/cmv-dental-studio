const DENTALINK_BOOKING_URL = "https://ff.healthatom.io/pR1Ikc";

const WHATSAPP_URL = "https://wa.link/0nuoop";

const hasDentalinkUrl =
  DENTALINK_BOOKING_URL &&
  !DENTALINK_BOOKING_URL.includes("PEGAR_ACA") &&
  DENTALINK_BOOKING_URL.startsWith("http");

const bookingUrl = hasDentalinkUrl ? DENTALINK_BOOKING_URL : WHATSAPP_URL;
const bookingTarget = "_self";

document.querySelectorAll(".js-booking-link").forEach((link) => {
  link.href = bookingUrl;
  link.target = bookingTarget;
  link.rel = "noopener";
});

document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  link.href = WHATSAPP_URL;
});
