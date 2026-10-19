// =========================================================
// CONFIGURAÇÕES GERAIS
// =========================================================

const missionDataLoaders = {
  pt: () => import("./data-pt.json"),
  en: () => import("./data.json"),
  es: () => import("./data-es.json")
};

const uiTranslations = {
  pt: {
    htmlLang: "pt-BR",
    pageTitle: "Mapa Mundial | Missões do CTM",
    mapTitle: "TOQUE NO PAÍS ONDE VOCÊ IRÁ SERVIR",

    langEn: "English",
    langPt: "Português",
    langEs: "Español",

    chooseMission: "Escolha uma missão",
    touchInstruction: "Toque em uma missão para conhecer o presidente, a sister e o local.",
    searchMissions: "Buscar missão",
    searchPlaceholder: "Digite o nome da missão, presidente ou área",
    clearSearch: "Limpar busca",
    searchResultsLabel: "Resultados",
    noSearchResults: "Nenhuma missão encontrada para esta busca.",
    countryInfo: "Informações do país",
    countryInfoUnavailable: "Informações deste país ainda não disponíveis.",
    close: "Fechar",
    countryFlag: "Bandeira do país",
    missionCountSingular: "missão encontrada",
    missionCountPlural: "missões encontradas",

    backToMissions: "Voltar às missões",
    previous: "Anterior",
    next: "Próxima",
    viewBio: "Biografia",
    explorePlace: "Conheça o local",

    climate: "Clima",
    typicalFoods: "Comidas típicas",
    touristSpots: "Pontos turísticos",
    curiosities: "Curiosidades",
    cultureTip: "Dica cultural",
    differentDish: "Prato mais diferente",
    placeGallery: "Galeria do local",
    notAvailable: "Informação ainda não disponível.",

    missionNotSpecified: "Missão não especificada",
    areaNotSpecified: "Área não especificada",
    descriptionNotSpecified: "Informações não especificadas",
    presidentNotSpecified: "Presidente e Sister não especificados",

    noMissionFound: "Nenhuma missão encontrada",
    noCountryInfo: "Nenhuma informação disponível para este país.",
    noPhoto: "Sem foto disponível",
    page: "Página",
    of: "de",

    loading: "Carregando idioma...",
    loadingError: "Ocorreu um erro ao carregar o mapa. Por favor, recarregue a página."
  },

  en: {
    htmlLang: "en",
    pageTitle: "World Map | Brazil MTC Missions",
    mapTitle: "TOUCH THE COUNTRY WHERE YOU WILL SERVE",

    langEn: "English",
    langPt: "Portuguese",
    langEs: "Spanish",

    chooseMission: "Choose a mission",
    touchInstruction: "Touch a mission to learn about the president, sister, and place.",
    searchMissions: "Search missions",
    searchPlaceholder: "Search by mission, president, or area",
    clearSearch: "Clear search",
    searchResultsLabel: "Results",
    noSearchResults: "No missions found for this search.",
    countryInfo: "Country information",
    countryInfoUnavailable: "Information about this country is not available yet.",
    close: "Close",
    countryFlag: "Country flag",
    missionCountSingular: "mission found",
    missionCountPlural: "missions found",

    backToMissions: "Back to missions",
    previous: "Previous",
    next: "Next",
    viewBio: "Biography",
    explorePlace: "Explore the place",

    climate: "Climate",
    typicalFoods: "Typical foods",
    touristSpots: "Tourist spots",
    curiosities: "Curiosities",
    cultureTip: "Cultural tip",
    differentDish: "Most different dish",
    placeGallery: "Place gallery",
    notAvailable: "Information not available yet.",

    missionNotSpecified: "Mission not specified",
    areaNotSpecified: "Area not specified",
    descriptionNotSpecified: "Information not specified",
    presidentNotSpecified: "President and Sister not specified",

    noMissionFound: "No mission found",
    noCountryInfo: "No information available for this country.",
    noPhoto: "No photo available",
    page: "Page",
    of: "of",

    loading: "Loading language data...",
    loadingError: "An error occurred while loading the map. Please reload the page."
  },

  es: {
    htmlLang: "es",
    pageTitle: "Mapa Mundial | Misiones del CTM",
    mapTitle: "TOCA EL PAÍS DONDE SERVIRÁS",

    langEn: "Inglés",
    langPt: "Portugués",
    langEs: "Español",

    chooseMission: "Elige una misión",
    touchInstruction: "Toca una misión para conocer al presidente, la hermana y el lugar.",
    searchMissions: "Buscar misiones",
    searchPlaceholder: "Busca por misión, presidente o área",
    clearSearch: "Borrar búsqueda",
    searchResultsLabel: "Resultados",
    noSearchResults: "No se encontraron misiones para esta búsqueda.",
    countryInfo: "Información del país",
    countryInfoUnavailable: "La información de este país aún no está disponible.",
    close: "Cerrar",
    countryFlag: "Bandera del país",
    missionCountSingular: "misión encontrada",
    missionCountPlural: "misiones encontradas",

    backToMissions: "Volver a las misiones",
    previous: "Anterior",
    next: "Siguiente",
    viewBio: "Biografía",
    explorePlace: "Conoce el lugar",

    climate: "Clima",
    typicalFoods: "Comidas típicas",
    touristSpots: "Lugares turísticos",
    curiosities: "Curiosidades",
    cultureTip: "Consejo cultural",
    differentDish: "Plato más diferente",
    placeGallery: "Galería del lugar",
    notAvailable: "Información aún no disponible.",

    missionNotSpecified: "Misión no especificada",
    areaNotSpecified: "Área no especificada",
    descriptionNotSpecified: "Información no especificada",
    presidentNotSpecified: "Presidente y hermana no especificados",

    noMissionFound: "No se encontró ninguna misión",
    noCountryInfo: "No hay información disponible para este país.",
    noPhoto: "Sin foto disponible",
    page: "Página",
    of: "de",

    loading: "Cargando idioma...",
    loadingError: "Ocurrió un error al cargar el mapa. Por favor, vuelve a cargar la página."
  }
};

