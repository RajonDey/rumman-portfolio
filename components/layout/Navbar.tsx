"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Layers,
  Code,
  MessageCircle,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", icon: User },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: Layers },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: MessageCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => {
              document
                .querySelector("#home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">RA</span>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Rumman Ahmed
              </div>
              <div className="text-xs text-text-secondary">Portfolio</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group
                      ${
                        isActive
                          ? "text-primary-600 bg-primary-50"
                          : "text-text-secondary hover:text-primary-600 hover:bg-primary-50/50"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-secondary-800" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-secondary-200 mt-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors
                        ${
                          isActive
                            ? "text-primary-600 bg-primary-50"
                            : "text-text-secondary hover:text-primary-600 hover:bg-secondary-100"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
