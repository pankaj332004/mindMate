import React from 'react';
import { PhoneCall } from 'lucide-react';
import './SOSButton.css';

export default function SOSButton() {
    return (
        <a
            href="tel:9152987821"
            className="sos-button"
            aria-label="Call iCall Mental Health Helpline"
            title="Emergency SOS - Call iCall"
        >
            <div className="sos-pulse"></div>
            <PhoneCall size={24} color="white" />
        </a>
    );
}
