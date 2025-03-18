
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layout, Target, BarChart, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPageService = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white -z-10"></div>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mb-4">
                  Our Services
                </div>
                <h1 className="heading-lg mb-6">Landing Page Creation</h1>
                <p className="text-lg text-gray-600 mb-8">
                  We create optimized landing pages designed to convert visitors into customers,
                  focusing on clear messaging, compelling design, and strategic call-to-actions.
                </p>
                <Link to="/#contact">
                  <Button className="btn-primary">
                    Get started today
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
              <div className="animate-fade-in-slow">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Landing Page Design" 
                  className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Why Our Landing Pages Convert</h2>
              <p className="text-gray-600">
                Our landing pages are strategically designed to drive conversions
                through proven techniques and data-driven design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Target className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Conversion Focused</h3>
                    <p className="text-gray-600">
                      Every element on our landing pages is designed to guide visitors 
                      toward taking a specific action, maximizing conversion rates.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Layout className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Optimized Design</h3>
                    <p className="text-gray-600">
                      Clean, professional designs that load quickly and present your 
                      value proposition clearly across all devices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <BarChart className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                    <p className="text-gray-600">
                      Ongoing performance tracking and A/B testing to continuously 
                      improve conversion rates and user experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Our Landing Page Creation Process</h2>
              <p className="text-gray-600">
                We follow a structured approach to create high-converting landing pages
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Our design process" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Research & Strategy</h3>
                      <p className="text-gray-600">
                        We research your industry, audience, and competitors to develop 
                        a strategic approach to your landing page.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design & Content</h3>
                      <p className="text-gray-600">
                        Our designers and copywriters work together to create a visually 
                        appealing page with compelling messaging.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                      <p className="text-gray-600">
                        We build your page with clean code and test it across all devices 
                        to ensure optimal performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Launch & Optimization</h3>
                      <p className="text-gray-600">
                        After launch, we monitor performance and make data-driven 
                        improvements to maximize your conversion rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-veagle-purple rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-md mb-4">Ready to Convert More Visitors?</h2>
                  <p className="mb-6 md:mb-0">
                    Get a landing page that's designed to turn visitors into customers.
                    Our team is ready to help you achieve your business goals.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link to="/#contact">
                    <Button className="bg-white text-veagle-purple hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center gap-2">
                      Contact us today
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageService;
