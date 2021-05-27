export default function beamerInitialize(id, url = false, args = {}) {
  if (!window) {
    return;
  }

  if (!id) {
    throw Error('Must provide "id". https://app.getbeamer.com/embed');
  }

  window.beamer_config = {
    product_id: id,
    ...args,
  };

  const beamerURL = url || "https://app.getbeamer.com/js/beamer-embed.js";

  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");

  script.defer = "defer";
  script.src = beamerURL;
  head.appendChild(script);
}
