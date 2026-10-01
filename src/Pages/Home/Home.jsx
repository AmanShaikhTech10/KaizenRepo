// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container home-page">
      
      {/* Background Decorative Elements */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="tech-grid-bg"></div>

      <div className="hero-container">
        
        {/* Left Column: High-Impact Copy */}
        <div className="hero-content">
          <div className="status-badge glass-card">
            <span className="pulse-dot"></span>
            System Status: 99.99% Uptime
          </div>
          
          <h1 className="hero-title">
            Architecting the <br />
            <span className="gradient-text">Future of Software.</span>
          </h1>
          
          <p className="hero-subtitle">
            We engineer high-performance, cloud-native solutions. From dynamic React interfaces to robust Spring Boot microservices and AI-driven data systems, we build technology that scales.
          </p>
          
          <div className="hero-actions">
            <Link to="/services" className="btn-primary glass-btn">
              {t('nav.services')}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <Link to="/portfolio" className="btn-secondary glass-btn">
              View Architecture
            </Link>
          </div>
        </div>

        {/* Right Column: Tech-Heavy Glassmorphism Visual */}
        <div className="hero-visual">
          
          {/* Main Floating Terminal Card */}
          <div className="glass-card terminal-card floating-slow">
            <div className="terminal-header">
              <div className="traffic-lights">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">api-gateway-node_01</div>
            </div>
            <div className="terminal-body">
              <pre>
                <code className="code-blue">import</code> {'{'} DataPipeline {'}'} <code className="code-blue">from</code> <code className="code-green">'@kaizen/core'</code>;<br/><br/>
                <code className="code-purple">const</code> system = <code className="code-blue">new</code> DataPipeline({'{\n'}
                {'  '}architecture: <code className="code-green">'Microservices'</code>,<br/>
                {'  '}ml_engine: <code className="code-green">'Deep Learning Hybrid'</code>,<br/>
                {'  '}security: <code className="code-green">'DevSecOps Standard'</code><br/>
                {'});'}<br/><br/>
                system.<code className="code-yellow">initialize</code>().<code className="code-yellow">then</code>(status {'=>'} {'{\n'}
                {'  '}console.<code className="code-yellow">log</code>(<code className="code-green">`Status: ${'{'}status.ready{'}'}`</code>);<br/>
                {'});'}
              </pre>
            </div>
          </div>

          {/* Floating Stats / Tech Badges */}
          <div className="glass-card stat-badge badge-top-right floating-fast">
            <div className="stat-icon">⚡</div>
            <div className="stat-text">
              <strong>12ms</strong>
              <span>Latency</span>
            </div>
          </div>

          <div className="glass-card stat-badge badge-bottom-left floating-medium">
            <div className="stat-icon">🔒</div>
            <div className="stat-text">
              <strong>AES-256</strong>
              <span>Encrypted</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;