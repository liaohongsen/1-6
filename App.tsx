
import React from 'react';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { UCATIntro } from './components/UCATIntro';
import { TutoringPlans } from './components/TutoringPlans';
import { CompetitionSection } from './components/CompetitionSection';
import { Faculty } from './components/Faculty';
import { CompetitionShowcase } from './components/CompetitionShowcase';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen overflow-x-hidden">
      {/* Scrollable Container for Mobile Feel */}
      <Hero />
      <AboutUs />
      <UCATIntro />
      <TutoringPlans />
      <CompetitionSection />
      <Faculty />
      <CompetitionShowcase />
      <Footer />
    </div>
  );
};

export default App;
