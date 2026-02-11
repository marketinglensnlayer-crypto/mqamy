import styles from './Footer.module.css'

const socialLinks = [
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/mqamy_uae' },
    { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://tiktok.com/@mqamy_dxb' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@mqamy_dxb' },
    { name: 'Twitter', icon: 'fab fa-x-twitter', url: 'https://x.com/mqamy_uae' },
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61574336622854' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/mqamy/' }
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <span className={styles.logoText}>MQAMY</span>
                        <p>Your Gateway to Dubai&apos;s Luxury Living</p>
                    </div>
                    <div className={styles.footerSocial}>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2026 MQAMY Real Estate L.L.C. All rights reserved.</p>
                    <div className={styles.footerLinks}>
                        <a href="https://mqamy.com/">Privacy Policy</a>
                        <a href="https://mqamy.com/">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
