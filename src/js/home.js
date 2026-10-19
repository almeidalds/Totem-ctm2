const translations = {
  pt: {
    htmlLang: "pt-BR",
    eyebrow: "CTM BRASIL",
    welcome: "BEM-VINDOS",
    phrase: "PRONTO PARA CONHECER SUA MISSÃO?",
    button: "CLIQUE AQUI"
  },

  en: {
    htmlLang: "en",
    eyebrow: "BRAZIL MTC",
    welcome: "WELCOME",
    phrase: "READY TO DISCOVER YOUR MISSION?",
    button: "CLICK HERE"
  },

  es: {
    htmlLang: "es",
    eyebrow: "CTM BRASIL",
    welcome: "BIENVENIDOS",
    phrase: "¿LISTO PARA CONOCER TU MISIÓN?",
    button: "HAGA CLIC AQUÍ"
  }
};

function changeLanguage(lang) {
  const text = translations[lang];

  if (!text) {
    return;
  }

  const eyebrow = document.getElementById("eyebrow");
  const welcome = document.getElementById("welcome");
  const phrase = document.getElementById("phrase");
  const mainButton = document.getElementById("mainBtn");

  if (!eyebrow || !welcome || !phrase || !mainButton) {
    throw new Error("A tela inicial não contém todos os elementos de idioma necessários.");
  }

  eyebrow.textContent = text.eyebrow;
  welcome.textContent = text.welcome;
  phrase.textContent = text.phrase;
  mainButton.textContent = text.button;
  document.documentElement.lang = text.htmlLang;

  document.querySelectorAll(".language-switcher button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferredLanguage", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".language-switcher button").forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLanguage = button.getAttribute("data-lang");
      changeLanguage(selectedLanguage);
    });
  });

  document.getElementById("mainBtn")?.addEventListener("click", () => {
    window.location.assign("./transition.html");
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.getElementById("bgVideo")?.pause();
  }

  const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";
  changeLanguage(translations[savedLanguage] ? savedLanguage : "pt");
});