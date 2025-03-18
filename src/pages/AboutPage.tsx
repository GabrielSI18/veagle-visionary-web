import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Target,
  Users,
  Briefcase,
  Award,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8 text-veagle-purple" />,
      title: "Clear Vision",
      description:
        "We see beyond the obvious to find solutions that truly transform the way businesses operate.",
    },
    {
      icon: <Award className="h-8 w-8 text-veagle-purple" />,
      title: "Excellence",
      description:
        "We strive for excellence in every line of code and every interface we create.",
    },
    {
      icon: <Users className="h-8 w-8 text-veagle-purple" />,
      title: "Human Connection",
      description:
        "We believe that technology should serve people, not the other way around.",
    },
    {
      icon: <Shield className="h-8 w-8 text-veagle-purple" />,
      title: "Trust & Integrity",
      description:
        "We build relationships based on transparency, honesty and consistent delivery.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-veagle-purple" />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-veagle-purple" />,
      title: "Growth Focus",
      description:
        "We measure our success by the growth and success of our clients' businesses.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple-50 to-white relative overflow-hidden">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mb-4">
                  About Us
                </div>
                <h1 className="heading-xl mb-6">
                  We Create Digital Solutions That Drive Growth
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  At Veagle Company LLC, we're more than just a software house.
                  We're partners who think, create, and develop technology to
                  solve real problems efficiently and innovatively.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/#services" className="btn-primary">
                    Our Services
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/#contact" className="btn-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="relative animate-fade-in-slow">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-veagle-purple via-veagle-light to-purple-300 p-1 shadow-xl">
                  <img
                    src="/veaglezin.png" // Caminho relativo da imagem dentro da pasta public
                    alt="Logo Veagle"
                    className="rounded-2xl h-full w-full object-cover" // A imagem vai ocupar todo o espaço
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-veagle-purple/10 rounded-full animate-float"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-veagle-purple/5 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
                Our Journey
              </div>
              <h2 className="heading-lg mb-4">Our Story</h2>
              <p className="subheading">
                From humble beginnings to becoming a trusted digital partner
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Veagle Company LLC was founded with a simple yet powerful
                    vision: to create digital solutions that make a real
                    difference for businesses. We started as a small team of
                    passionate developers and designers who believed that
                    technology should be accessible, effective, and tailored to
                    the unique needs of each client.
                  </p>
                  <p>
                    Over the years, we've grown both in size and expertise, but
                    our core values have remained the same. We've consistently
                    focused on building long-term relationships with our
                    clients, understanding their challenges intimately, and
                    developing solutions that drive meaningful results.
                  </p>
                  <p>
                    Today, we're proud to work with businesses of all sizes
                    across multiple industries, helping them navigate the
                    digital landscape and achieve their goals through innovative
                    technology solutions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-lg bg-veagle-purple/10 animate-float p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-veagle-purple">
                      50+
                    </div>
                    <div className="text-gray-600 mt-2">Satisfied Clients</div>
                  </div>
                </div>
                <div
                  className="aspect-video rounded-lg bg-veagle-purple/15 animate-float p-6 flex items-center justify-center"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-veagle-purple">
                      100+
                    </div>
                    <div className="text-gray-600 mt-2">Projects Completed</div>
                  </div>
                </div>
                <div
                  className="aspect-video rounded-lg bg-veagle-purple/15 animate-float p-6 flex items-center justify-center"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-veagle-purple">
                      5+
                    </div>
                    <div className="text-gray-600 mt-2">Years Experience</div>
                  </div>
                </div>
                <div
                  className="aspect-video rounded-lg bg-veagle-purple/10 animate-float p-6 flex items-center justify-center"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-veagle-purple">
                      95%
                    </div>
                    <div className="text-gray-600 mt-2">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
                Our Principles
              </div>
              <h2 className="heading-lg mb-4">Our Core Values</h2>
              <p className="subheading">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="p-3 bg-veagle-purple/10 rounded-lg inline-block mb-6">
                    {value.icon}
                  </div>
                  <h3 className="heading-sm mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
                Our People
              </div>
              <h2 className="heading-lg mb-4">Meet Our Leadership Team</h2>
              <p className="subheading">The experts behind our success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-veagle-purple/20 h-48 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-veagle-purple text-white flex items-center justify-center text-2xl font-bold">
                    JD
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-veagle-purple font-medium mb-4">
                    CEO & Founder
                  </p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in digital transformation,
                    John leads our team with vision and passion.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-veagle-purple/20 h-48 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-veagle-purple text-white flex items-center justify-center text-2xl font-bold">
                    JS
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Jane Smith
                  </h3>
                  <p className="text-veagle-purple font-medium mb-4">CTO</p>
                  <p className="text-gray-600 mb-4">
                    Jane brings technical excellence to every project, with deep
                    expertise in cutting-edge web technologies.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-veagle-purple/20 h-48 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-veagle-purple text-white flex items-center justify-center text-2xl font-bold">
                    RJ
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Robert Johnson
                  </h3>
                  <p className="text-veagle-purple font-medium mb-4">
                    Creative Director
                  </p>
                  <p className="text-gray-600 mb-4">
                    Robert's design vision and user experience expertise ensures
                    our solutions are beautiful as well as functional.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-veagle-purple transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-veagle-purple text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Let's work together to create digital solutions that drive real
              results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#services"
                className="btn-secondary bg-white text-veagle-purple hover:bg-gray-100"
              >
                Explore Services
              </Link>
              <Link
                to="/#contact"
                className="btn-primary bg-white/20 hover:bg-white/30 text-white border-white"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
