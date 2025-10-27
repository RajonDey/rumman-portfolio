import SectionTitle from '../ui/SectionTitle';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  education: Array<{
    degree: string;
    institution: string;
    cgpa: string;
    year: string;
    highlights: string[];
  }>;
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionTitle
          title="Education"
          subtitle="Academic credentials"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-heading-4 font-bold text-secondary-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-body-sm text-text-secondary mb-3">
                    {edu.year} • GPA: {edu.cgpa}
                  </p>
                  
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-body-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

