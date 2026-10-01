// src/pages/Services/Services.jsx
import './Services.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const serviceData = [
    {
      id: 1,
      title: 'Enterprise Backend Systems',
      description: 'Scalable REST APIs, microservices, and high-performance database architectures engineered for robust corporate environments.',
      icon: '⚙️'
    },
    {
      id: 2,
      title: 'Modern Web Interfaces',
      description: 'Fast, responsive single-page applications prioritizing seamless user experiences and modern component-driven design.',
      icon: '🖥️'
    },
    {
      id: 3,
      title: 'Cloud & DevSecOps',
      description: 'Secure, cloud-native deployments with automated CI/CD pipelines, integrating rigorous digital security protocols.',
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Intelligent Data Solutions',
      description: 'Leveraging algorithmic processing and deep learning models to extract actionable business intelligence from raw data.',
      icon: '📊'
    }
  ];

  return (
    <div className="page-container services-page">
      <div className="services-header">
        <h1>{t('nav.services')}</h1>
        <p className="subtitle">
          Delivering comprehensive technology stacks designed for continuous improvement and scale.
        </p>
      </div>

      <div className="services-grid">
        {serviceData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more-btn">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;