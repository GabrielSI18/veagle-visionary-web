
import React from 'react';
import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';

interface MethodologyProps {
  id: string; // Adicionando a propriedade id
}

const Methodology: React.FC<MethodologyProps> = ({ id }) => {
  const steps = [
    {
      title: "Analysis",
      description: "We understand your needs and goals.",
      icon: <Search className="h-8 w-8 text-white" />,
      color: "bg-veagle-purple",
    },
    {
      title: "Strategy",
      description: "We develop a personalized plan.",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      color: "bg-veagle-purple/85",
    },
    {
      title: "Execution",
      description: "We implement solutions with excellence.",
      icon: <Rocket className="h-8 w-8 text-white" />,
      color: "bg-veagle-purple/75",
    },
    {
      title: "Results",
      description: "We monitor and optimize to ensure success.",
      icon: <BarChart className="h-8 w-8 text-white" />,
      color: "bg-veagle-purple/65",
    },
  ];

  return (
    <section id="methodology" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
            Our Process
          </div>
          <h2 className="heading-lg mb-4">How We Work</h2>
          <p className="subheading">
            Our methodology is based on 4 pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className={`${step.color} p-5 rounded-full mb-6 transform transition-all duration-300 hover:scale-110`}>
                {step.icon}
              </div>
              <h3 className="heading-sm mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="w-full flex justify-center mt-6">
                <div className="h-1 w-16 bg-veagle-purple/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-20 mx-auto max-w-4xl">
          <div className="glass-card rounded-xl p-8 border-l-4 border-veagle-purple">
            <p className="text-lg text-gray-700 italic">
              "Our approach combines deep technical expertise with strategic business understanding, ensuring that every solution we deliver not only meets technical requirements but also drives real business value."
            </p>
            <div className="mt-4 text-gray-600">
              — Veagle Leadership Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
