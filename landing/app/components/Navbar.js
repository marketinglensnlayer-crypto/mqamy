'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoText}>MQAMY</span>
                </a>
                <div className={styles.navCta}>
                    <a
                        href="tel:+971562852580"
                        className="btn btn-primary"
                    >
                        <i className="fas fa-phone"></i>
                        <span>+971 56 285 2580</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
