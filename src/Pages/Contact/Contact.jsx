// src/pages/Contact/Contact.jsx
import './Contact.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const locations = [
    {
      id: 'india',
      country: 'India, Pune',
      flag: '🇮🇳',
      company: 'Kaizen Softservices',
      address: '4th floor, Pinnacle pride, Kaizen Softservices, Tilak Rd, opp. Cosmos Bank, Ramashram Society, Sadashiv Peth, Pune - 411030, India',
      phone: ['+91-9604302826', '+91-9096755015'],
      email: 'info@kaizensoftservices.com',
      skype: 'amol.jangam',
      mapUrl: 'https://maps.google.com/maps?q=Kaizen%20Softservices,%20Pinnacle%20pride,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'uk',
      country: 'United Kingdom, London',
      flag: '🇬🇧',
      company: 'Kaizen SoftServices UK',
      address: '25a, East Street, Bromley, BR1 1QE, United Kingdom',
      phone: [],
      email: 'info@kaizensoftservices.com',
      skype: 'amol.jangam',
      mapUrl: 'https://maps.google.com/maps?q=25a,%20East%20Street,%20Bromley,%20BR1%201QE&t=&z=14&ie=UTF8&iwloc=&output=embed'
    }
  ];

  return (
    <div className="page-container contact-page">
      <div className="contact-header">
        <span className="badge">Get in Touch</span>
        <h1>{t('nav.contact')}</h1>
        <p className="subtitle">
          Ready to transform your digital presence? Reach out to our global offices and let's build something exceptional together.
        </p>
      </div>

      <div className="locations-wrapper">
        {locations.map((loc) => (
          <div key={loc.id} className="location-premium-card">
            
            {/* Left Side: Contact Information */}
            <div className="location-info">
              <div className="info-header">
                <h2>{loc.country}</h2>
                <span className="flag-icon">{loc.flag}</span>
              </div>
              <h3 className="company-name">{loc.company}</h3>

              <div className="contact-methods">
                
                {/* Address */}
                <div className="method-item">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Address</span>
                    <p>{loc.address}</p>
                  </div>
                </div>

                {/* Phone */}
                {loc.phone.length > 0 && (
                  <div className="method-item">
                    <div className="icon-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="method-content">
                      <span className="method-label">Phone</span>
                      {loc.phone.map((num, i) => <p key={i}>{num}</p>)}
                    </div>
                  </div>
                )}

                {/* Digital Contact */}
                <div className="method-item">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Digital</span>
                    <p><a href={`mailto:${loc.email}`}>{loc.email}</a></p>
                    <p>Skype: {loc.skype}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Map */}
            <div className="location-map">
              <iframe
                title={`${loc.country} Office Map`}
                src={loc.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;