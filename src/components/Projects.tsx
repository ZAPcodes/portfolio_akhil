import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Advanced Perception Algorithms for Legged Robots',
    description:
      'Enhanced robotic perception and navigation with elevation mapping, visual odometry, and environmental mapping in diverse terrains.',
    image: "src/components/leggedrobot.jpg",
    tags: ['Robotics', 'ROS2', 'Lidar', 'Visual Odometry'],
  },
  {
    title: 'VitalsGuard',
    description:
      'Wearable device for real-time monitoring and 24-hour prediction of vital signs with GPS tracking and cloud storage.',
    image: 'src/components/digitalWatch.jpg',
    tags: ['Healthcare', 'IoT', 'Prediction', 'Wearable Tech'],
  },
  {
    title: 'Real-time Air Quality Index Forecasting',
    description:
      'ML-powered AQI forecasting across regions using advanced pollutant data integration and optimized training techniques.',
    image: 'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Machine Learning', 'AQI', 'Forecasting', 'Data Analysis'],
  },
  {
    title: 'Visual Odometry and Sensor Fusion with ROS',
    description:
      'Developed a ROS package for integrating camera and IMU data, enhancing localization with feature extraction and Kalman filtering.',
    image: 'src/components/oodometer.png',
    tags: ['ROS', 'Sensor Fusion', 'Computer Vision', 'Localization'],
  },
  {
    title: 'Sign Language Detection using Neural Networks',
    description:
      'Real-time sign language recognition using MediaPipe for landmarks and LSTM neural networks for action classification.',
    image: 'src/components/0_6aEBXcTf3YxIOund-2418144253.png',
    tags: ['Neural Networks', 'MediaPipe', 'LSTM', 'Sign Language'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlighting innovative projects in robotics, AI, and advanced technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between text-gray-900 dark:text-white">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
