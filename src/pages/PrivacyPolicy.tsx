
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="container-custom py-16 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Introduction</h2>
            <p>
              At Veagle Company LLC, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have 
              grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, 
                browser type and version, time zone setting and location, browser plug-in types and versions, 
                operating system and platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website and services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal 
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Where we need to perform the contract we are about to enter into or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests 
                and fundamental rights do not override those interests.
              </li>
              <li>
                Where we need to comply with a legal obligation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
              we limit access to your personal data to those employees, agents, contractors and other third 
              parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
              including the right to request access to your personal data, request correction of your personal data, 
              request erasure of your personal data, object to processing of your personal data, request restriction 
              of processing your personal data, request transfer of your personal data, and right to withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-2">
              <p><strong>Email:</strong> contact@veaglecompany.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 412 W 7th St STE 908, Clovis, NM 88101</p>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
