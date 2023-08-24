
import './App.css';
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Experience from './components/experience'
import Hero from './components/Hero';
import Services from './components/services';
import Footer from './components/footer';


function App() {

  return (
    <div className=" h-screen text-white overflow-y-scroll overflow-x-hidden scrollbar-thin
    z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    ">

      {/* <Header /> */}

      <section id="hero" className='snap-center' >
          


        <Hero />
        
      </section>


      <section id="hero" className='snap-center' >
        <Experience />
      </section>
      <section id="hero" className='snap-center' >
        <Services />
      </section>

    
      <section id="hero" className='snap-center' >
        <Footer />
      </section>


    </div>
  );
}

export default App;
