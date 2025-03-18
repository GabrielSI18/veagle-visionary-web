
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Target, DollarSign, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaidTrafficService = () => {
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
                <h1 className="heading-lg mb-6">Paid Traffic Management</h1>
                <p className="text-lg text-gray-600 mb-8">
                  We create and manage targeted ad campaigns that deliver measurable results, 
                  helping you maximize return on investment and achieve your business goals.
                </p>
                <Link to="/#contact">
                  <Button className="btn-primary">
                    Boost your traffic today
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
              <div className="animate-fade-in-slow">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Paid Traffic Analytics" 
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
              <h2 className="heading-md mb-4">Maximize Your Ad Spend</h2>
              <p className="text-gray-600">
                Our paid traffic management services focus on efficiency, targeting, and ongoing optimization
                to deliver the highest possible ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Target className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Precise Targeting</h3>
                    <p className="text-gray-600">
                      Reach exactly the right audience with carefully crafted targeting strategies
                      based on demographics, interests, and behavior.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <DollarSign className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
                    <p className="text-gray-600">
                      Optimize your ad spend with continuous testing and refinement to lower
                      acquisition costs and increase conversion rates.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <BarChart2 className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Detailed Reporting</h3>
                    <p className="text-gray-600">
                      Transparent and comprehensive reporting that shows exactly where your
                      money is going and what results it's generating.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Ad Platforms We Manage</h2>
              <p className="text-gray-600">
                We have expertise across all major advertising platforms to ensure you reach your audience wherever they are
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold mb-2">Google Ads</h3>
                  <p className="text-gray-600">
                    Search, Display, Video, and Shopping campaigns to capture intent and showcase your products.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold mb-2">Facebook & Instagram</h3>
                  <p className="text-gray-600">
                    Engaging social media campaigns that leverage precise demographic and interest targeting.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-600">
                    B2B focused campaigns targeting professionals by industry, job title, and company size.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Retargeting</h3>
                  <p className="text-gray-600">
                    Cross-platform retargeting strategies to re-engage potential customers who showed interest.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Our Paid Traffic Management Process</h2>
              <p className="text-gray-600">
                A data-driven approach to managing your ad campaigns for maximum results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Traffic Analysis Process" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Audit & Strategy</h3>
                      <p className="text-gray-600">
                        We analyze your current performance and develop a customized strategy 
                        aligned with your business goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Campaign Setup</h3>
                      <p className="text-gray-600">
                        We build optimized campaigns with proper tracking, targeting, 
                        and compelling ad creative.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                      <p className="text-gray-600">
                        Continuous A/B testing of ads, audiences, and landing pages 
                        to improve performance over time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Analysis & Reporting</h3>
                      <p className="text-gray-600">
                        Regular performance reviews and detailed reports with insights 
                        and recommendations for continued improvement.
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
                  <h2 className="heading-md mb-4">Ready to Maximize Your Ad ROI?</h2>
                  <p className="mb-6 md:mb-0">
                    Let our experts manage your paid traffic campaigns and watch your 
                    customer acquisition costs drop while conversions soar.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link to="/#contact">
                    <Button className="bg-white text-veagle-purple hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center gap-2">
                      Get started today
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

export default PaidTrafficService;
