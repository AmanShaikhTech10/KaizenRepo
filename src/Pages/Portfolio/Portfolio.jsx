// src/pages/Portfolio/Portfolio.jsx
import './Portfolio.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Secure Bank Management System',
      category: 'Enterprise Backend',
      techStack: ['React', 'Spring Boot', 'Spring Data JPA', 'MySQL'],
      description: 'A comprehensive financial platform featuring secure account operations, JWT authentication, and high-performance transaction processing.',
    },
    {
      id: 2,
      title: 'AI-Driven Intrusion Detection',
      category: 'Cybersecurity & ML',
      techStack: ['Deep Learning', 'CNN', 'LSTM', 'Autoencoders'],
      description: 'A hybrid network security framework utilizing advanced deep learning architectures to identify and mitigate anomalous network behaviors in real-time.',
    },
    {
      id: 3,
      title: 'Next-Gen E-Learning Dashboard',
      category: 'Frontend Interface',
      techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React'],
      description: 'An interactive single-page application designed for intuitive navigation, progress tracking, and delivering rich multimedia educational content.',
    },
    {
      id: 4,
      title: 'Cloud-Native Library Management',
      category: 'Full-Stack Architecture',
      techStack: ['React', 'Spring Security', 'REST APIs', 'Hibernate'],
      description: 'A highly scalable management system for cataloging thousands of resources, managing user roles, and securely handling digital checkouts.',
    }
  ];

  return (
    <div className="page-container portfolio-page">
      <div className="portfolio-header">
        <h1>{t('nav.portfolio')}</h1>
        <p className="subtitle">
          A selection of our high-performance architectures, dynamic interfaces, and intelligent systems.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;