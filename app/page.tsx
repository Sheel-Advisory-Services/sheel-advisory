import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TargetClients from '@/components/TargetClients';
import Services from '@/components/Services';
import About from '@/components/About';
import Insights from '@/components/Insights';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TargetClients />
      <Services />
      <About />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