const missionCountryAliases = {
  bb: ["do"],
  fl: ["no"],
  gu: ["mn"],
  mh: ["nz"],
  to: ["vu"],
  ut: ["us"]
};

const missionCountriesByName = {
  "adriatic north": [],
  "alpine german speaking": [],
  "armenia georgia": ["am", "ge"],
  "armenia y georgia": ["am", "ge"],
  "baltic": [],
  "adriatico norte": [],
  "aleman alpino": [],
  "botswana namibia": ["bw", "na"],
  "botsuana namibia": ["bw", "na"],
  "botsuana y namibia": ["bw", "na"],
  "bulgaria-greece": ["bg", "gr"],
  "bulgaria grecia": ["bg", "gr"],
  "czech slovak": ["cz", "sk"],
  "checo eslovaco": ["cz", "sk"],
  "tcheco eslovaco": ["cz", "sk"],
  "micronesia guam": [],
  "marshall islands kiribati": [],
  "puerto rico san juan": [],
  "fiji suva": [],
  "samoa apia": [],
  "praia de cabo verde": ["cv"],
  "angeles de filipinas": ["ph"],
  "ukraine kyiv moldova": ["ua", "md"],
  "ucrania kyiv moldavia": ["ua", "md"],
  "georgia atlanta": ["us"],
  "barbados bridgetown": ["bb"],
  "bridgetown de barbados": ["bb"],
  "belgium netherlands": ["be", "nl"],
  "belgica holanda": ["be", "nl"],
  "belgica paises bajos": ["be", "nl"],
  "bulgaria greece": ["bg", "gr"],
  "canada calgary": ["ca"],
  "escocia irlanda": ["gb", "ie"],
  "scotland ireland": ["gb", "ie"],
  "finland helsinki": ["fi"],
  "finlandia helsinki": ["fi"],
  "finlandia helsinque": ["fi"],
  "france paris": ["fr"],
  "francia paris": ["fr"],
  "franca paris": ["fr"],
  "guyana georgetown": ["gy"],
  "guiana georgetown": ["gy"],
  "honduras comayaguela": ["hn"],
  "liberia monrovia": ["lr"],
  "tahiti papeete mission": [],
  "tonga nuku alofa": []
};

