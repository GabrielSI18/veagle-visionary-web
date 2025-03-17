
import React from 'react';
import { Eye, Award, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: "Clear Vision",
      description: "We see beyond the obvious to find solutions that truly transform the way businesses operate. At Veagle, we believe that clarity of purpose is essential to delivering solutions that truly make sense for your business.",
      icon: <Eye className="h-8 w-8 text-veagle-purple" />,
    },
    {
      title: "Excellence",
      description: "We don't settle for the basics. We strive for excellence in every line of code and every interface we create. At Veagle, we believe that only the best is enough, which is why we are constantly improving our skills and processes.",
      icon: <Award className="h-8 w-8 text-veagle-purple" />,
    },
    {
      title: "Human Connection",
      description: "Behind every code is a team passionate about creating solutions that connect people and transform experiences. At Veagle, we believe that technology should serve people, not the other way around. Our focus is always on creating experiences that connect and simplify lives.",
      icon: <Heart className="h-8 w-8 text-veagle-purple" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white -z-10"></div>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
            Our Philosophy
          </div>
          <h2 className="heading-lg mb-4">What Drives Us</h2>
          <p className="subheading">
            Our passion for creating solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 flex flex-col items-start h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="p-3 bg-veagle-purple/10 rounded-lg mb-6">
                {value.icon}
              </div>
              <h3 className="heading-sm mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 flex-grow">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/about" className="btn-secondary">
            Read more about us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
