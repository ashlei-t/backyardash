import React from 'react';
import AnimatedText from '../components/ui/AnimatedText';
import Pokebudz from '../assets/pokebudz.png';
import AMFT from '../assets/AMFT.png';
import Peluditos from '../assets/peluditos.png';
import '../App.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <AnimatedText text="Projects" tag="h2" animation="slide" className="section-title" />
      </div>

      <div className="projects-container">

        {/* Pokebudz Project */}
        <div className="drag-handle">
              <span className="title">MVP Project</span>
              <div className="icons">
              <button className="minimize"> + </button>
              <button className="close">X</button>
          </div>
        </div>
        <div className="project-section pokebudz">
          <div className="project-content">
            <div className="project-text">
              <h3 className="project-title">Pokebudz</h3>
              <p className="project-description">
                Poké Budz is a playful, adoption-style app I designed and built as a solo project, inspired by the nostalgic charm of retro gaming and collectible toys. The interface—styled in vibrant, pixel-art-inspired colors—mimics a Pokédex-like feel, immersing users in an experience that feels both modern and reminiscent of classic handheld games.
              </p>
              <p className="project-description">
               Users take a personality-based quiz and are matched with their ideal Pokémon buddy, displayed in a UI that blends bold 90s aesthetics with intuitive interactivity. Built with React, Vite, Node/Express, and MySQL, this project showcases my ability to craft engaging, immersive frontend experiences while integrating full-stack functionality.
              </p>
              <div className="project-tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">TypeScript</span>
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={Pokebudz}
                alt="Pokebudz App Screenshot"
                className="project-image"
              />
            </div>
          </div>
        </div>

        {/* My Favorite Things Project */}
        <div className="drag-handle">
              <span className="title">AMFT</span>
              <div className="icons">
              <button className="minimize"> + </button>
              <button className="close">X</button>
          </div>
        </div>
        <div className="project-section amft">
          <div className="project-content">
            <div className="project-image-container">
              <img
                src={AMFT}
                alt="My Favorite Things Screenshot"
                className="project-image"
              />
            </div>
            <div className="project-text">
              <h3 className="project-title">My Favorite Things</h3>
              <p className="project-description">
                A personal curation of favorite items, places, and memories.
                Built as a creative exploration of web design and animation.
              </p>
              <div className="project-tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Three.js</span>
                <span className="tech-tag">GSAP</span>
              </div>
            </div>
          </div>
        </div>

                {/* Peluditos Project */}
                <div className="drag-handle">
              <span className="title">Peluditos</span>
              <div className="icons">
              <button className="minimize"> + </button>
              <button className="close">X</button>
          </div>
        </div>
        <div className="project-section peluditos">
          <div className="project-content ">
            <div className="project-text">
              <h3 className="project-title">Peluditos</h3>
              <p className="project-description">
                A pet adoption platform connecting shelters with potential adopters.
                Features a modern, responsive design with real-time updates.
              </p>
              <div className="project-tech-stack">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
              </div>
            </div>
            <div className="project-image-container">
              <img
                src={Peluditos}
                alt="Peluditos Platform Screenshot"
                className="project-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
