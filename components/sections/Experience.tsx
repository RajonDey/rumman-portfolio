import SectionTitle from '../ui/SectionTitle';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experience: Array<{
    title: string;
    organization: string;
    period: string;
    responsibilities: string[];
  }>;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-200"></div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-surface rounded-xl p-6 shadow-soft card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-heading-4 font-bold text-secondary-900">
                          {job.title}
                        </h3>
                        <p className="text-primary-600 font-semibold mt-1">
                          {job.organization}
                        </p>
                      </div>
                      <span className="text-body-sm text-text-secondary font-medium mt-2 md:mt-0">
                        {job.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-text-secondary">
                          <span className="text-primary-600 mt-1.5">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

