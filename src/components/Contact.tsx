import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import emailjs from 'emailjs-com';
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDebugDialog, setShowDebugDialog] = useState(false);
  const [debugInfo, setDebugInfo] = useState({
    serviceId: '',
    templateId: '',
    publicKey: ''
  });

  // Initialize EmailJS when the component loads
  useEffect(() => {
    try {
      // Make sure to use your correct public key here
      emailjs.init("SrFyjLIV1DL34WKye");
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      id,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // IMPORTANT: Make sure these EXACTLY match your EmailJS account settings
      // Double-check for any typos or extra spaces
      const serviceId = 'service_ode758p';
      const templateId = 'template_gilwpsc'; // Updated to the correct template ID
      const publicKey = 'SrFyjLIV1DL34WKye';

      // Update the debug info
      setDebugInfo({
        serviceId,
        templateId,
        publicKey
      });

      // CRITICAL: These parameter names MUST EXACTLY match what's defined in your EmailJS template
      // Check for case sensitivity and spelling
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        message: formData.message,
        to_name: "Josh",
        reply_to: formData.email
      };
      console.log("Attempting to send email with:", {
        serviceId,
        templateId,
        templateParams,
        publicKey: publicKey.substring(0, 5) + '...' // Only log part of the key for security
      });

      // Try to send email with EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("Email sent successfully:", response);
      toast({
        title: "Message Sent!",
        description: "We'll be in touch with you shortly."
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Detailed error message with additional context
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;

        // Additional debugging for specific error cases
        if (error.message.includes("template") && error.message.includes("not found")) {
          errorMessage += "\n\nPossible issues:\n- The template ID may be incorrect\n- The template may not exist in your EmailJS account\n- Your account may not be active";
        } else if (error.message.includes("service")) {
          errorMessage += "\n\nPossible issues:\n- The service ID may be incorrect\n- The service may not be active in your EmailJS account";
        }
      } else {
        errorMessage = "Failed to send your message. Please try again later.";
      }
      toast({
        title: "Email Sending Failed",
        description: errorMessage,
        variant: "destructive"
      });

      // Show the debug dialog for troubleshooting
      setShowDebugDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black via-amalfi-black to-amalfi-emerald/10 z-0"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-amalfi-teal/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amalfi-emerald/10 rounded-full blur-3xl animate-glow-pulse" style={{
      animationDelay: '1.5s'
    }}></div>
      
      <div className="max-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Connect</span> With Us
          </h2>
          <p className="text-amalfi-white/80 max-w-2xl mx-auto">
            Ready to transform your business with our premium AI solutions? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes up 2/3 of the space on larger screens */}
          <div className="lg:col-span-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-amalfi-white/80">
                    Full Name *
                  </label>
                  <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-amalfi-white/80">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-amalfi-white/80">
                  Company
                </label>
                <Input id="company" placeholder="Your company name" value={formData.company} onChange={handleChange} className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-amalfi-white/80">
                  Message *
                </label>
                <Textarea id="message" placeholder="Tell us about your project needs..." rows={5} value={formData.message} onChange={handleChange} className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white resize-none" required />
              </div>
              
              <div>
                <Button className="btn-gradient text-amalfi-white font-medium px-8 py-6 shadow-glow-md hover:shadow-glow-lg transition-all hover:scale-105 w-full" size="lg" type="submit" disabled={isSubmitting}>
                  <span className="mr-2">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info Box */}
          <div className="lg:col-span-1">
            <div className="glassmorphic rounded-3xl p-8 border border-amalfi-emerald/10 shadow-glow-sm h-full">
              <h3 className="text-2xl font-bold text-gradient mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                {/* Email Contact */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-amalfi-emerald/10 mr-4">
                    <Mail className="text-amalfi-emerald" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amalfi-white mb-1">Email Us</h4>
                    <p className="text-amalfi-white/80">Josh@amalfiai.com</p>
                    <p className="text-amalfi-white/80">admin@amalfiai.com</p>
                  </div>
                </div>
                
                {/* Phone Contact */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-amalfi-emerald/10 mr-4">
                    <Phone className="text-amalfi-emerald" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amalfi-white mb-1">Call Us</h4>
                    <p className="text-amalfi-white/80">+27 81 270 5358</p>
                    <p className="text-amalfi-white/80">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                
                {/* Live Chat */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-amalfi-emerald/10 mr-4">
                    <MessageSquare className="text-amalfi-emerald" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amalfi-white mb-1">Live Chat</h4>
                    <p className="text-amalfi-white/80">Use our  Amalfi Ai Agent to discovery what we can do for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Debug Dialog for Troubleshooting */}
      <Dialog open={showDebugDialog} onOpenChange={setShowDebugDialog}>
        <DialogContent className="bg-amalfi-black text-amalfi-white border-amalfi-emerald/30">
          <DialogHeader>
            <DialogTitle className="text-amalfi-white">EmailJS Debug Information</DialogTitle>
            <DialogDescription className="text-amalfi-teal/80">
              Use this information to troubleshoot EmailJS issues
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="text-amalfi-teal font-semibold">Service ID:</h4>
              <p className="text-amalfi-white/80 font-mono">{debugInfo.serviceId}</p>
            </div>
            <div>
              <h4 className="text-amalfi-teal font-semibold">Template ID:</h4>
              <p className="text-amalfi-white/80 font-mono">{debugInfo.templateId}</p>
            </div>
            <div>
              <h4 className="text-amalfi-teal font-semibold">Public Key:</h4>
              <p className="text-amalfi-white/80 font-mono">{debugInfo.publicKey}</p>
            </div>
            <div>
              <h4 className="text-amalfi-teal font-semibold">Template Parameters:</h4>
              <ul className="list-disc pl-5 text-amalfi-white/80 space-y-1">
                <li>from_name: User's name</li>
                <li>from_email: User's email</li>
                <li>company: User's company</li>
                <li>message: User's message</li>
                <li>to_name: "Josh"</li>
                <li>reply_to: User's email</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amalfi-teal font-semibold">Common Issues:</h4>
              <ul className="list-disc pl-5 text-amalfi-white/80 space-y-1">
                <li>Template ID does not exist in your EmailJS account</li>
                <li>Template variables may not match what your code is sending</li>
                <li>Service ID may be incorrect or the service is not active</li>
                <li>Public key may be incorrect or invalid</li>
                <li>EmailJS account may be inactive or restricted</li>
              </ul>
            </div>
            <div className="pt-2">
              <Button variant="outline" className="border-amalfi-emerald/50 text-amalfi-teal hover:bg-amalfi-emerald/10" onClick={() => setShowDebugDialog(false)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
export default Contact;