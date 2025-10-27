import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  profile: {
    email: string;
    phone: string;
    location: string;
  };
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's Connect"
          align="center"
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
                    <div className="font-semibold text-secondary-900">Email</div>
                    <div className="text-body-sm text-text-secondary">{profile.email}</div>
                  </div>
                </a>
                
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 p-4 hover:bg-surface rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center group-hover:bg-accent-200 transition-colors">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Phone</div>
                    <div className="text-body-sm text-text-secondary">{profile.phone}</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Location</div>
                    <div className="text-body-sm text-text-secondary">{profile.location}</div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-heading-3 font-bold text-secondary-900 mb-6">
                Send a Message
              </h3>
              
              <Card>
                <form className="space-y-4">
                  <div>
                    <label className="block text-body-sm font-medium text-secondary-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-body-sm font-medium text-secondary-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-body-sm font-medium text-secondary-900 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <Button fullWidth gradient size="lg">
                    <Send className="w-5 h-5 mr-2 inline" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
