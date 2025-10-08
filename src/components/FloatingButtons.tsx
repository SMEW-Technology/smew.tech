import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingButtons() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const switchLanguage = () => {
        setLanguage(language === 'en' ? 'vi' : 'en');
    };

    const handleEmailClick = () => {
        window.location.href = '/contact';
    };

    return (
        <>
            <style jsx>{`
                .floating-container {
                    position: fixed !important;
                    bottom: 30px !important;
                    right: 30px !important;
                    z-index: 9999 !important;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }

                .floating-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    text-decoration: none;
                    border: none;
                    font-size: 24px;
                    outline: none;
                }

                .floating-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
                }

                .main-btn {
                    background: linear-gradient(135deg, #f37335 0%, #ff4757 100%);
                    color: white;
                    font-size: 28px;
                    width: 70px;
                    height: 70px;
                }

                .whatsapp-btn {
                    background: #25D366;
                    color: white;
                }

                .email-btn {
                    background: #ea4335;
                    color: white;
                }

                .language-btn {
                    background: #4285f4;
                    color: white;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .action-btn {
                    opacity: 0;
                    transform: translateY(20px);
                    pointer-events: none;
                    transition: all 0.3s ease;
                    visibility: hidden;
                }

                .action-btn.show {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: auto;
                    visibility: visible;
                }

                .main-btn.active {
                    transform: rotate(45deg);
                }

                @media (max-width: 768px) {
                    .floating-container {
                        bottom: 20px !important;
                        right: 20px !important;
                    }

                    .floating-btn {
                        width: 50px;
                        height: 50px;
                        font-size: 20px;
                    }

                    .main-btn {
                        width: 60px;
                        height: 60px;
                        font-size: 24px;
                    }
                }
            `}</style>

            <div className="floating-container">
                {/* Language Switcher Button */}
                <button
                    onClick={switchLanguage}
                    className={`floating-btn language-btn action-btn ${isOpen ? 'show' : ''}`}
                    title="Switch Language"
                >
                    {language === 'en' ? 'VI' : 'EN'}
                </button>

                {/* Email Button */}
                <button
                    onClick={handleEmailClick}
                    className={`floating-btn email-btn action-btn ${isOpen ? 'show' : ''}`}
                    title="Email"
                >
                    <i className="fa-solid fa-envelope"></i>
                </button>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/84963190925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`floating-btn whatsapp-btn action-btn ${isOpen ? 'show' : ''}`}
                    title="WhatsApp"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                </a>

                {/* Main Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className={`floating-btn main-btn ${isOpen ? 'active' : ''}`}
                    title="Menu"
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </>
    );
}
