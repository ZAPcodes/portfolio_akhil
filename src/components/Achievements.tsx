import React from 'react';
import { Award, Calendar } from 'lucide-react';

interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

const achievements: AchievementItem[] = [
  {
    title: "Harvard HPAIR Asia Conference 2025 Delegate",
    organization: "Harvard Project for Asian and International Relations (HPAIR)",
    period: "August 2025",
    details: [
      "Selected from 50,000+ global applicants (2% acceptance rate)",
      "Engaged in discussions on AI innovation with Nobel laureates and industry leaders"
    ]
  },
  {
    title: "ARTPARK-ASSETS Fellowship 2025",
    organization: "ARTPARK @ IISc Bangalore",
    period: "June 2025",
    details: [
      "Awarded prestigious fellowship among 2,000+ applicants",
      "Recognized for contributions to robotics and AI systems with real-world impact"
    ]
  },
  {
    title: "Winner - Softlaunch Innovation Challenge 2025",
    organization: "Softlaunch India",
    period: "May 2025",
    details: [
      "Built an AI-powered voice-to-dashboard analytics platform",
      "Eliminated need for SQL/BI tools using GPT-based natural language interface"
    ]
  },
  {
    title: "Top 8 - CodeBot Hackathon 2025",
    organization: "ARTPARK @ IISc & TIH @ IIT Bombay",
    period: "March 2025",
    details: [
      "Finalist for KisaanVaani – a multilingual agentic AI assistant for farmers",
      "Delivered real-time agricultural support via voice in 12+ Indian languages"
    ]
  },
  {
    title: "Top 10 - National Edge AI Challenge 2024",
    organization: "Government of India",
    period: "November 2024",
    details: [
      "Built wearable health monitor with on-device ML and real-time alerting",
      "Enabled medical insights without cloud dependency"
    ]
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Achievements</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlights from my academic and professional journey in AI and technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-gray-700"></div>

          {/* Achievement items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 dark:bg-yellow-400 rounded-full border-4 border-white dark:border-gray-800"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{achievement.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300 italic">
                        {achievement.organization}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {achievement.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
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
