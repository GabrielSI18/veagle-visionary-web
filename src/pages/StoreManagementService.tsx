
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, LineChart, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreManagementService = () => {
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
                <h1 className="heading-lg mb-6">Online Store Management</h1>
                <p className="text-lg text-gray-600 mb-8">
                  We provide comprehensive management services for your online store, 
                  handling day-to-day operations so you can focus on growing your business.
                </p>
                <Link to="/#contact">
                  <Button className="btn-primary">
                    Optimize your store today
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
              <div className="animate-fade-in-slow">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Online Store Management" 
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
              <h2 className="heading-md mb-4">Comprehensive Management Services</h2>
              <p className="text-gray-600">
                Our store management services cover all aspects of running a successful online store
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Store className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
                    <p className="text-gray-600">
                      Product updates, stock monitoring, and inventory optimization to prevent stockouts and overstock.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <LineChart className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Sales & Performance</h3>
                    <p className="text-gray-600">
                      Regular reporting, analytics monitoring, and sales trend analysis to grow your revenue.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Users className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                    <p className="text-gray-600">
                      Managing customer inquiries, order issues, and returns to maintain customer satisfaction.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Settings className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Technical Maintenance</h3>
                    <p className="text-gray-600">
                      Store updates, security patches, and ongoing optimization for performance and user experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Benefits of Professional Store Management</h2>
              <p className="text-gray-600">
                Discover why businesses trust us with their online store management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">⏱️</div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-gray-600">
                    Focus on core business activities while we handle the day-to-day operations of your online store.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold mb-2">Increase Sales</h3>
                  <p className="text-gray-600">
                    Benefit from our expertise in optimizing product listings, promotions, and user experience.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold mb-2">Reduce Risks</h3>
                  <p className="text-gray-600">
                    Avoid costly mistakes with professional management of inventory, orders, and technical issues.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Plans Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Our Management Plans</h2>
              <p className="text-gray-600">
                Choose the right level of support for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card border-t-4 border-gray-400 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Essential</h3>
                    <div className="text-3xl font-bold mb-1">Basic Management</div>
                    <p className="text-gray-600">For small stores</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Product updates and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Monthly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Basic technical support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Email customer support</span>
                    </li>
                  </ul>
                  
                  <div className="text-center">
                    <Link to="/#contact">
                      <Button className="w-full btn-secondary">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-t-4 border-veagle-purple transform -translate-y-4 hover:shadow-xl transition-all">
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-veagle-purple text-white text-sm px-4 py-1 rounded-full">Most Popular</div>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Professional</h3>
                    <div className="text-3xl font-bold mb-1">Complete Management</div>
                    <p className="text-gray-600">For growing businesses</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Everything in Essential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Inventory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Weekly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Marketing campaigns management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Priority technical support</span>
                    </li>
                  </ul>
                  
                  <div className="text-center">
                    <Link to="/#contact">
                      <Button className="w-full btn-primary">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-t-4 border-gray-800 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                    <div className="text-3xl font-bold mb-1">Premium Management</div>
                    <p className="text-gray-600">For established businesses</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Custom reporting dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>24/7 technical support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2">✓</div>
                      <span>Strategic business consulting</span>
                    </li>
                  </ul>
                  
                  <div className="text-center">
                    <Link to="/#contact">
                      <Button className="w-full btn-secondary">Contact Us</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-veagle-purple rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-md mb-4">Ready to Optimize Your Online Store?</h2>
                  <p className="mb-6 md:mb-0">
                    Let our experts handle your store operations while you focus on growing your business.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link to="/#contact">
                    <Button className="bg-white text-veagle-purple hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center gap-2">
                      Get in touch
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

export default StoreManagementService;
