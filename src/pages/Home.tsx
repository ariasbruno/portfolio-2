import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from '../i18n/translations';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SelectedWorks from '../components/SelectedWorks';
import Services from '../components/Services';
import Manifesto from '../components/Manifesto';
import Contact from '../components/Contact';
import { OldPortfolioModal } from '../components/ui/old-portfolio-modal';

const Home: React.FC = () => {
  const t = translations;
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Use instant scroll to align for view transitions
        element.scrollIntoView({ behavior: 'auto' });

        // Clean up the history state so that refreshing doesn't scroll down again
        const state = window.history.state;
        if (state && state.usr) {
          const newUsr = { ...state.usr };
          delete newUsr.scrollTo;
          delete newUsr.project;
          window.history.replaceState({ ...state, usr: newUsr }, '');
        }
      }
    }
  }, [location.state]);

  return (
    <Layout>
      <HeroSection content={t.hero} />
      <SelectedWorks
        content={t.works}
        initialProject={location.state?.project}
      />
      <Services content={t.services} />
      <Manifesto content={t.manifesto} />
      <Contact content={t.contact} />
      <OldPortfolioModal />
    </Layout>
  );
};

export default Home;
