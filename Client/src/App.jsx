import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, CheckCircle2, Loader2} from 'lucide-react';
import FadeIn from './components/common/FadeIn';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Project from './components/sections/ProjectShowcase';


// --- App Component ---

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Project/>
      <Contact />
    </div>
  );
}

export default App;