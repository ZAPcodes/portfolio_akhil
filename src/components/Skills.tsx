// Skills.tsx
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-category">
        <h3>Programming</h3>
        <p>Python, C, C++, Java</p>
      </div>
      <div className="skills-category">
        <h3>Tools & Technologies</h3>
        <p>Docker, TensorFlow, PyTorch, AWS Braket, ROS, ROS2, AWS SageMaker, OpenCV</p>
      </div>
      <div className="skills-category">
        <h3>Machine Learning & AI</h3>
        <p>Deep Learning, Computer Vision, LLM, Data Science, Transformers, NLP, LangChain</p>
      </div>
      <div className="skills-category">
        <h3>Data Analysis & Visualization</h3>
        <p>Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn</p>
      </div>
      <div className="skills-category">
        <h3>Databases</h3>
        <p>MySQL, PostgreSQL, MongoDB, Pinecone, Milvus</p>
      </div>
      <div className="skills-category">
        <h3>Version Control</h3>
        <p>Git, GitHub</p>
      </div>
      <div className="skills-category">
        <h3>Operating Systems</h3>
        <p>Linux (Ubuntu, Debian), Windows</p>
      </div>
    </div>
  );
};

export default Skills;
