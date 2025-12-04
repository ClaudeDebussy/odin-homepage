import "./styles.css";
import "./modern-css-reset.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "claudedebussy",
  },
});

// const myImage = cloudinary.image("docs/models");
// myImage.resize(fill().width(250).height(250));
// const imgElement = document.createElement("img");
// document.body.appendChild(imgElement);
// imgElement.src = myImage.toURL();
