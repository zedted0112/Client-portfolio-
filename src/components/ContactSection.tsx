import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ContactData } from '../types';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';

interface ContactSectionProps {
  contact: ContactData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Discussion',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto link or display confirmation
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0c0f] relative overflow-hidden border-t border-[#1e232e]">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a880]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="DIRECT ENGAGEMENT"
          title={contact.sectionHeading}
          subtitle={contact.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Office Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            {/* Direct Cards */}
            <div className="bg-[#14171f] p-6 rounded-sm border border-[#232835] hover:border-[#c5a880]/40 transition-colors shadow-xl space-y-6">
              
              <h3 className="text-lg font-serif-title font-semibold text-[#f3f2ee] pb-3 border-b border-[#202532]">
                Contact Information
              </h3>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-4 group p-3 rounded-xs hover:bg-[#1a1e28] transition-colors"
              >
                <div className="p-3 bg-[#1c212c] rounded-sm text-[#c5a880] border border-[#c5a880]/30 group-hover:border-[#c5a880]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c92a0]">
                    Email Address
                  </span>
                  <p className="text-sm font-sans-body font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors">
                    {contact.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-4 group p-3 rounded-xs hover:bg-[#1a1e28] transition-colors"
              >
                <div className="p-3 bg-[#1c212c] rounded-sm text-[#c5a880] border border-[#c5a880]/30 group-hover:border-[#c5a880]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c92a0]">
                    Direct Phone
                  </span>
                  <p className="text-sm font-sans-body font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group p-3 rounded-xs hover:bg-[#1a1e28] transition-colors"
              >
                <div className="p-3 bg-[#1c212c] rounded-sm text-[#0077b5] border border-[#0077b5]/30 group-hover:border-[#0077b5]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c92a0]">
                      LinkedIn Executive Profile
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <p className="text-sm font-sans-body font-semibold text-[#f3f2ee] group-hover:text-[#c5a880] transition-colors">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>

            </div>

            {/* Office Address Card */}
            <div className="bg-[#14171f] p-6 rounded-sm border border-[#232835] hover:border-[#c5a880]/40 transition-colors shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#c5a880] pb-2 border-b border-[#202532]">
                <MapPin className="w-5 h-5" />
                <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-[#f3f2ee]">
                  Corporate Office Address
                </h3>
              </div>
              <p className="text-sm text-[#a2a8b8] font-sans-body leading-relaxed">
                {contact.officeAddress}
              </p>

              {contact.googleMapsUrl && (
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c5a880] hover:underline pt-2"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </motion.div>

          {/* Right Column: Interactive Executive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#14171f] p-8 sm:p-10 rounded-sm border border-[#232835] shadow-2xl relative"
          >
            <h3 className="text-2xl font-serif-title font-semibold text-[#f3f2ee] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#8c92a0] mb-8 font-sans-body">
              Fill out the form below to connect directly regarding development opportunities, joint ventures, or consulting.
            </p>

            {submitted ? (
              <div className="p-8 rounded-sm bg-[#1a231c] border border-emerald-500/30 text-emerald-300 flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <h4 className="text-lg font-serif-title font-semibold">
                  Thank You for Reaching Out
                </h4>
                <p className="text-xs text-emerald-200/80 max-w-md">
                  Your message has been initiated. If your mail client did not automatically open, feel free to write directly to <span className="font-semibold text-white">{contact.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs underline text-emerald-400 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#a2a8b8] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-4 py-3 bg-[#0d0f12] border border-[#272d3c] rounded-xs text-sm text-[#f3f2ee] focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#a2a8b8] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anand@company.com"
                      className="w-full px-4 py-3 bg-[#0d0f12] border border-[#272d3c] rounded-xs text-sm text-[#f3f2ee] focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#a2a8b8] block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Real Estate Development / Strategic Partnership"
                    className="w-full px-4 py-3 bg-[#0d0f12] border border-[#272d3c] rounded-xs text-sm text-[#f3f2ee] focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#a2a8b8] block">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share brief details about your inquiry or proposal..."
                    className="w-full px-4 py-3 bg-[#0d0f12] border border-[#272d3c] rounded-xs text-sm text-[#f3f2ee] focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" showIcon>
                  Get In Touch
                </Button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

