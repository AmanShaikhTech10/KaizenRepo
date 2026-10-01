// src/pages/About/About.jsx
import './About.css';
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'C, Java, Android, iPhone, .Net, Python', percentage: 90 },
    { name: 'Spring, Hibernate, PHP, & JavaScript', percentage: 75 },
    { name: 'UI Design, Logo Design, WordPress CMS', percentage: 60 }
  ];

  const strategies = [
    'Puts more money in their pockets through data-driven services.',
    'Eliminates work through innovative technology.',
    'Provides complete confidence that they can do it right – by themselves.',
    'Assurance of Quality work.',
    'Help to design business process.',
    'The most important, TRUST and RELIABLE SERVICE.'
  ];

  return (
    <div className="page-container about-page">
      <div className="about-header">
        <span className="badge">Who We Are</span>
        <h1>{t('nav.about')}</h1>
        <p className="subtitle">
          Software technology is changing day by day. In every section of technology, development has become a vital part for any company. At Kaizen Softservices, we work for customer satisfaction, providing top-tier solutions with advanced technology.
        </p>
      </div>

      <div className="about-grid">
        
        {/* Left Column: History & Strategy */}
        <div className="about-main-content">
          <div className="glass-card content-card">
            <h2>Brief History</h2>
            <p>
              Kaizen Softservices is the outcome of a strong belief in software technology inventions. Back in 2008, Android phones were the hot mobility device, and the "Web" was something you cleaned out of a corner. Big brand names were looking to target the mobile market. 
            </p>
            <p>
              We started our journey in the first half of 2015, with the ambition to deliver the best solutions and services to our clients. As the way we live and work evolves, we adapt our strategy to meet and lead these changes. No matter where you find us—whether on your PC, mobile phone, or tablet—we remain committed to creating easier ways for consumers and businesses to tackle life's challenges, giving them more time to live their lives and run their businesses.
            </p>
            <div className="work-environment">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>Work Friendly Environment</span>
            </div>
          </div>

          <div className="glass-card content-card">
            <h2>Our Mission & Strategy</h2>
            <p>Supporting our mission, our strategy is to apply a laser-like focus to help our customers prosper through our ecosystem that:</p>
            <ul className="strategy-list">
              {strategies.map((item, index) => (
                <li key={index}>
                  <div className="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Skills, Testimonials, Twitter */}
        <div className="about-sidebar">
          
          {/* Skills Section */}
          <div className="glass-card sidebar-card">
            <h3>Our Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="glass-card sidebar-card testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              It was great to work with you. The turn around time is very good. You were very helpful to answer our queries. Thank you for your help. Your skill level is very good regarding Android Development.
            </p>
            <div className="testimonial-author">
              <strong>Rahul Kashelani</strong>
              <span>CEO, Avapya</span>
            </div>
          </div>

          {/* Latest Tweets Mockup */}
          <div className="glass-card sidebar-card twitter-card">
            <h3 className="twitter-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              Latest Tweets
            </h3>
            <p className="tweet-text">Exploring the future of scalable architectures and modern web interfaces. Stay tuned for updates from the Kaizen team! #Tech #Development</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;