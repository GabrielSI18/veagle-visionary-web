
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Monitor, BarChart2, ShoppingBag, Code } from 'lucide-react';

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const logo = logoRef.current;
    const icons = iconsRef.current.filter(Boolean);
    
    if (!logo || icons.length === 0) return;
    
    // Position icons in a circle around the logo
    const radius = 100;
    const totalIcons = icons.length;
    
    icons.forEach((icon, index) => {
      if (!icon) return;
      
      const angle = (index / totalIcons) * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      icon.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Animation loop for rotation
    let animationFrameId: number;
    let rotation = 0;
    
    const animate = () => {
      rotation += 0.003;
      
      icons.forEach((icon, index) => {
        if (!icon) return;
        
        const angle = rotation + (index / totalIcons) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50 -z-10"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-6 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit">
            Digital Excellence
          </div>
          <h1 className="heading-xl text-gray-900">
            Welcome to <span className="text-veagle-purple">Veagle</span> Company LLC
          </h1>
          <p className="subheading text-gray-600 max-w-lg">
            We specialize in creating landing pages, managing paid traffic, building and managing online stores, helping you achieve real results. We are more than a software house. We are partners who think, create, and develop technology to solve real problems efficiently and innovatively.
          </p>
          <div className="pt-4">
            <button onClick={handleScrollToServices} className="btn-primary">
              Explore our services
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Animated Logo */}
        <div className="flex justify-center items-center h-80 md:h-96 relative animate-fade-in-slow">
          <div 
            ref={logoRef} 
            className="w-24 h-24 md:w-32 md:h-32 bg-veagle-purple rounded-xl flex items-center justify-center text-white font-bold text-2xl md:text-3xl relative z-10 animate-pulse-soft shadow-lg"
          >
            Veagle
          </div>
          
          {/* Orbiting Icons */}
          <div 
            ref={(el) => (iconsRef.current[0] = el)} 
            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-veagle-purple shadow-md"
          >
            <Monitor size={24} />
          </div>
          <div 
            ref={(el) => (iconsRef.current[1] = el)} 
            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-veagle-purple shadow-md"
          >
            <BarChart2 size={24} />
          </div>
          <div 
            ref={(el) => (iconsRef.current[2] = el)} 
            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-veagle-purple shadow-md"
          >
            <ShoppingBag size={24} />
          </div>
          <div 
            ref={(el) => (iconsRef.current[3] = el)} 
            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-veagle-purple shadow-md"
          >
            <Code size={24} />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
