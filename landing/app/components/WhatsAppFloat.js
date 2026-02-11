'use client'

import styles from './WhatsAppFloat.module.css'

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/971562852580?text=Hi%20MQAMY!%20I'm%20interested%20in%20Dubai%20properties."
            className={styles.whatsappFloat}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    )
}
