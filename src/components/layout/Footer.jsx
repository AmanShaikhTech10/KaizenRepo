// src/components/layout/Footer.jsx
const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Kaizen Softservices. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;