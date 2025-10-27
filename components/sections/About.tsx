import SectionTitle from '../ui/SectionTitle';

interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me"
          align="center"
          gradient
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-body-lg text-center text-text-secondary leading-relaxed">
            {summary}
          </p>
          
          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-soft card-hover">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-heading-4 font-semibold text-secondary-900 mb-2">Data-Driven</h3>
              <p className="text-body-sm text-text-secondary">
                Expert in analytics and data visualization
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-soft card-hover">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-heading-4 font-semibold text-secondary-900 mb-2">Educator</h3>
              <p className="text-body-sm text-text-secondary">
                Passionate about teaching and mentoring
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-soft card-hover">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-heading-4 font-semibold text-secondary-900 mb-2">Researcher</h3>
              <p className="text-body-sm text-text-secondary">
                Skilled in business research methodology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
