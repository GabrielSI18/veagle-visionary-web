
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main className="container-custom py-16 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
            <p>
              Welcome to Veagle Company LLC. These Terms of Service govern your use of our website and the services 
              we provide. By accessing our website or using our services, you agree to these terms. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Services</h2>
            <p>
              Veagle Company LLC provides digital solutions including landing page creation, paid traffic management, 
              online store creation and management, and custom development services. The specific details of the services 
              will be agreed upon in separate service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Use of Website</h2>
            <p>
              You may use our website for lawful purposes only and in accordance with these Terms of Service. You agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the website in any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website.</li>
              <li>Use the website to transmit or send unsolicited advertisements or promotional materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Intellectual Property</h2>
            <p>
              The website and its entire contents, features, and functionality are owned by Veagle Company LLC and are 
              protected by United States and international copyright, trademark, patent, trade secret, and other 
              intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Disclaimer of Warranties</h2>
            <p>
              You understand that we cannot and do not guarantee or warrant that files available for downloading from 
              the internet or the website will be free of viruses or other destructive code. You are responsible for 
              implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus 
              protection and accuracy of data input and output, and for maintaining a means external to our site for any 
              reconstruction of any lost data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Limitation of Liability</h2>
            <p>
              In no event will we, our affiliates or their licensors, service providers, employees, agents, officers, 
              or directors be liable for damages of any kind, under any legal theory, arising out of or in connection 
              with your use, or inability to use, the website, any websites linked to it, any content on the website or 
              such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Changes to Terms of Service</h2>
            <p>
              We may revise and update these Terms of Service from time to time in our sole discretion. All changes are 
              effective immediately when we post them. Your continued use of the website following the posting of revised 
              Terms of Service means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">8. Contact Information</h2>
            <p>
              Questions or comments about the website or these Terms of Service may be directed to:
            </p>
            <div className="mt-2">
              <p><strong>Email:</strong> contact@veaglecompany.com</p>
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

export default TermsOfService;
