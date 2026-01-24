'use client'

import Image from 'next/image'
import styles from './AgentSection.module.css'

export default function AgentSection() {
    return (
        <section className={styles.agentSection} id="agent">
            <div className="container">
                <div className={styles.agentWrapper}>
                    <div className={styles.agentImage}>
                        <div className={styles.agentImageFrame}>
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                                alt="Ahmed Wazir - GM at MQAMY Real Estate"
                                width={400}
                                height={500}
                                style={{ objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                            />
                            <div className={styles.agentBadge}>
                                <i className="fas fa-check-circle"></i>
                                <span>Verified Agent</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.agentContent}>
                        <span className="section-tag">Meet Your Advisor</span>
                        <h2 className={styles.agentName}>Ahmed Wazir</h2>
                        <p className={styles.agentTitle}>General Manager, MQAMY Real Estate L.L.C</p>

                        <blockquote className={styles.agentQuote}>
                            &quot;At Mqamy Real Estate L.L.C, the focus is always on people, not just property.
                            Every investor we work with deserves honest advice, clear numbers, and a smooth
                            experience from the first call to handover and beyond.&quot;
                        </blockquote>

                        <div className={styles.agentCredentials}>
                            <div className={styles.credential}>
                                <i className="fas fa-id-card"></i>
                                <span>Real Estate Agent BRN#85446</span>
                            </div>
                            <div className={styles.credential}>
                                <i className="fas fa-language"></i>
                                <span>English, Arabic, Hindi, Urdu</span>
                            </div>
                            <div className={styles.credential}>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Iris Bay, Business Bay, Dubai</span>
                            </div>
                        </div>

                        <div className={styles.agentCta}>
                            <a
                                href="https://wa.me/971562852580?text=Hi%20Ahmed!%20I%20would%20like%20to%20discuss%20investment%20opportunities."
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>Chat with Ahmed</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
