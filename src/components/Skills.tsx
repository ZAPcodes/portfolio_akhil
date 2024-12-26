import React from 'react';
import { Code, Settings, Database, BarChart, GitBranch, Monitor } from 'lucide-react';

const skillsData = [
  {
    icon: Code,
    title: 'Programming',
    description: 'Proficiency in Python, C, C++, and Java for a variety of applications.',
  },
  {
    icon: Settings,
    title: 'Tools & Technologies',
    description: 'Experience with Docker, TensorFlow, PyTorch, ROS, ROS2, OpenCV, and AWS tools.',
  },
  {
    icon: BarChart,
    title: 'Machine Learning & AI',
    description: 'Expertise in Deep Learning, Computer Vision, LLMs, NLP, LangChain, and Transformers.',
  },
  {
    icon: Database,
    title: 'Data Analysis & Visualization',
    description: 'Skilled in Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.',
  },
  {
    icon: GitBranch,
    title: 'Version Control & Databases',
    description: 'Familiar with Git, GitHub, MySQL, PostgreSQL, MongoDB, Pinecone, and Milvus.',
  },
  {
    icon: Monitor,
    title: 'Operating Systems',
    description: 'Comfortable working with Linux (Ubuntu, Debian) and Windows environments.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across programming, tools, and technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <skill.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