const missionCountryNameAliases = {
  "afghanistan": ["af"],
  "alemania": ["de"], "alemanha": ["de"],
  "albania": ["al"], "algeria": ["dz"], "angola": ["ao"],
  "argentina": ["ar"], "armenia": ["am"], "australia": ["au"],
  "austria": ["at"], "azerbaijan": ["az"], "bangladesh": ["bd"],
  "belarus": ["by"], "belgium": ["be"], "belgica": ["be"],
  "benin": ["bj"], "bolivia": ["bo"], "bosnia": ["ba"],
  "botsuana": ["bw"], "bulgaria": ["bg"],
  "brazil": ["br"], "brasil": ["br"], "botswana": ["bw"],
  "cambodia": ["kh"], "camboya": ["kh"], "camboja": ["kh"],
  "cameroon": ["cm"], "canada": ["ca"],
  "corea": ["kr"], "corea del sur": ["kr"],
  "coreia": ["kr"], "coreia do sul": ["kr"],
  "cape verde": ["cv"], "cabo verde": ["cv"], "chile": ["cl"],
  "china": ["cn"], "colombia": ["co"], "costa rica": ["cr"],
  "cote d ivoire": ["ci"],
  "croatia": ["hr"], "cuba": ["cu"], "cyprus": ["cy"],
  "czech": ["cz"], "czech republic": ["cz"],
  "denmark": ["dk"], "dinamarca": ["dk"],
  "dominican republic": ["do"], "republica dominicana": ["do"],
  "democratic republic of the congo": ["cd"],
  "democratic republic of congo": ["cd"], "congo kinshasa": ["cd"],
  "republic of congo": ["cg"], "congo brazzaville": ["cg"],
  "ecuador": ["ec"], "egypt": ["eg"], "el salvador": ["sv"],
  "england": ["gb"], "inglaterra": ["gb"], "ethiopia": ["et"], "finland": ["fi"],
  "escocia": ["gb"], "estados unidos": ["us"],
  "finlandia": ["fi"], "france": ["fr"], "francia": ["fr"],
  "franca": ["fr"], "gabon": ["ga"], "gambia": ["gm"], "georgia": ["ge"],
  "germany": ["de"], "ghana": ["gh"], "greece": ["gr"],
  "guatemala": ["gt"], "guinea": ["gn"], "guinea bissau": ["gw"],
  "guyana": ["gy"], "guiana": ["gy"], "haiti": ["ht"],
  "honduras": ["hn"], "hungary": ["hu"], "hungria": ["hu"], "iceland": ["is"],
  "india": ["in"], "indonesia": ["id"], "iran": ["ir"],
  "iraq": ["iq"],   "ireland": ["ie"], "irlanda": ["ie"], "israel": ["il"],
  "italy": ["it"], "italia": ["it"], "jamaica": ["jm"],
  "japan": ["jp"], "japon": ["jp"], "japao": ["jp"], "jordan": ["jo"],
  "kazakhstan": ["kz"], "kenya": ["ke"], "korea": ["kr"],
  "south korea": ["kr"], "north korea": ["kp"], "kyrgyzstan": ["kg"],
  "laos": ["la"], "latvia": ["lv"], "lebanon": ["lb"],
  "liberia": ["lr"], "lithuania": ["lt"],
  "madagascar": ["mg"], "malawi": ["mw"], "malaysia": ["my"],
  "mali": ["ml"], "malta": ["mt"], "mauritania": ["mr"],
  "mexico": ["mx"], "moldova": ["md"], "nueva zelanda": ["nz"],
  "mongolia": ["mn"], "montenegro": ["me"], "morocco": ["ma"],
  "mozambique": ["mz"], "myanmar": ["mm"], "namibia": ["na"],
  "nepal": ["np"], "netherlands": ["nl"], "new zealand": ["nz"],
  "nicaragua": ["ni"], "niger": ["ne"], "nigeria": ["ng"],
  "north macedonia": ["mk"], "norway": ["no"], "noruega": ["no"],
  "oman": ["om"],
  "pakistan": ["pk"], "panama": ["pa"], "papua new guinea": ["pg"],
  "paraguay": ["py"], "peru": ["pe"], "philippines": ["ph"],
  "poland": ["pl"], "polonia": ["pl"], "portugal": ["pt"],
  "romania": ["ro"], "rumania": ["ro"], "russia": ["ru"], "rusia": ["ru"], "rwanda": ["rw"],
  "saudi arabia": ["sa"], "scotland": ["gb"], "senegal": ["sn"],
  "serbia": ["rs"], "sierra leone": ["sl"], "sierra leona": ["sl"],
  "serra leoa": ["sl"],
  "singapore": ["sg"], "singapur": ["sg"], "cingapura": ["sg"],
  "slovakia": ["sk"], "slovenia": ["si"], "somalia": ["so"],
  "south africa": ["za"], "spain": ["es"], "espana": ["es"], "espanha": ["es"],
  "sudafrica": ["za"], "suecia": ["se"], "ucrania": ["ua"],
  "romenia": ["ro"],
  "tailandia": ["th"], "vietna": ["vn"],
  "uruguai": ["uy"], "filipinas": ["ph"], "papua nova guine": ["pg"],
  "papua nueva guinea": ["pg"],
  "tcheco": ["cz"], "checo": ["cz"],
  "reino unido": ["gb"], "paises bajos": ["nl"], "holanda": ["nl"],
  "sri lanka": ["lk"], "sweden": ["se"], "switzerland": ["ch"],
  "taiwan": ["tw"], "tajikistan": ["tj"], "tanzania": ["tz"],
  "thailand": ["th"], "togo": ["tg"], "tunisia": ["tn"],
  "turkey": ["tr"], "turquia": ["tr"], "turkmenistan": ["tm"], "uganda": ["ug"],
  "ukraine": ["ua"], "united arab emirates": ["ae"],
  "united kingdom": ["gb"], "united states": ["us"],
  "usa": ["us"], "uruguay": ["uy"], "uzbekistan": ["uz"],
  "vanuatu": ["vu"], "venezuela": ["ve"], "vietnam": ["vn"],
  "wales": ["gb"], "zambia": ["zm"], "zimbabwe": ["zw"],
  "alabama": ["us"], "alaska": ["us"], "arizona": ["us"],
  "arkansas": ["us"], "california": ["us"], "colorado": ["us"],
  "connecticut": ["us"], "florida": ["us"], "georgia": ["us"],
  "hawaii": ["us"], "idaho": ["us"], "illinois": ["us"],
  "indiana": ["us"], "iowa": ["us"], "kansas": ["us"],
  "kentucky": ["us"], "louisiana": ["us"], "maine": ["us"],
  "maryland": ["us"], "massachusetts": ["us"], "michigan": ["us"],
  "minnesota": ["us"], "mississippi": ["us"], "missouri": ["us"],
  "montana": ["us"], "nebraska": ["us"], "nevada": ["us"],
  "new hampshire": ["us"], "new jersey": ["us"], "new mexico": ["us"],
  "new york": ["us"], "north carolina": ["us"], "north dakota": ["us"],
  "ohio": ["us"], "oklahoma": ["us"], "oregon": ["us"],
  "pennsylvania": ["us"], "rhode island": ["us"], "south carolina": ["us"],
  "south dakota": ["us"], "tennessee": ["us"], "texas": ["us"],
  "utah": ["us"], "vermont": ["us"], "virginia": ["us"],
  "washington": ["us"], "west virginia": ["us"], "wisconsin": ["us"],
  "wyoming": ["us"]
};

function normalizeMissionName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const missionCountryPrefixes = Object.entries(missionCountryNameAliases)
  .sort(([left], [right]) => right.length - left.length);

function getMissionCountryIds(mission, t) {
  const normalizedName = normalizeMissionName(getMissionName(mission, t));

  if (Object.prototype.hasOwnProperty.call(missionCountriesByName, normalizedName)) {
    return missionCountriesByName[normalizedName];
  }

  const matchingPrefix = missionCountryPrefixes.find(([prefix]) => (
    normalizedName === prefix || normalizedName.startsWith(`${prefix} `)
  ));

  if (matchingPrefix) {
    return matchingPrefix[1];
  }

  if (/^[a-z]{2}$/.test(mission.ID)) {
    return missionCountryAliases[mission.ID] || [mission.ID];
  }
}

// =========================================================
// FUNÇÕES AUXILIARES
// =========================================================

