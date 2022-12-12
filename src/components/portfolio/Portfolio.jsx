import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';
import IMG9 from '../../assets/portfolio9.png';
import IMG10 from '../../assets/portfolio10.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie Verse',
    github: 'https://github.com/sauravburjwal/movie-verse',
    demo: 'https://saurav-movie-verse.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Bankist',
    github: 'https://github.com/sauravburjwal/bankist-application',
    demo: 'https://saurav-bankist-application.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Photography Portfolio Site',
    github: 'https://github.com/sauravburjwal/photography-portfolio-site',
    demo: 'https://saurav-photography-portfolio-site.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Type-n-Speak',
    github: 'https://github.com/sauravburjwal/text-to-speech',
    demo: 'https://saurav-text-to-speech.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Minesweeper',
    github: 'https://github.com/sauravburjwal/minesweeper',
    demo: 'https://saurav-minesweeper.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Guess Game',
    github: 'https://github.com/sauravburjwal/guess-game',
    demo: 'https://saurav-guess-game.netlify.app/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Dice Game',
    github: 'https://github.com/sauravburjwal/dice-game',
    demo: 'https://saurav-dice-game.netlify.app/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Rock Paper Scissors Game ',
    github: 'https://github.com/sauravburjwal/rock-paper-scissors-game',
    demo: 'https://saurav-rock-paper-scissors-game.netlify.app/',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Password Generator',
    github: 'https://github.com/sauravburjwal/password-generator',
    demo: 'https://saurav-password-generator.netlify.app/',
  },
  {
    id: 10,
    image: IMG10,
    title: 'Music Player',
    github: 'https://github.com/sauravburjwal/music-player',
    demo: 'https://saurav-music-player.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>My Recent Work</h1>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="portfolio preview" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
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
