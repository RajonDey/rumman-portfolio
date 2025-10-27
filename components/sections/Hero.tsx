'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  profile: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    download_cv: string;
  };
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-mesh-gradient">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-display-2 font-bold text-secondary-900 mb-4">
                I&apos;m{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-heading-3 text-primary-600 font-semibold">
                {profile.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-lg text-text-secondary leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-body-md text-text-secondary hover:text-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 text-body-md text-text-secondary hover:text-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{profile.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-body-md text-text-secondary">
                <MapPin className="w-5 h-5" />
                <span>{profile.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                gradient
                onClick={() => window.open(profile.download_cv, '_blank')}
              >
                <Download className="w-5 h-5 mr-2 inline" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Gradient Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-vibrant rounded-2xl p-8 text-white shadow-2xl">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-heading-3 mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold">5+</div>
                        <div className="text-sm">Years Experience</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold">20+</div>
                        <div className="text-sm">Projects</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold">3</div>
                        <div className="text-sm">Roles</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold">100+</div>
                        <div className="text-sm">Students Taught</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">
                    Business Analyst • Educator • Researcher
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-40 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

