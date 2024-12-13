import React from 'react';
import { Brain, Code, Database, LineChart, Network, Server } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Expertise in supervised and unsupervised learning, reinforcement learning, and statistical modeling.',
  },
  {
    icon: Network,
    title: 'Deep Learning',
    description: 'Building and optimizing neural networks for computer vision and natural language processing.',
  },
  {
    icon: Database,
    title: 'Big Data',
    description: 'Processing and analyzing large-scale datasets using distributed computing frameworks.',
  },
  {
    icon: Code,
    title: 'MLOps',
    description: 'Implementing CI/CD pipelines for ML models and maintaining production ML systems.',
  },
  {
    icon: LineChart,
    title: 'Data Science',
    description: 'Statistical analysis, data visualization, and predictive modeling.',
  },
  {
    icon: Server,
    title: 'Robotics',
    description: 'Building intelligent robotic systems using machine learning for perception, decision-making, and automation.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in cutting-edge AI/ML technologies and frameworks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
            >
              <area.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}