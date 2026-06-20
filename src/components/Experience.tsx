import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-[#030514] scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Experience
        </h2>

        <div className="space-y-8 mb-12">
          <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-6 shadow-lg hover:shadow-[#7C3AED]/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Freelance Full Stack Developer
                </h3>
                <a
                  href="https://clubgvs.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A78BFA] font-medium hover:text-[#7C3AED] hover:underline transition"
                >
                  CLUB GVS
                </a>
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
                <p className="text-[#A78BFA] font-medium">FPF TECH</p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap bg-[#030514] px-3 py-1 rounded-full border border-[#7C3AED]/20">
                Jan 2022 – Jul 2024
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Developed and maintained full-stack web applications using{' '}
                  <strong className="text-white">React, Angular, TypeScript, Django, C#, PostgreSQL, Docker, Kubernetes</strong>, working autonomously on features and improvements.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7C3AED] mt-1">▸</span>
                <span>
                  Worked on a <strong className="text-white">Customer Data Platform (CDP)</strong> for{' '}
                  <a
                    href="https://www.positivo.com.br/"
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

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Education</h3>
          <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h4 className="text-xl font-bold text-white">
                  Information Systems Bachelor
                </h4>
                <p className="text-[#A78BFA] font-medium">University</p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap bg-[#030514] px-3 py-1 rounded-full border border-[#7C3AED]/20">
                2012 – 2016
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 font-medium mb-2">Core Modules:</p>
              <div className="flex flex-wrap gap-2">
                {['Database', 'Software Engineering', 'Web Development', 'Data Structures'].map((module) => (
                  <span
                    key={module}
                    className="bg-[#7C3AED]/20 text-[#A78BFA] px-3 py-1 rounded-full text-sm border border-[#7C3AED]/30"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-6">Certifications & Training</h3>
          <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-6 shadow-lg">
            <div className="flex flex-wrap gap-3">
              {[
                'Angular 19 - Complete Course (Udemy, 2026)',
                'Claude - Domine Cowork, Claude Code, Skills e Plugins (Udemy, 2025)',
                'AWS Cloud Technical Essentials (Udemy, 2025)',
                'AWS Cloud Essentials (Coursera, 2025)',
                'Machine Learning e Data Science com Python (Udemy, 2024)',
                'React.js Ninja Course (Udemy, 2023)',
                'Complete Guide to Elasticsearch (Udemy, 2022)',
                'Design Patterns with Python (Udemy, 2021)',
                'Git and GitHub Essentials (Udemy, 2021)',
                'Database and SQL Language with PostgreSQL (Udemy, 2021)',
              ].map((course) => (
                <span
                  key={course}
                  className="bg-[#030514] border border-[#7C3AED]/30 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#7C3AED]/10 transition"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;