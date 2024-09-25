import "./portfolio.css";

import IMG1 from "../../assets/coffee.png";
import IMG2 from "../../assets/shoe.png";
// import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/portfolio.png";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Coffe Shop",
      img: IMG1,
      description:
        "At RR Cafe, we're more than a coffee shop – we're a destination where passion, quality, and community converge. ",
      technologies: "Html | CSS | Javascript",
      link: "https://r-a-g-ul.github.io/Coffeshop/",
      github: "https://github.com/R-A-G-UL/Coffeeshop.git",
    },
    {
      id: 2,
      title: "FootPrints-Online",
      img: IMG2,
      description:
        "FootPrints-Online is your go-to destination for trendy and comfortable footwear, offering a wide selection for every occasion.",
      technologies: "Html | CSS ",
      link:'https://r-a-g-ul.github.io/Footprints-Online/',
      github: "https://github.com/R-A-G-UL/Footprints-Online",
    },
    {
      id: 3,
      title: "Protfolio",
      img: IMG4,
      description: "Real-world group project which is still in progress and will provide educational platform for future young developers.",
      technologies: "React | Bootstrap",

      link:'https://r-a-g-ul.github.io/Portfolio/',

      github: "https://github.com/R-A-G-UL/Portfolio.git",
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a> 
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
