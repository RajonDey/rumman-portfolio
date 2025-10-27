import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Calendar } from 'lucide-react';

interface ProjectsProps {
  projects: Array<{
    title: string;
    period: string;
    tools: string[];
    description: string;
  }>;
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Projects"
          subtitle="Research & Analysis"
          align="center"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-heading-4 font-bold text-secondary-900 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-text-secondary mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-body-sm">{project.period}</span>
                </div>
                
                <p className="text-body-md text-text-secondary mb-4">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-secondary-100">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-body-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

