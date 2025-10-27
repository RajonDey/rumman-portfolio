import SectionTitle from '../ui/SectionTitle';
import SkillBadge from '../ui/SkillBadge';

interface SkillsProps {
  skills: {
    technical: string[];
    business: string[];
    soft: string[];
  };
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="What I bring to the table"
          align="center"
          gradient
        />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-heading-4 font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <span className="text-purple-600">💻</span>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <SkillBadge key={index} name={skill} variant="tech" />
              ))}
            </div>
          </div>
          
          {/* Business Skills */}
          <div>
            <h3 className="text-heading-4 font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <span className="text-accent-600">📊</span>
              Business Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.business.map((skill, index) => (
                <SkillBadge key={index} name={skill} variant="business" />
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-heading-4 font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <span className="text-orange-600">🤝</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <SkillBadge key={index} name={skill} variant="soft" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

