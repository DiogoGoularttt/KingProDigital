"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoWhatsApp from "../img/whatsapp_button.png";

export default function WhatsappButton() {
    const [showButton, setShowButton] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 && !showButton) {
                setShowButton(true);
                setFadeIn(true);
            } else if (currentScrollY <= 100 && showButton) {
                setFadeIn(false);
                setTimeout(() => setShowButton(false), 300);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showButton]);

    return (
        <div>
            {showButton && (
                <a 
                    href="https://wa.me/+555193781978"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image 
                        src={LogoWhatsApp} 
                        alt="WhatsApp" 
                        width={40} 
                        height={40}
                        priority
                    />
                </a>
            )}
        </div>
    );
}
