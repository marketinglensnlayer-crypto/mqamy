import styles from './CTASection.module.css'

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <div className={styles.ctaWrapper}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Invest in Dubai?</h2>
                        <p>Get personalized guidance from our expert advisors. No obligations, just honest advice.</p>
                    </div>
                    <div className={styles.ctaButtons}>
                        <a
                            href="https://wa.me/971562852580?text=Hi!%20I'm%20interested%20in%20investing%20in%20Dubai%20properties."
                            className="btn btn-primary btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                            <span>Start Your Journey</span>
                        </a>
                        <a href="tel:+971562852580" className="btn btn-secondary btn-lg">
                            <i className="fas fa-phone"></i>
                            <span>+971 56 285 2580</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
