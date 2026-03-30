import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle2, Loader2, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Website: ${formData.website}\n\n${formData.message}`
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      setTimeout(() => {
        setFormData({ name: '', email: '', website: '', message: '' });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-[#100d28] overflow-hidden flex items-center justify-center font-sans">
      {/* Deep Space Background / Ambient Lights */}
      <div className="absolute inset-0 bg-[#0e0b21] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top & Bottom Edge Highlights (Simulating the image's lighting) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-[1px]" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-[2px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h3 className="text-white/80 text-center lg:text-left text-lg mb-4 font-medium tracking-wide">Contact Info Section</h3>
            
            <div className="relative group">
              {/* Glass Card Container */}
              <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.15] rounded-[2rem] p-10 2xl:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 hover:bg-white/[0.05]">
                {/* Edge Lighting Highlight (Top/Left) */}
                <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="absolute left-0 top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-md">
                  We're here to discuss your project and bring your ideas for life with premium design & development.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
                    <span className="text-blue-300/90 hover:text-blue-200 transition-colors cursor-pointer text-lg font-medium">hello@pixeldrift.io</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-white/50" strokeWidth={1.5} />
                    <span className="text-white/70 text-lg">912 Nova Street, Sector 14, Berlin</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-white/50" strokeWidth={1.5} />
                    <span className="text-white/70 text-lg">+49 152 998 8411</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-white/80 text-center lg:text-left text-lg mb-4 font-medium tracking-wide">Contact Form</h3>
            
            <div className="relative group">
              {/* Glass Card Container */}
              <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.15] rounded-[2rem] p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 hover:bg-white/[0.04]">
                {/* Edge Lighting Highlight (Top/Right) */}
                <div className="absolute top-0 right-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="absolute right-0 top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center h-[350px]"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">Message Sent</h3>
                    <p className="text-white/70 text-lg">We'll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name*"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-white/[0.06] border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all focus:bg-white/[0.08]"
                      />
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address*"
                        required
                        disabled={isSubmitting}
                        className="w-full bg-white/[0.06] border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all focus:bg-white/[0.08] pr-12"
                      />
                      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Your Website (Optional)"
                        disabled={isSubmitting}
                        className="w-full bg-white/[0.06] border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all focus:bg-white/[0.08]"
                      />
                    </div>

                    <div className="relative mb-2">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        required
                        disabled={isSubmitting}
                        rows={3}
                        className="w-full bg-white/[0.06] border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all focus:bg-white/[0.08] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full md:w-auto self-start mt-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {/* Vibrant Button Gradient */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 z-0" />
                      {/* Button Outer Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity z-[-1]" />
                      
                      <div className="relative z-10 flex items-center justify-center gap-2 text-lg">
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                        ) : (
                          "Send Message"
                        )}
                      </div>
                    </button>
                    
                  </form>
                )}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
