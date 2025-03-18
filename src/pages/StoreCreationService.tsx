
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, CreditCard, Truck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreCreationService = () => {
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
                <h1 className="heading-lg mb-6">Online Store Creation</h1>
                <p className="text-lg text-gray-600 mb-8">
                  We design and develop custom online stores that are visually appealing, 
                  user-friendly, and optimized for conversions and sales growth.
                </p>
                <Link to="/#contact">
                  <Button className="btn-primary">
                    Start selling online
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
              <div className="animate-fade-in-slow">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Online Store Creation" 
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
              <h2 className="heading-md mb-4">Features of Our Online Stores</h2>
              <p className="text-gray-600">
                We build complete e-commerce solutions with all the features you need to succeed online.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <ShoppingBag className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Product Management</h3>
                    <p className="text-gray-600">
                      Easy-to-use systems for managing your product catalog, inventory, and variants.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <CreditCard className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Secure Checkout</h3>
                    <p className="text-gray-600">
                      Streamlined, mobile-friendly checkout process with multiple payment options.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Truck className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Shipping Integration</h3>
                    <p className="text-gray-600">
                      Flexible shipping options and integration with major carriers and fulfillment services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-veagle-purple/10 p-3 rounded-full mb-4">
                      <Search className="h-8 w-8 text-veagle-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                    <p className="text-gray-600">
                      Built-in SEO features to help your products rank higher in search engines.
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
              <h2 className="heading-md mb-4">E-commerce Platforms We Work With</h2>
              <p className="text-gray-600">
                We're experts in the leading e-commerce platforms, helping you choose the right solution for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold mb-2">Shopify</h3>
                  <p className="text-gray-600">
                    Perfect for businesses of all sizes, with scalability, ease of use, and extensive app ecosystem.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-semibold mb-2">WooCommerce</h3>
                  <p className="text-gray-600">
                    WordPress-based solution offering flexibility, customization options, and complete control.
                  </p>
                </div>
              </Card>
              
              <Card className="glass-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Tailor-made e-commerce platforms for businesses with unique requirements and complex needs.
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
              <h2 className="heading-md mb-4">Our Store Creation Process</h2>
              <p className="text-gray-600">
                We follow a comprehensive approach to build online stores that look great and drive sales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="E-commerce Development Process" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Planning & Strategy</h3>
                      <p className="text-gray-600">
                        We analyze your business needs, product lineup, and target audience to 
                        create a strategic e-commerce plan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design & UX</h3>
                      <p className="text-gray-600">
                        Our designers create a beautiful, brand-aligned store with intuitive 
                        navigation and conversion-focused user experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Development & Integration</h3>
                      <p className="text-gray-600">
                        We build your store, set up payment gateways, shipping methods, 
                        and integrate with necessary third-party systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-veagle-purple text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Testing & Launch</h3>
                      <p className="text-gray-600">
                        Rigorous testing across devices and browsers, followed by a 
                        smooth launch with ongoing support and optimization.
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
                  <h2 className="heading-md mb-4">Ready to Launch Your Online Store?</h2>
                  <p className="mb-6 md:mb-0">
                    Take your business online with a professional e-commerce store
                    designed to attract customers and drive sales.
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

export default StoreCreationService;
