import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface WorkExperienceItem {
  title: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: WorkExperienceItem[] = [
  {
    title: "Brilyant IT Solutions",
    company: "Brilyant IT Solutions",
    role: "Software Development Engineer Intern",
    period: "December 2024 – January 2025",
    description: [
      "Developed a Recommendation System for an E-Commerce Website."
    ]
  },
  {
    title: "GirlScript Summer of Code",
    company: "Open Source Contributor",
    role: "Open Source Contributor",
    period: "October 2024 – November 2024",
    description: []
  },
  {
    title: "ARTPARK, IISc Bangalore",
    company: "ARTPARK",
    role: "Robotics Software Development Engineer Intern",
    period: "June 2024 – July 2024",
    description: [
      "Developed algorithms for localization, navigation, and terrain assessment for autonomous Legged robot operations.",
      "Enhanced environmental mapping, obstacle avoidance, and pathfinding in complex terrains."
    ]
  },
  {
    title: "Manipal Institute of Technology",
    company: "Manipal Institute of Technology",
    role: "Undergraduate Research Assistant",
    period: "Jan 2024 – Present",
    description: [
      "Conducting research on Hybrid Machine Learning Models for AQI predictive accuracy improvements."
    ]
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in AI, ML, and Robotics
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <div className="flex items-center text-indigo-600 dark:text-indigo-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300 italic">{exp.role}</span>
                    </div>
                    
                    {exp.description.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
