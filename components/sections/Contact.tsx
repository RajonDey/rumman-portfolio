"use client";

import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

interface ContactProps {
  profile: {
    email: string;
    phone: string;
    location: string;
  };
}

export default function Contact({ profile }: ContactProps) {
  // WhatsApp API link - replace international format with WhatsApp format
  const whatsappNumber = profile.phone.replace(/\D/g, ""); // Remove non-digits
  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to connect with you regarding opportunities."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's Connect"
          align="center"
          gradient
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-heading-3 font-bold text-secondary-900 mb-6">
                Contact Information
              </h3>

              <Card className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 hover:bg-surface rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      Email
                    </div>
                    <div className="text-body-sm text-text-secondary">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-surface rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center group-hover:bg-accent-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      WhatsApp
                    </div>
                    <div className="text-body-sm text-text-secondary">
                      {profile.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 p-4 hover:bg-surface rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      Phone Call
                    </div>
                    <div className="text-body-sm text-text-secondary">
                      {profile.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      Location
                    </div>
                    <div className="text-body-sm text-text-secondary">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <h3 className="text-heading-3 font-bold text-secondary-900 mb-6">
                Send a Message
              </h3>

              <Card className="gradient p-8 text-center">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-heading-3 font-bold text-secondary-900 mb-3">
                      Connect on WhatsApp
                    </h4>
                    <p className="text-body-md text-text-secondary">
                      Prefer instant messaging? Send me a message on WhatsApp
                      and I&apos;ll get back to you as soon as possible!
                    </p>
                  </div>

                  <Button
                    size="lg"
                    gradient
                    fullWidth
                    onClick={() => window.open(whatsappLink, "_blank")}
                    className="group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
                    Message on WhatsApp
                  </Button>

                  <p className="text-body-sm text-text-secondary">
                    Or click the WhatsApp icon in the contact information
                    section
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
