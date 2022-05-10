import './App.scss';
import ContactSlide from './components/contact_slide/ContactSlide';
import Header from './components/header/Header';
import LandingHero from './components/landing_hero/LandingHero';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingHero />
      <ContactSlide />
    </div>
  );
}

export default App;
