// src/pages/Career/Career.jsx
import './Career.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Career = () => {
  const { t } = useLanguage();

  const openPositions = [
    {
      id: 1,
      title: 'Full-Stack Java Developer',
      department: 'Engineering',
      location: 'Pune, India (Hybrid)',
      type: 'Full-time',
      experience: '2+ Years',
      description: 'Looking for a specialist in Java 8/21, Spring Boot, Microservices, and MySQL to engineer scalable enterprise backend systems.',
      tags: ['Spring Boot', 'Microservices', 'MySQL', 'REST APIs']
    },
    {
      id: 2,
      title: 'React Frontend Engineer',
      department: 'UI/UX & Frontend',
      location: 'Pune, India (Remote/Hybrid)',
      type: 'Full-time',
      experience: '1.5+ Years',
      description: 'Seeking a frontend developer proficient in React, modern CSS3, responsive single-page applications, and clean component architectures.',
      tags: ['React', 'JavaScript (ES6+)', 'CSS3', 'Vite']
    },
    {
      id: 3,
      title: 'AI & Machine Learning Intern',
      department: 'R&D / Deep Learning',
      location: 'Pune, India',
      type: 'Internship',
      experience: 'Fresher / Students',
      description: 'Explore hybrid deep learning models, intrusion detection systems, and advanced neural architectures alongside our core engineering team.',
      tags: ['Python', 'Deep Learning', 'CNN / LSTM', 'Data Analysis']
    }
  ];

  const perks = [
    { icon: '🚀', title: 'Cutting-Edge Tech', desc: 'Work with Java, Spring Boot, React, and modern cloud stacks.' },
    { icon: '💡', title: 'Continuous Growth', desc: 'Inspired by Kaizen: daily learning, mentorship, and career progression.' },
    { icon: '🛡️', title: 'Work-Life Balance', desc: 'Flexible hybrid arrangements and a genuinely friendly team environment.' },
    { icon: '📈', title: 'High-Impact Projects', desc: 'Build enterprise-grade platforms used by real corporate clients globally.' }
  ];

  return (
    <div className="page-container career-page">
      <div className="career-header">
        <span className="badge">Join Our Team</span>
        <h1>Shape the Future With Us</h1>
        <p className="subtitle">
          We are always looking for passionate engineers, designers, and innovators who believe in continuous improvement and high-performance software.
        </p>
      </div>

      {/* Perks Section */}
      <div className="perks-grid">
        {perks.map((perk, index) => (
          <div key={index} className="glass-card perk-card">
            <span className="perk-icon">{perk.icon}</span>
            <h3>{perk.title}</h3>
            <p>{perk.desc}</p>
          </div>
        ))}
      </div>

      {/* Open Positions Section */}
      <div className="positions-section">
        <h2 className="section-title">Open Positions</h2>
        
        <div className="positions-list">
          {openPositions.map((job) => (
            <div key={job.id} className="glass-card position-card">
              <div className="position-main">
                <div className="position-meta-top">
                  <span className="department-tag">{job.department}</span>
                  <span className="job-type">{job.type}</span>
                </div>
                <h3>{job.title}</h3>
                <p className="job-desc">{job.description}</p>
                
                <div className="job-tags">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="position-action">
                <div className="job-location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {job.location}
                </div>
                <div className="job-experience">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {job.experience}
                </div>
                <a href="mailto:info@kaizensoftservices.com?subject=Application for [Job Title]" className="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;