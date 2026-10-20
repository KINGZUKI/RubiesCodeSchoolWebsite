import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Programs from '@/components/Programs';
import Curriculum from '@/components/Curriculum';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import GetInvolved from '@/components/GetInvolved';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-brand-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Programs />
        <Curriculum />
        <Courses />
        <Testimonials />
        <GetInvolved />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
