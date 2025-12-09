import "./styles.css";
import "./modern-css-reset.css";

const mobileQuery = "(max-width: 767px)";
const tabletQuery = "(min-width: 768px) and (max-width: 1279px)";

const mobileMQL = window.matchMedia(mobileQuery);
const tabletMQL = window.matchMedia(tabletQuery);

function updateHeader() {
  const header = document.querySelector(".header-container");

  if (tabletMQL.matches) {
    header.innerHTML = `
    <div class="header-img-container">
      <img
        src="https://res.cloudinary.com/claudedebussy/image/upload/ar_1:1,c_fill/q_auto/claudedebussyportrait.webp"
        alt="Portrait of Claude Debussy in sepia tone"
      />
    </div>
    <h1>Claude Debussy</h1>
    <div class="white-bg">
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
    </div>
    `;
  } else if (mobileMQL.matches) {
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
  } else {
    header.innerHTML = `
    <div class="header-img-container">
      <img
        src="https://res.cloudinary.com/claudedebussy/image/upload/ar_1:1,c_fill/q_auto/claudedebussyportrait.webp"
        alt="Portrait of Claude Debussy in sepia tone"
      />
      <h1>Claude Debussy</h1>
    </div>
    <div class="about-me">
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
    </div>
    `;
  }
}

updateHeader();

mobileMQL.addEventListener("change", updateHeader);
tabletMQL.addEventListener("change", updateHeader);
