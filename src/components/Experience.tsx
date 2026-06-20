import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-[#030514] scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {/* Experiência 1 – CLUB GVS */}
          <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-6 shadow-lg hover:shadow-[#7C3AED]/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Freelance Full Stack Developer
                </h3>
                <p className="text-[#A78BFA] font-medium">CLUB GVS</p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap bg-[#030514] px-3 py-1 rounded-full border border-[#7C3AED]/20">
                Sep 2024 – Oct 2024
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Designed and developed a <strong className="text-white">gamified referral and rewards platform</strong> using React (frontend) and Django (backend), delivered end-to-end in <strong className="text-white">1 month</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Implemented a points-based reward system and leaderboard to increase user retention and platform competitiveness.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Created <strong className="text-white">role-based access control (RBAC)</strong> for designers, architects, partner companies, and administrators.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Built advanced filtering and search system and implemented secure authentication with session management.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Managed full product lifecycle: requirements gathering, architecture design, development, testing, and deployment.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-6 shadow-lg hover:shadow-[#7C3AED]/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Software Developer
                </h3>
                <a
                  href="https://www.fpftech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A78BFA] font-medium hover:text-[#7C3AED] hover:underline transition"
                >
                  FPF TECH (Website)
                </a>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap bg-[#030514] px-3 py-1 rounded-full border border-[#7C3AED]/20">
                Jan 2022 – Jul 2024
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Developed and maintained full-stack web applications using <strong className="text-white">React, Angular, TypeScript, Django, C#, PostgreSQL, Docker, Kubernetes</strong>, working autonomously on features and improvements.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Worked on a <strong className="text-white">Customer Data Platform (CDP)</strong> for{' '}
                  <a
                    href="https://www.positivotecnologia.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A78BFA] hover:text-[#7C3AED] hover:underline transition"
                  >
                    Positivo Brasil
                  </a>
                  , collecting user behavior data for marketing analysis and personalized campaigns.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Optimized data architecture, reducing response time by <strong className="text-white">30%</strong> and improving query performance for marketing teams.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Used <strong className="text-white">Elasticsearch and Kibana</strong> for data analysis and visualization, identifying user usage patterns.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Led the refactoring of a critical legacy frontend, improving scalability, performance, and reducing bugs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Worked with <strong className="text-white">AWS, Docker, and Terraform</strong> for infrastructure automation and deployment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Developed the <strong className="text-white">CallHome system</strong> – a monitoring and predictive diagnostic application for devices using C# (Windows/Linux).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;