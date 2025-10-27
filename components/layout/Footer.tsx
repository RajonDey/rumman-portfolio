"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  Heart,
} from "lucide-react";

interface FooterProps {
  profile: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
}

export default function Footer({ profile }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // WhatsApp link
  const whatsappNumber = profile.phone.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-primary text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
        {/* Decorative gradient circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="py-16">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Brand & Contact */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">RA</span>
                    </div>
                    <div>
                      <h3 className="text-heading-3 font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-secondary-400">Portfolio</p>
                    </div>
                  </div>
                  <p className="text-body-md text-secondary-300">
                    Business Analyst · Educator · Researcher
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary-800/50 hover:bg-secondary-800 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                      <Mail className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Email
                      </div>
                      <div className="text-xs text-secondary-400">
                        {profile.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary-800/50 hover:bg-secondary-800 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                      <MessageCircle className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        WhatsApp
                      </div>
                      <div className="text-xs text-secondary-400">
                        {profile.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary-800/30">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Location
                      </div>
                      <div className="text-xs text-secondary-400">
                        {profile.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-heading-3 font-bold text-white">Quick Links</h4>
                <nav className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 transition-all group"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className="pt-6 border-t border-secondary-700">
                  <h4 className="text-body-md font-semibold mb-3 text-white">
                    Download CV
                  </h4>
                  <a
                    href="/rumman-cv.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Get PDF CV
                  </a>
                </div>
              </div>

              {/* Social & Connect */}
              <div className="space-y-6">
                <h4 className="text-heading-3 font-bold text-white">Connect With Me</h4>
                <p className="text-body-md text-secondary-300">
                  Let&apos;s connect and discuss opportunities in business
                  analysis, education, or research!
                </p>

                <div className="flex flex-wrap gap-3">
                  {(profile.linkedin || profile.github) && (
                    <>
                      {profile.linkedin && (
                        <motion.a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </motion.a>
                      )}
                      {profile.github && (
                        <motion.a
                          href={profile.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group"
                          aria-label="GitHub"
                        >
                          <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </motion.a>
                      )}
                    </>
                  )}
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-secondary-800 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="border-t border-secondary-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-body-sm text-secondary-400">
                <span>
                  © {currentYear} {profile.name}. Made with
                </span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>using Next.js & Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-4 text-body-sm text-secondary-400">
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
