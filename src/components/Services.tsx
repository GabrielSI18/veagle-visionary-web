
import React from 'react';
import { Layout, BarChart2, ShoppingBag, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Landing Page Creation",
      description: "Optimized conversion pages to generate leads and sales.",
      icon: <Layout className="h-12 w-12 text-veagle-purple" />,
      link: "/services/landing-page",
    },
    {
      title: "Paid Traffic Management",
      description: "Ad campaigns that maximize your ROI.",
      icon: <BarChart2 className="h-12 w-12 text-veagle-purple" />,
      link: "/services/paid-traffic",
    },
    {
      title: "Online Store Creation",
      description: "Complete and customized online stores.",
      icon: <ShoppingBag className="h-12 w-12 text-veagle-purple" />,
      link: "/services/store-creation",
    },
    {
      title: "Online Store Management",
      description: "Professional management to increase your sales.",
      icon: <Store className="h-12 w-12 text-veagle-purple" />,
      link: "/services/store-management",
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-purple-50 to-white -z-10"></div>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
            What We Offer
          </div>
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="subheading">
            Solutions designed to take your business to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-service"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-veagle-purple hover:underline font-medium"
              >
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-veagle-purple/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4 text-gray-900">Need a custom solution?</h3>
              <p className="text-gray-600">
                We understand that each business has unique needs. Our team is ready to develop tailored solutions that address your specific challenges.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link to="/#contact" className="btn-primary">
                Get in touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
