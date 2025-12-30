// Translations dictionary
const translations = {
  it: {
    desctitle: "Chi sono io?",
    desc: "Graphic Designer con oltre 12 anni di esperienza nello sviluppo di identità visive, progetti digitali e campagne creative, evolvendo la mia figura in modo naturale e flessibile. Mi definisco una professionista pratica, professionale e curiosa, capace di adattarsi alle nuove tendenze mantenendo sempre una visione estetica chiara e coerente. ",
    titleschool: "Carriera educativa",
    work: "Esperienza lavorativa",
    hardskills: "Skills tecniche",
    brunel: "Brunel London University(Regno Unito)",
    laurea: "Laurea in Comunicazione, Media e Pubblicità",
    IULM: "IULM (Italia)",
    maturita: "Maturità Tecnico-Industriale Ind. Arti Grafiche",
    school: "C.E. Gadda Paderno Dugnano (Italia)",
    econocom: "Econocom - AsystelBDF (Italia)",
    lifenergy: "Lifenergy (Italia)",
    adv: "ADV Comunicare Srl (Italia)",
    next: "Nextvalue (Italia)",
    bdm: "BDM Srl (Italia)",
    language: "Lingue straniere",
    com: "Comunicazione",
    emp: "Empatia",
    eth: "Etica",
    cre: "Creatività",
    cri: "Pensiero critico",
    adp: "Adattamento",
    res: "Resilienza",
    draw: "Disegno digitale/tradizionale",
    photo: "Fotomontaggio",
    write: "Scrittura creativa",
    content: "Content creator: video e prodotti grafici - digitali e stampati",
    premio: "Premi e certificazioni",
    cyber: "Corso Cybersecurity aziendale",
    security: "Corso Sicurezza in Ufficio & Whisleblowing + AI Security & Application",
    graph: "Update skills grafiche e corsi di aggiornamento",
    pin: "2015 - Prima classificata assoluta - Pin Contest Monza III Ed.",
    acqua: "2009 - Prima classificata assoluta - Di che acqua sei?",
    download: "Download CV",
    treat: "Autorizzo il trattamento dei miei dati personali ai sensi del D. Lgs. 196/2003, come modificato dal D. Lgs. 101/2018, e dell’art. 13 del GDPR (Regolamento UE 2016/679) ai fini della ricerca e selezione del personale.",
  },
  en: {
    desctitle: "Who am I?",
    desc: "Graphic Designer with over 12 years of experience in developing visual identities, digital projects and creative campaigns, evolving my figure in a natural and flexible way. I define myself as a practical, professional and curious professional, capable of adapting to new trends while always maintaining a clear and coherent aesthetic vision.",
    titleschool: "Education Experience",
    work: "Working experience",
    hardskills: "Techinical Skills",
    brunel: "Brunel London University(UK)",
    laurea: "Degree in Communication, Media and Advertising",
    IULM: "IULM (Italy)",
    maturita: "Tecnical Graphic Arts Industry High School Certificate",
    school: "C.E. Gadda Paderno Dugnano (Italy)",
    econocom: "Econocom - AsystelBDF (Italy)",
    lifenergy: "Lifenergy (Italy)",
    adv: "ADV Comunicare Srl (Italy)",
    next: "Nextvalue (Italy)",
    bdm: "BDM Srl (Italy)",
    language: "Foreign languages",
    com: "Communication",
    emp: "Empathy",
    eth: "Ethics",
    cre: "Creativity",
    cri: "Critical thinking",
    adp: "Flexibility",
    res: "Resilience",
    draw: "Digital and traditional hand drawing skills",
    photo: "Photomanipulation",
    write: "Creative writing",
    content: "Content creator: video and graphic products - digital and printed",
    premio: "Prizes and Certifications",
    cyber: "Corporate IT security",
    security: "Office Safety Course & Whisleblowing + AI Security & Application",
    graph: "Update graphic skills and refresh courses",
    pin: "2015 - First top place - Pin Contest Monza III Ed. (ITA ONLY)",
    acqua: "2009 - First place - Di che acqua sei? (ITA ONLY)",
    download: "Download CV",
    treat: "I hereby consent to the processing of my personal data contained in this CV for the sole purpose of considering my application for employment opportunities, in accordance with Article 6.1(a) of the GDPR, i.e. Regulation (EU) 2016/679.",
  },
};

// Default language
let currentLang = "it";

// Button element
const langBtn = document.getElementById("lang-toggle");

// Function to change language
function changeLanguage() {
  currentLang = currentLang === "it" ? "en" : "it";
  updateTexts();
  updateButton();
}

// Update all texts with data-translate attributes
function updateTexts() {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    const textSpan = el.querySelector(".text");

    if (textSpan) {
      textSpan.textContent = translations[currentLang][key];
    }
  });

  // Update <html> lang attribute
  document.documentElement.lang = currentLang;
}

// Update button text
function updateButton() {
  langBtn.textContent = currentLang === "it" ? "🇬🇧 English" : "🇮🇹 Italiano";
}

// Attach event listener
langBtn.addEventListener("click", changeLanguage);

// Initialize
updateTexts();
updateButton();




//Progress bar

// Function to set color based on percentage
function getColor(percent) {
  if (percent > 70) return '#44b536';
  if (percent > 50) return '#9ab526';
  return '#ca7f1cff';
}

// Animate all progress bars
document.querySelectorAll('.barcontain').forEach(barContainer => {
  const progressBar = barContainer.querySelector('.progress-bar');
  const progressText = barContainer.querySelector('.progress-text');
  const targetPercentage = parseInt(barContainer.dataset.progress, 10);

  let current = 0;

  function animate() {
    if (current < targetPercentage) {
      current++;
      progressBar.style.width = `${current}%`;
      progressBar.style.backgroundColor = getColor(current);
      progressText.textContent = `${current}%`;
      requestAnimationFrame(animate);
    } else {
      progressBar.style.width = `${targetPercentage}%`;
      progressBar.style.backgroundColor = getColor(targetPercentage);
      progressText.textContent = `${targetPercentage}%`;
    }
  }

  requestAnimationFrame(animate);
});