function getElementOrThrow(id) {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Elemento com ID '${id}' não foi encontrado.`);
  }

  return element;
}

function getMissionName(mission, t) {
  return mission.Missões || mission.Missoes || mission.Mission || mission.Name || t.missionNotSpecified;
}

function getMissionArea(mission, t) {
  return mission["Áreas"] || mission.Areas || mission.Area || t.areaNotSpecified;
}

function getMissionDescription(mission, t) {
  return mission.Description || mission.Descrição || mission.Descricao || t.descriptionNotSpecified;
}

function getMissionImage(mission) {
  return mission.Image || mission.Imagem || "";
}

function getMissionPresident(mission, t) {
  return mission["Presidentes e Sisters"] || mission.Presidents || mission.Presidentes || t.presidentNotSpecified;
}

function getMissionClimate(mission, t) {
  return mission.Climate || mission.Clima || t.notAvailable;
}

function getMissionTypicalFoods(mission, t) {
  return mission["Typical Foods"] || mission["Comidas Típicas"] || mission["Comidas Tipicas"] || mission.Foods || t.notAvailable;
}

function getMissionTouristSpots(mission, t) {
  return mission["Tourist Spots"] || mission["Pontos Turísticos"] || mission["Pontos Turisticos"] || mission.Tourism || t.notAvailable;
}

function getMissionCuriosities(mission, t) {
  return mission.Curiosities || mission.Curiosidades || t.notAvailable;
}

function getMissionCultureTip(mission, t) {
  return mission["Culture Tip"] || mission["Dica Cultural"] || mission.Culture || t.notAvailable;
}

function getMissionPlaceMainImage(mission) {
  return mission["Place Main Image"] || mission.PlaceMainImage || mission.PlaceImage || mission.LocalImage || "";
}

function getMissionPlacePhotos(mission) {
  if (Array.isArray(mission["Place Photos"])) {
    return mission["Place Photos"];
  }

  if (Array.isArray(mission.PlacePhotos)) {
    return mission.PlacePhotos;
  }

  return [];
}

function getMissionDifferentDishName(mission, t) {
  return mission["Different Dish Name"] || mission.DifferentDishName || t.notAvailable;
}

function getMissionDifferentDishImage(mission) {
  return mission["Different Dish Image"] || mission.DifferentDishImage || "";
}

function getMissionDifferentDishDescription(mission, t) {
  return mission["Different Dish Description"] || mission.DifferentDishDescription || t.notAvailable;
}

function stripHtml(html) {
  const temporaryElement = document.createElement("div");
  temporaryElement.innerHTML = html || "";
  return temporaryElement.textContent || temporaryElement.innerText || "";
}

function makeShortText(text, limit = 300) {
  const cleanText = stripHtml(text).trim();

  if (cleanText.length <= limit) {
    return cleanText;
  }

  return cleanText.slice(0, limit).trim() + "...";
}

// =========================================================
// INICIALIZAÇÃO
// =========================================================

document.addEventListener("DOMContentLoaded", async () => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  let currentLanguage = uiTranslations[savedLanguage] ? savedLanguage : "pt";
  let t = uiTranslations[currentLanguage];

  let inactivityTimer;
  let currentMission = null;
  let currentMissionIndex = 0;
  let currentCountryMissions = [];
  let missionsByCountry = {};
  let allMissions = [];
  let currentPage = 1;
  let isMissionSearchView = false;
  let currentSearchQuery = "";
  let modalReturnFocus = null;
  let infoModalReturnFocus = null;

  const missionsPerPage = 8;

  try {
    const modalOverlay = getElementOrThrow("modalOverlay");
    const missoesContainer = getElementOrThrow("missoesContainer");
    const closeBtn = getElementOrThrow("closeBtn");
    const countryTitle = getElementOrThrow("countryTitle");
    const areaName = getElementOrThrow("areaName");
    const missionDetails = getElementOrThrow("missionDetails");
    const missionsList = getElementOrThrow("missionsList");
    const countryModal = getElementOrThrow("countryModal");
    const modalContent = getElementOrThrow("modal-content");
    const loadingScreen = getElementOrThrow("loading-screen");

    const allMissionsBtn = document.getElementById("allMissionsBtn");
    const moreInfoBtn = document.getElementById("moreInfoBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    // =========================================================
    // IDIOMA DA INTERFACE
    // =========================================================

    function applyUiLanguage() {
      t = uiTranslations[currentLanguage] || uiTranslations.pt;

      document.documentElement.lang = t.htmlLang;
      document.title = t.pageTitle;

      const mapTitle = document.getElementById("mapTitle");
      const langEn = document.getElementById("lang-en");
      const langPt = document.getElementById("lang-pt");
      const langEs = document.getElementById("lang-es");
      const loadingText = document.getElementById("loadingText");
      const worldMap = document.getElementById("world-map");
      const allMissionsBtn = document.getElementById("allMissionsBtn");

      if (mapTitle) mapTitle.textContent = t.mapTitle;
      if (langEn) langEn.textContent = t.langEn;
      if (langPt) langPt.textContent = t.langPt;
      if (langEs) langEs.textContent = t.langEs;
      if (loadingText) loadingText.textContent = t.loading;
      if (worldMap) worldMap.setAttribute("aria-label", t.mapTitle);
      if (allMissionsBtn) allMissionsBtn.textContent = t.searchMissions;
      if (moreInfoBtn) moreInfoBtn.textContent = t.countryInfo;
      if (closeBtn) closeBtn.setAttribute("aria-label", t.close);
      if (closeModalBtn) closeModalBtn.setAttribute("aria-label", t.close);

      if (moreInfoBtn) {
        moreInfoBtn.style.display = "none";
      }

      document.querySelectorAll(".language-buttons button").forEach((button) => {
        const isActive = button.dataset.lang === currentLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    }

    // =========================================================
    // TIMER DE INATIVIDADE
    // =========================================================

    function resetInactivityTimer() {
      clearTimeout(inactivityTimer);

      inactivityTimer = setTimeout(() => {
        window.location.href = "../../index.html";
      }, 120000);
    }

    function setupInactivityTimer() {
      resetInactivityTimer();

      ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"].forEach((eventName) => {
        document.addEventListener(eventName, resetInactivityTimer);
      });
    }

    // =========================================================
    // CARREGAR DADOS
    // =========================================================

    async function loadMissionData() {
      try {
        const dataModule = await missionDataLoaders[currentLanguage]();
        const data = dataModule.default;

        if (!Array.isArray(data)) {
          throw new Error(`Os dados de missões para o idioma "${currentLanguage}" não são válidos.`);
        }

        const groupedMissions = {};
        allMissions = data;

        data.forEach((mission) => {
          if (!mission || typeof mission !== "object") {
            throw new Error(`Os dados de missões para o idioma "${currentLanguage}" contêm um registro inválido.`);
          }

          const missionName = getMissionName(mission, t);
          const countryIds = getMissionCountryIds(mission, t);

          if (!countryIds) {
            throw new Error(`Não foi possível identificar o país da missão "${missionName}".`);
          }

          countryIds.forEach((countryId) => {
            if (!groupedMissions[countryId]) {
              groupedMissions[countryId] = [];
            }

            groupedMissions[countryId].push(mission);
          });
        });

        return groupedMissions;
      } catch (error) {
        console.error("Erro ao carregar dados das missões:", error);
        throw error;
      }
    }

    // =========================================================
    // MODAIS
    // =========================================================

    function openModal() {
      const activeElement = document.activeElement;
      modalReturnFocus = activeElement instanceof HTMLElement && activeElement !== document.body
        ? activeElement
        : null;
      modalOverlay.style.display = "block";
      missoesContainer.classList.add("show");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeModal() {
      missoesContainer.classList.remove("show");

      setTimeout(() => {
        modalOverlay.style.display = "none";
        document.body.style.overflow = "auto";
        modalReturnFocus?.focus();
        modalReturnFocus = null;
      }, 250);
    }

    function closeInfoModal() {
      countryModal.style.display = "none";
      countryModal.classList.remove("bio-modal-open");
      infoModalReturnFocus?.focus();
      infoModalReturnFocus = null;
    }

    function openCountryInfoModal() {
      const country = currentCountryMissions[0];

      if (!country) {
        return;
      }

      infoModalReturnFocus = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      countryModal.classList.remove("bio-modal-open");

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "bio-close-button";
      closeButton.setAttribute("aria-label", t.close);
      closeButton.textContent = "×";
      closeButton.addEventListener("click", closeInfoModal);

      const content = document.createElement("div");
      content.className = "country-info-layout";

      if (country["Flag URL"]) {
        const flag = document.createElement("img");
        flag.className = "country-info-flag";
        flag.src = country["Flag URL"];
        flag.alt = t.countryFlag;
        content.appendChild(flag);
      }

      const description = document.createElement("p");
      description.className = "country-info-description";
      description.textContent = country["Country Description"] || t.countryInfoUnavailable;
      content.appendChild(description);

      modalContent.replaceChildren(closeButton, content);
      const heading = document.createElement("h2");
      heading.id = "modalTitle";
      heading.textContent = t.countryInfo;
      modalContent.insertBefore(heading, content);
      countryModal.style.display = "flex";
      closeButton.focus();
    }

    function openBiographyModal() {
      if (!currentMission) {
        return;
      }

      const missionName = getMissionName(currentMission, t);
      const missionArea = getMissionArea(currentMission, t);
      const missionDescription = getMissionDescription(currentMission, t);
      const missionImage = getMissionImage(currentMission);
      const missionPresident = getMissionPresident(currentMission, t);

      infoModalReturnFocus = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

      modalContent.innerHTML = `
        <button type="button" class="bio-close-button" id="bioCloseButton">
          ×
        </button>

        <div class="bio-modal-layout">
          <div class="bio-photo-area">
            ${
              missionImage
                ? `<img src="${missionImage}" alt="${missionPresident}" class="bio-photo">`
                : `<div class="bio-photo-placeholder">${t.noPhoto}</div>`
            }
          </div>

          <div class="bio-text-area">
            <p class="bio-kicker">${missionArea}</p>
            <h2 id="modalTitle">${missionName}</h2>
            <h3>${missionPresident}</h3>

            <div class="bio-description">
              ${missionDescription}
            </div>
          </div>
        </div>
      `;

      countryModal.classList.add("bio-modal-open");
      countryModal.style.display = "flex";

      const bioCloseButton = document.getElementById("bioCloseButton");

      if (bioCloseButton) {
        bioCloseButton.addEventListener("click", closeInfoModal);
        bioCloseButton.focus();
      }
    }

    function openPlaceModal() {
      if (!currentMission) {
        return;
      }

      const missionName = getMissionName(currentMission, t);
      const missionArea = getMissionArea(currentMission, t);

      const placeMainImage = getMissionPlaceMainImage(currentMission);
      const placePhotos = getMissionPlacePhotos(currentMission);

      const climate = getMissionClimate(currentMission, t);
      const typicalFoods = getMissionTypicalFoods(currentMission, t);
      const touristSpots = getMissionTouristSpots(currentMission, t);
      const curiosities = getMissionCuriosities(currentMission, t);
      const cultureTip = getMissionCultureTip(currentMission, t);

      const differentDishName = getMissionDifferentDishName(currentMission, t);
      const differentDishImage = getMissionDifferentDishImage(currentMission);
      const differentDishDescription = getMissionDifferentDishDescription(currentMission, t);

      infoModalReturnFocus = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      countryModal.classList.remove("bio-modal-open");

      const galleryHtml = placePhotos.length > 0
        ? placePhotos.map((photo) => {
            return `
              <div class="place-photo-card">
                <img src="${photo.url}" alt="${photo.title || missionName}">
                <p>${photo.title || ""}</p>
              </div>
            `;
          }).join("")
        : `
          <div class="place-photo-empty">
            ${t.notAvailable}
          </div>
        `;

      modalContent.innerHTML = `
        <button type="button" class="bio-close-button" id="placeCloseButton">
          ×
        </button>

        <div class="place-modal-layout">
          <section class="place-hero">
            ${
              placeMainImage
                ? `<img src="${placeMainImage}" alt="${missionName}" class="place-hero-image">`
                : `<div class="place-hero-placeholder">${t.notAvailable}</div>`
            }

            <div class="place-hero-text">
              <p>${missionArea}</p>
              <h2 id="modalTitle">${missionName}</h2>
            </div>
          </section>

          <section class="place-gallery-section">
            <div class="place-section-title">
              <span>📷</span>
              <h3>${t.placeGallery}</h3>
            </div>

            <div class="place-gallery">
              ${galleryHtml}
            </div>
          </section>

          <section class="place-grid">
            <div class="place-card">
              <span>☀️</span>
              <h3>${t.climate}</h3>
              <p>${climate}</p>
            </div>

            <div class="place-card">
              <span>📍</span>
              <h3>${t.touristSpots}</h3>
              <p>${touristSpots}</p>
            </div>

            <div class="place-card">
              <span>✨</span>
              <h3>${t.curiosities}</h3>
              <p>${curiosities}</p>
            </div>

            <div class="place-card">
              <span>🍽️</span>
              <h3>${t.typicalFoods}</h3>
              <p>${typicalFoods}</p>
            </div>

            <div class="different-dish-card">
              <div class="different-dish-image-wrap">
                ${
                  differentDishImage
                    ? `<img src="${differentDishImage}" alt="${differentDishName}">`
                    : `<div class="dish-placeholder">🍲</div>`
                }
              </div>

              <div class="different-dish-text">
                <span>🍲</span>
                <h3>${t.differentDish}</h3>
                <h4>${differentDishName}</h4>
                <p>${differentDishDescription}</p>
              </div>
            </div>

            <div class="place-card place-card-wide">
              <span>🤝</span>
              <h3>${t.cultureTip}</h3>
              <p>${cultureTip}</p>
            </div>
          </section>
        </div>
      `;

      countryModal.style.display = "block";

      const placeCloseButton = document.getElementById("placeCloseButton");

      if (placeCloseButton) {
        placeCloseButton.addEventListener("click", closeInfoModal);
        placeCloseButton.focus();
      }
    }

    // =========================================================
    // ABA DE MISSÕES — GRADE TOUCH
    // =========================================================

    function buildMissionCountText(total) {
      if (total === 1) {
        return `1 ${t.missionCountSingular}`;
      }

      return `${total} ${t.missionCountPlural}`;
    }

    function renderMissionHub(countryMissions, title, searchable = false) {
      currentCountryMissions = [...countryMissions];
      currentPage = 1;
      currentMission = null;
      currentMissionIndex = 0;
      isMissionSearchView = searchable;
      currentSearchQuery = "";

      const countryName = title || getMissionArea(countryMissions[0], t);

      countryTitle.textContent = countryName;
      areaName.textContent = buildMissionCountText(countryMissions.length);
      areaName.style.display = searchable ? "none" : "";
      if (moreInfoBtn) {
        moreInfoBtn.style.display = searchable ? "none" : "inline-flex";
      }

      missionsList.innerHTML = "";
      missionsList.style.display = "none";

      drawMissionHubPage();
    }

    function drawMissionHubPage() {
      const normalizedQuery = normalizeMissionName(currentSearchQuery);
      const visibleMissions = isMissionSearchView
        ? allMissions.filter((mission) => {
            const searchText = normalizeMissionName([
              getMissionName(mission, t),
              getMissionPresident(mission, t),
              getMissionArea(mission, t)
            ].join(" "));

            return searchText.includes(normalizedQuery);
          }).sort((left, right) => getMissionName(left, t).localeCompare(getMissionName(right, t), currentLanguage))
        : currentCountryMissions;

      if (isMissionSearchView) {
        currentCountryMissions = visibleMissions;
      }

      const totalMissions = visibleMissions.length;
      const totalPages = Math.max(1, Math.ceil(totalMissions / missionsPerPage));

      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      areaName.textContent = buildMissionCountText(totalMissions);

      const startIndex = (currentPage - 1) * missionsPerPage;
      const endIndex = startIndex + missionsPerPage;
      const missionsToShow = visibleMissions.slice(startIndex, endIndex);

      missionDetails.innerHTML = `
        <div class="mission-hub${isMissionSearchView ? " mission-hub-search" : ""}">
          <div class="mission-hub-header">
            <div>
              <p class="mission-hub-kicker">${t.chooseMission}</p>
              <h2>${countryTitle.textContent}</h2>
              <p>${t.touchInstruction}</p>
            </div>

            <div class="mission-page-status">
              <span>${t.page}</span>
              <strong>${currentPage}</strong>
              <span>${t.of} ${totalPages}</span>
            </div>
          </div>

          ${
            isMissionSearchView
              ? `
                <div class="mission-search-controls">
                  <input class="mission-search-input" id="missionSearchInput" type="search" placeholder="${t.searchPlaceholder}" aria-label="${t.searchPlaceholder}" aria-controls="missionGrid" autocomplete="off">
                  <button type="button" class="mission-search-clear" id="missionSearchClear" aria-label="${t.clearSearch}" ${currentSearchQuery ? "" : "disabled"}>${t.clearSearch}</button>
                  <span class="mission-search-summary" aria-live="polite">${t.searchResultsLabel}: ${buildMissionCountText(totalMissions)}</span>
                </div>
              `
              : ""
          }

          <div class="mission-grid" id="missionGrid"></div>

          <div class="mission-hub-footer">
            <button type="button" class="hub-nav-btn" id="hubPrevPage">
              ${t.previous}
            </button>

            <div class="hub-dots" id="hubDots"></div>

            <button type="button" class="hub-nav-btn" id="hubNextPage">
              ${t.next}
            </button>
          </div>
        </div>
      `;

      const missionGrid = document.getElementById("missionGrid");
      const hubDots = document.getElementById("hubDots");
      const hubPrevPage = document.getElementById("hubPrevPage");
      const hubNextPage = document.getElementById("hubNextPage");

      if (missionsToShow.length === 0) {
        missionGrid.innerHTML = `
          <div class="mission-empty-grid">
            ${isMissionSearchView ? t.noSearchResults : t.noMissionFound}
          </div>
        `;
      } else {
        missionsToShow.forEach((mission, localIndex) => {
          const realIndex = startIndex + localIndex;
          const missionName = getMissionName(mission, t);
          const missionPresident = getMissionPresident(mission, t);
          const missionArea = getMissionArea(mission, t);

          const card = document.createElement("button");
          card.type = "button";
          card.className = "mission-choice-card";
          card.dataset.index = realIndex;

          card.innerHTML = `
            <span class="mission-choice-number">
              ${String(realIndex + 1).padStart(2, "0")}
            </span>

            <span class="mission-choice-title">
              ${missionName}
            </span>

            <span class="mission-choice-president">
              ${missionPresident}
            </span>

            <span class="mission-choice-area">
              ${missionArea}
            </span>
          `;

          card.addEventListener("click", () => {
            renderPresidentProfile(realIndex);
          });

          missionGrid.appendChild(card);
        });
      }

      const firstVisiblePage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
      const lastVisiblePage = Math.min(totalPages, firstVisiblePage + 4);

      for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hub-dot";

        if (i === currentPage) {
          dot.classList.add("active");
          dot.setAttribute("aria-current", "page");
        }

        dot.setAttribute("aria-label", `${t.page} ${i}`);

        dot.addEventListener("click", () => {
          currentPage = i;
          drawMissionHubPage();
        });

        hubDots.appendChild(dot);
      }

      hubPrevPage.addEventListener("click", () => {
        currentPage = currentPage === 1 ? totalPages : currentPage - 1;
        drawMissionHubPage();
      });

      hubNextPage.addEventListener("click", () => {
        currentPage = currentPage === totalPages ? 1 : currentPage + 1;
        drawMissionHubPage();
      });

      const missionSearchInput = document.getElementById("missionSearchInput");

      if (missionSearchInput) {
        missionSearchInput.value = currentSearchQuery;
        missionSearchInput.addEventListener("input", () => {
          const cursorPosition = missionSearchInput.selectionStart;
          currentSearchQuery = missionSearchInput.value;
          currentPage = 1;
          drawMissionHubPage();

          const updatedInput = document.getElementById("missionSearchInput");
          updatedInput?.focus();
          updatedInput?.setSelectionRange(cursorPosition, cursorPosition);
        });

        document.getElementById("missionSearchClear")?.addEventListener("click", () => {
          currentSearchQuery = "";
          currentPage = 1;
          drawMissionHubPage();
          document.getElementById("missionSearchInput")?.focus();
        });
      }
    }

    function renderPresidentProfile(index) {
      if (!currentCountryMissions[index]) {
        return;
      }

      currentMissionIndex = index;
      currentMission = currentCountryMissions[index];
      if (moreInfoBtn) {
        moreInfoBtn.style.display = "none";
      }

      const missionName = getMissionName(currentMission, t);
      const missionArea = getMissionArea(currentMission, t);
      const missionDescription = getMissionDescription(currentMission, t);
      const missionImage = getMissionImage(currentMission);
      const missionPresident = getMissionPresident(currentMission, t);

      missionDetails.innerHTML = `
        <div class="president-profile-view">
          <div class="profile-top-bar">
            <button type="button" class="profile-back-btn" id="backToMissionHub">
              ${t.backToMissions}
            </button>

            <div class="profile-step-indicator">
              ${String(index + 1).padStart(2, "0")} / ${String(currentCountryMissions.length).padStart(2, "0")}
            </div>
          </div>

          <div class="profile-main-card">
            <div class="profile-photo-section">
              ${
                missionImage
                  ? `<img src="${missionImage}" alt="${missionPresident}" class="profile-president-photo">`
                  : `<div class="profile-photo-placeholder">${t.noPhoto}</div>`
              }
            </div>

            <div class="profile-info-section">
              <p class="profile-area-label">${missionArea}</p>

              <h2>${missionName}</h2>

              <h3>${missionPresident}</h3>

              <p class="profile-summary">
                ${makeShortText(missionDescription, 370)}
              </p>

              <div class="profile-actions">
                <button type="button" class="profile-nav-btn" id="profilePrev">
                  ${t.previous}
                </button>

                <button type="button" class="profile-bio-btn" id="profileBio">
                  ${t.viewBio}
                </button>

                <button type="button" class="profile-place-btn" id="profilePlace">
                  ${t.explorePlace}
                </button>

                <button type="button" class="profile-nav-btn" id="profileNext">
                  ${t.next}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById("backToMissionHub").addEventListener("click", drawMissionHubPage);

      document.getElementById("profilePrev").addEventListener("click", () => {
        const newIndex = currentMissionIndex === 0
          ? currentCountryMissions.length - 1
          : currentMissionIndex - 1;

        renderPresidentProfile(newIndex);
      });

      document.getElementById("profileNext").addEventListener("click", () => {
        const newIndex = currentMissionIndex === currentCountryMissions.length - 1
          ? 0
          : currentMissionIndex + 1;

        renderPresidentProfile(newIndex);
      });

      document.getElementById("profileBio").addEventListener("click", openBiographyModal);
      document.getElementById("profilePlace").addEventListener("click", openPlaceModal);
    }

    // =========================================================
    // BOTÕES DE IDIOMA
    // =========================================================

    function setupLanguageButtons() {
      document.querySelectorAll(".language-buttons button").forEach((button) => {
        button.addEventListener("click", function () {
          const selectedLanguage = button.dataset.lang;

          if (!selectedLanguage || selectedLanguage === currentLanguage) {
            return;
          }

          localStorage.setItem("preferredLanguage", selectedLanguage);

          loadingScreen.style.display = "flex";

          setTimeout(() => {
            window.location.reload();
          }, 250);
        });
      });
    }

    // =========================================================
    // CLIQUES NO MAPA
    // =========================================================

    function setupCountryClicks() {
      const worldMap = document.getElementById("world-map");

      if (!worldMap) {
        throw new Error("O SVG do mapa mundial não foi encontrado.");
      }

      Object.entries(missionsByCountry).forEach(([countryId, countryMissions]) => {
        const shape = worldMap.querySelector(`g[id="${countryId}"]`)
          || worldMap.querySelector(`path[id="${countryId}"]`);

        if (!shape) {
          return;
        }

        shape.setAttribute("role", "button");
        shape.setAttribute("tabindex", "0");
        shape.setAttribute(
          "aria-label",
          `${countryId.toUpperCase()}: ${getMissionName(countryMissions[0], t)}`
        );
      });

      function selectCountry(countryId) {
        if (!countryId || !/^[a-z]{2}$/.test(countryId)) {
          return;
        }

        const countryMissions = missionsByCountry[countryId] || [];

        if (countryMissions.length === 0) {
          currentCountryMissions = [];
          currentMission = null;
          if (moreInfoBtn) {
            moreInfoBtn.style.display = "none";
          }

          countryTitle.textContent = t.noMissionFound;
          areaName.textContent = t.noCountryInfo;

          missionDetails.innerHTML = `
            <div class="touch-empty-state">
              ${t.noCountryInfo}
            </div>
          `;

          openModal();
          return;
        }

        renderMissionHub(countryMissions);
        openModal();
      }

      worldMap.addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) {
          return;
        }

        const path = event.target.closest("path");

        if (!path || !worldMap.contains(path)) {
          return;
        }

        const countryId = /^[a-z]{2}$/.test(path.id)
          ? path.id
          : path.closest("g[id]")?.id;

        if (!/^[a-z]{2}$/.test(countryId || "")) {
          return;
        }

        selectCountry(countryId);
      });

      worldMap.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        if (!(event.target instanceof Element)) {
          return;
        }

        const countryShape = event.target.closest('[role="button"][id]');

        if (!countryShape || !worldMap.contains(countryShape)) {
          return;
        }

        event.preventDefault();
        selectCountry(countryShape.id);
      });
    }

    // =========================================================
    // INICIAR SISTEMA
    // =========================================================

    async function init() {
      setupInactivityTimer();
      applyUiLanguage();
      loadingScreen.style.display = "flex";

      missionsByCountry = await loadMissionData();

      setupLanguageButtons();
      setupCountryClicks();

      allMissionsBtn?.addEventListener("click", () => {
        renderMissionHub(allMissions, t.searchMissions, true);
        openModal();
        document.getElementById("missionSearchInput")?.focus();
      });

      closeBtn.addEventListener("click", closeModal);
      modalOverlay.addEventListener("click", closeModal);

      missoesContainer.addEventListener("click", function (event) {
        event.stopPropagation();
      });

      if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeInfoModal);
      }

      if (moreInfoBtn) {
        moreInfoBtn.addEventListener("click", openCountryInfoModal);
      }

      countryModal.addEventListener("click", function (event) {
        if (event.target === countryModal) {
          closeInfoModal();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
          return;
        }

        if (countryModal.style.display === "block") {
          closeInfoModal();
        } else if (missoesContainer.classList.contains("show")) {
          closeModal();
        }
      });

      loadingScreen.style.display = "none";
    }

    await init();

  } catch (error) {
    console.error("Erro ao inicializar o sistema:", error);

    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }

    const errorDiv = document.createElement("div");
    errorDiv.setAttribute("role", "alert");
    errorDiv.style.color = "white";
    errorDiv.style.background = "rgba(170, 0, 0, 0.92)";
    errorDiv.style.padding = "20px";
    errorDiv.style.textAlign = "center";
    errorDiv.style.fontFamily = "Montserrat, sans-serif";
    errorDiv.style.fontWeight = "700";
    errorDiv.textContent = t.loadingError;

    document.body.prepend(errorDiv);
  }
});