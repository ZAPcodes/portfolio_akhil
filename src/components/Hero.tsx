import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';
import ProfileImage from './ProfileImage';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">AI/ML Engineer</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Building the Future with Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Specializing in machine learning, deep learning, and AI systems that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ProfileImage
              src="src\components\1000100829.jpg"
              alt="Akhil Varanasi - AI/ML Engineer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}