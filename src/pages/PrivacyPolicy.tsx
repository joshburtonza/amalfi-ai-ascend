import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Amalfi AI</title>
        <meta name="description" content="Amalfi AI's privacy policy. How we collect, use, and protect your data in compliance with POPIA and international privacy standards." />
        <link rel="canonical" href="https://www.amalfiai.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg prose-invert">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
              
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> January 2026
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Who We Are</h2>
              <p className="text-muted-foreground">
                Amalfi AI ("we", "us", or "our") provides AI automation solutions for service businesses. We are based in Johannesburg, South Africa.
              </p>
              <p className="text-muted-foreground">
                <strong>Contact:</strong><br />
                Email: hello@amalfiai.com<br />
                Phone: +27 81 270 5358<br />
                Address: Johannesburg, South Africa
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">What Data We Collect</h2>
              <p className="text-muted-foreground">We collect information that you provide directly to us:</p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name when you apply for a diagnosis call or contact us</li>
                <li><strong>Business Information:</strong> Industry, operational challenges, tools you use, as provided in application forms</li>
                <li><strong>Communication Records:</strong> Emails and messages you send us, and call recordings if you opt in</li>
                <li><strong>Analytics Data:</strong> How you use our website (pages visited, time spent) via cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why We Collect It</h2>
              <p className="text-muted-foreground">We use your information to:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Assess whether we can help your business (fit qualification)</li>
                <li>Provide our services and communicate about your project</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates if you've opted in</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Lawful Basis</h2>
              <p className="text-muted-foreground">
                We process your data based on: (a) your consent where explicitly provided, (b) necessity for performing a contract with you, (c) our legitimate business interests (qualifying leads, improving services), and (d) legal compliance where required. This aligns with POPIA (South Africa) and GDPR standards.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Sharing & Third Parties</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Service providers:</strong> Hosting, email delivery, analytics, and CRM platforms that help us operate</li>
                <li><strong>Professional advisors:</strong> Legal, accounting, or other professional services as needed</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-muted-foreground">
                All third-party providers are contractually obligated to protect your data.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">International Transfers</h2>
              <p className="text-muted-foreground">
                Some of our service providers operate outside South Africa. When we transfer data internationally, we ensure appropriate safeguards are in place, including standard contractual clauses where applicable.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your data for as long as necessary to provide services and fulfill legal obligations. Application data is retained for 2 years if we don't work together, or for the duration of our business relationship plus 5 years for client records.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your data, including encryption in transit and at rest, access controls, and regular security reviews.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Lodge a complaint with the Information Regulator (South Africa) or relevant supervisory authority</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, contact us at hello@amalfiai.com.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies for website functionality and analytics. You can control cookie preferences through your browser settings. Essential cookies are required for basic website operation.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this policy from time to time. Material changes will be communicated via email to active clients or prominently on our website. The "last updated" date above reflects the most recent revision.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                For privacy-related questions or to exercise your rights:<br />
                Email: hello@amalfiai.com<br />
                Phone: +27 81 270 5358
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
