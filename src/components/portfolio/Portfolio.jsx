import "./portfolio.css";

import IMG1 from "../../assets/coffee.png";
import IMG2 from "../../assets/currency.png";
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
    
      github: "https://github.com/R-A-G-UL/Coffeeshop.git",
    },
    {
      id: 2,
      title: "Digital Clock",
      img: IMG2,
      description:
        "currency conversion with our user-friendly tool, always keeping you informed on the latest exchange rates.",
      technologies: "Html | CSS | Javascript",
     
      github: "https://github.com/R-A-G-UL/Digital-Clock.git",
    },
    {
      id: 3,
      title: "Protfolio",
      img: IMG4,
      description: "Real-world group project which is still in progress and will provide educational platform for future young developers.",
      technologies: "React | Bootstrap",
      github: "https://github.com/R-A-G-UL/Portfolio.git",
    },
    // {
    //   id: 4,
    //   title: "Startup Landing Page",
    //   img: IMG3,
    //   description:
    //     "A dedicated, standalone web page built for specific campaigns and target audiences.",
    //   technologies: "Html | CSS | JavaScript | Next Js",
    //   link: "https://alpha-agency-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    // },
    // {
    //   id: 5,
    //   title: "Jokes Project with Typescript",
    //   img: IMG5,
    //   description:
    //     "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
    //   technologies: "Html | Styled-components | Typescript",
    //   link: "https://jokes-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Joke-App",
    // },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
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
