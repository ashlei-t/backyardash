import React from 'react';
import { intro } from '../constants/copy';
import AnimatedText from '../components/ui/AnimatedText';
import '../App.css';

const Home: React.FC = () => {
  return (
    <section id="intro" className="section intro-section">
      <div className="section-content">
        <AnimatedText
          text={intro.greeting}
          tag="h1"
          animation="slide"
          direction="up"
          delay={200}
          className="intro-greeting"
        />
        <div className="animated-waves">
          {/* Waves animation could go here */}
        </div>
        <AnimatedText
          text={intro.tagline}
          tag="p"
          animation="fade"
          delay={600}
          className="intro-tagline"
        />
      </div>
    </section>
  );
};

export default Home;
