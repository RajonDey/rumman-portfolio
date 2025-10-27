"use client";

import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Calendar, ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  projects: Array<{
    title: string;
    period: string;
    tools: string[];
    description: string;
    link?: string;
    github?: string;
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
            <Card
              key={index}
              className="h-full flex flex-col group hover:scale-105 transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-heading-4 font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
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

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-secondary-100">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-body-sm font-medium group-hover:bg-purple-200 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.link, "_blank")}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
