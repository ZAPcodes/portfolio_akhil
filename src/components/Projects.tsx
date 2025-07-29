import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Advanced Perception Algorithms for Legged Robots',
    description:
      'Enhanced robotic perception and autonomous navigation for legged robots through advanced elevation mapping in ROS2, visual odometry, and environmental mapping, enabling reliable operation across diverse terrains—from structured indoor spaces to rugged outdoor environments. This work, conducted under ARTPARK (Jun–Jul 2024), focused on developing robust perception algorithms to address key challenges in obstacle avoidance, terrain understanding, and real-time interaction.',
    image: "/leggedrobot.jpg",
    tags: ['Robotics', 'ROS2', 'Lidar', 'Visual Odometry'],
  },
  {
  title: 'KisaanVaani – Agentic AI for Agriculture',
  description:
    'Built a multilingual, voice-first AI assistant under ARTPARK @ IISc Bangalore to deliver real-time, region-specific agricultural guidance. The system supports 12+ Indian languages using ASR/TTS pipelines with 95% STT accuracy. Leveraged a hybrid RAG system combining offline manuals and real-time APIs to reduce query response time from 45s to 3s. Integrated a dynamic context memory engine to personalize advice based on crop history, past queries, and local conditions. Achieved 92% user satisfaction across 1,000+ farmer interactions.',
  image: '/kisanvaani.png',
  tags: ['Agentic AI', 'Voice Assistant', 'RAG', 'Multilingual AI', 'Agriculture'],
  },
  {
    title: 'Project Jarvis – Agentic AI Assistant for Voice-Driven System Intelligence',
    description:
      'Developed Project Jarvis, an Agentic AI Assistant — a modular, voice-powered system that thinks, plans, and acts using natural language. Inspired by the principles of Agentic AI, Jarvis is capable of voice interaction, autonomous decision-making, tool use, memory retention, and multi-step reasoning.',
    image: "/Jarvis.jpeg",
    tags: ['Agentic AI', 'RAG', 'Large Language Model', 'Voice','Multi-Model','Memory Optimization'],
  },
  {
  title: 'MedAI – Clinical Voice Assistant',
  description:
    'Developed at Brilyant IT Solutions, MedAI is an AI-powered clinical assistant that automates SOAP note generation from doctor-patient conversations. Features include real-time transcription with 93% accuracy, medical term extraction, differential diagnosis suggestions, and FHIR-compliant EMR integration. Delivered through a user-friendly dashboard, MedAI reduced documentation time by 91.7% and supports structured summaries, transcripts, and insights.',
  image: '/medai.png',
  tags: ['Clinical AI', 'Voice Analysis', 'Whisper', 'LLM', 'Medical NLP'],
  },
  {
    title: 'Voice to Visualization – A Multilingual Multimodal AI Tool',
    description:
      'Designed and deployed a multilingual multimodal AI Tool that transforms voice commands into dynamic, data-driven visualizations. The Tool empowers users — including non-technical individuals — to query real-time data through natural speech and receive instant, visual insights in their native language.',
    image: "/V2V.png",
    tags: ['NLP', 'RAG', 'Large Language Model', 'Voice','Speech Recognition (ASR)','Multimodal Learning'],
  },
  {
    title: "MediGenie: Medical ChatBot AI",
    description:
      "Developed an AI-driven chatbot designed to assist with medical queries, integrating natural language processing and biomedical tools. Implemented LangChain framework with tools and agents to streamline query understanding and improve response accuracy. Designed the chatbot to identify symptoms, recommend treatments, and process natural language queries for enhanced user interaction. ",
    image: "/medigenie.jpeg",
    tags: ["AI", "NLP", "LangChain", "Biomedical Tools","LLM FineTuning","API"]
  },
  {
    title: "Smart Recommendation System",
    description:
      "Developed a personalized recommendation system to enhance user experience, providing tailored suggestions for both employees and customers based on their preferences and interactions. Designed two distinct user portals: one for recommending items based on specific conditions, and another for suggesting products based on user behavior and history.",
    image: "/rec.jpeg",
    tags: ["AI", "Recommendation Systems", "User Behavior Analysis", "Machine Learning"]
  },
  {
    title: 'VitalsGuard',
    description:
      'Developed VitalsGuard, an innovative wearable health-monitoring device that delivers real-time insights and 24-hour predictive analysis of vital signs, including heart rate, SpO₂, temperature, and blood pressure. Designed for early detection and preventive care, it integrates GPS tracking for emergency response and secure cloud storage for continuous data updates every 30 seconds. With its cost-effective, scalable design, VitalsGuard aims to transform remote healthcare and make predictive health monitoring accessible to all.',
    image: '/digitalWatch.jpg',
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
    image: '/oodometer.png',
    tags: ['ROS', 'Sensor Fusion', 'Computer Vision', 'Localization'],
  },
  {
    title: 'Sign Language Detection using Neural Networks',
    description:
      'Real-time sign language recognition using MediaPipe for landmarks and LSTM neural networks for action classification.',
    image: '/0_6aEBXcTf3YxIOund-2418144253.png',
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
