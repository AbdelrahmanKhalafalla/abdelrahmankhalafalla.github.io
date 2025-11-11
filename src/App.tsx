import React, { useEffect } from "react"
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Set favicon
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#e6c46c"/>
      </svg>
    `;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = url;

    // Set page title
    document.title = 'Abdelrahman Khalafalla,BSc';
    
    return () => URL.revokeObjectURL(url);
  }, []);


  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}
