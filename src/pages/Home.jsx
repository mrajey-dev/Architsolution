import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Technology } from '../components/Technology';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Projects } from '../components/Projects';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', overflowX: 'hidden' }}>
      <main>
        <Hero />
        <About />
        <Services />
        <Technology />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
    </div>
  );
};
