import "./styles.css";
import "./modern-css-reset.css";

const mediaQuery = "(min-width: 768px) and (max-width: 1279px)";
const mediaQueryList = window.matchMedia(mediaQuery);

function updateHeader(mql) {
  const header = document.querySelector(".header-container");

  if (mql.matches) {
    header.innerHTML = `
    <div class="header-img-container">
      <img
        src="https://res.cloudinary.com/claudedebussy/image/upload/q_auto/claudedebussyportrait.webp"
        alt="Portrait of Claude Debussy in sepia tone"
      />
    </div>
    <h1>Claude Debussy</h1>
    <h2>About Me</h2>
    <p>
      I am Achille-Claude Debussy, a composer who believes that music is not
      merely a set of rules to be followed, but a colorful, fluid expression
      of nature and emotion. Often described as the first Impressionist
      composer, I strive to break free from the rigid structures of
      traditional harmony. My work seeks to capture fleeting moments,
      shimmering light, and the subtle rhythms of the natural world. I
      compose not to resolve chords, but to give pleasure and to liberate
      the imagination.
    </p>
    <div class="socials-container">
      <i class="devicon-opera-plain"></i>
      <i class="devicon-composer-line"></i>
      <i class="devicon-beats-plain"></i>
    </div>
    `;
  } else {
    header.innerHTML = `
    <div class="header-img-container">
      <img
        src="https://res.cloudinary.com/claudedebussy/image/upload/q_auto/claudedebussyportrait.webp"
        alt="Portrait of Claude Debussy in sepia tone"
      />
      <h1>Claude Debussy</h1>
    </div>
    <h2>About Me</h2>
    <p>
      I am Achille-Claude Debussy, a composer who believes that music is not
      merely a set of rules to be followed, but a colorful, fluid expression
      of nature and emotion. Often described as the first Impressionist
      composer, I strive to break free from the rigid structures of
      traditional harmony. My work seeks to capture fleeting moments,
      shimmering light, and the subtle rhythms of the natural world. I
      compose not to resolve chords, but to give pleasure and to liberate
      the imagination.
    </p>
    <div class="socials-container">
      <i class="devicon-opera-plain"></i>
      <i class="devicon-composer-line"></i>
      <i class="devicon-beats-plain"></i>
    </div>
    `;
  }
}

updateHeader(mediaQueryList);

mediaQueryList.addEventListener("change", updateHeader);
