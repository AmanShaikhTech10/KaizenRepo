// src/pages/Pricing/Pricing.jsx
import './Pricing.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Pricing = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const pricingTiers = [
        {
            id: 'starter',
            title: 'Starter Website',
            price: '₹19,999',
            target: 'For Startups & Small Businesses',
            isPopular: false,
            features: [
                'Up to 7 Pages',
                'Premium Responsive Design',
                'Contact Form',
                'SSL Setup',
                'Lead Capture Forms',
                'Image Optimization',
                '1 Month Free Support'
            ]
        },
        {
            id: 'business',
            title: 'Business Website',
            price: '₹39,999',
            target: 'For Growing Companies',
            isPopular: true,
            features: [
                'Up to 20 Pages',
                'Custom UI/UX Design',
                'Admin Panel',
                'Blog Management System',
                'Dynamic Content Management',
                'Product/Service Catalogue',
                'Speed Optimization',
                'Security Hardening',
                'Training Session',
                '3 Months Free Support'
            ]
        },
        {
            id: 'enterprise',
            title: 'Enterprise Solution',
            price: '₹89,999+',
            target: 'For Large Businesses',
            isPopular: false,
            features: [
                'Unlimited Pages',
                'Premium UI/UX Design',
                'Custom Web Application',
                'Advanced Security Setup',
                'Multi-language Website',
                'Performance Optimization',
                'Custom Dashboards',
                'Priority Support',
                '6 Months Free Support'
            ]
        }
    ];

    return (
        <div className="page-container pricing-page">
            <div className="pricing-header">
                <span className="badge">Transparent Pricing</span>
                <h1>Website Development Packages</h1>
                <p className="subtitle">
                    Everything your business needs to build a robust, scalable online presence.
                </p>
            </div>

            <div className="pricing-grid">
                {pricingTiers.map((tier) => (
                    <div key={tier.id} className={`pricing-card ${tier.isPopular ? 'popular-card' : ''}`}>

                        {tier.isPopular && (
                            <div className="popular-glow"></div>
                        )}

                        <div className="card-content">
                            {tier.isPopular && (
                                <span className="popular-badge">Most Popular</span>
                            )}

                            <div className="tier-header">
                                <h3>{tier.title}</h3>
                                <p className="target-audience">{tier.target}</p>
                                <div className="price-container">
                                    <span className="price">{tier.price}</span>
                                    {tier.id === 'enterprise' ? '' : <span className="billing-cycle">/one-time</span>}
                                </div>
                            </div>

                            <ul className="features-list">
                                {tier.features.map((feature, index) => (
                                    <li key={index}>
                                        <div className="check-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => navigate('/contact')}
                                className={`get-started-btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;