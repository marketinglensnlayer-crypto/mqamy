'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
    const videoRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        interest: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, phone, interest, message } = formData

        if (!name || !phone || !interest) {
            alert('Please fill in all required fields.')
            return
        }

        const interestLabels = {
            'buy': 'Buying Property',
            'invest': 'Investment Opportunities',
            'rent': 'Renting Property',
            'other': 'Other Inquiry'
        }

        let whatsappMessage = `Hi MQAMY! I'm ${name}.%0A%0A`
        whatsappMessage += `I'm interested in: ${interestLabels[interest] || interest}%0A`
        whatsappMessage += `My phone: ${phone}%0A`

        if (message) {
            whatsappMessage += `%0AMessage: ${message}`
        }

        window.open(`https://wa.me/971562852580?text=${whatsappMessage}`, '_blank')

        setFormData({ name: '', phone: '', interest: '', message: '' })
    }

    useEffect(() => {
        // Counter animation
        const animateCounters = () => {
            const counters = document.querySelectorAll(`.${styles.statNumber}`)

            counters.forEach(counter => {
                const target = counter.getAttribute('data-target')
                const numericValue = parseInt(target.replace(/\D/g, ''))
                const hasPlus = target.includes('+')
                const duration = 2000
                const startTime = performance.now()

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime
                    const progress = Math.min(elapsed / duration, 1)
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                    const currentValue = Math.floor(numericValue * easeOutQuart)

                    counter.textContent = currentValue + (hasPlus ? '+' : '')

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter)
                    } else {
                        counter.textContent = target
                    }
                }

                requestAnimationFrame(updateCounter)
            })
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters()
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.5 })

        const statsSection = document.querySelector(`.${styles.heroStats}`)
        if (statsSection) {
            observer.observe(statsSection)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroOverlay}></div>
            <video
                ref={videoRef}
                className={styles.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            >
                <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>

            <div className="container">
                <div className={styles.heroGrid}>
                    <div className={styles.heroContentText}>
                        <div className={styles.heroBadge}>
                            <i className="fas fa-building"></i>
                            <span>Licensed Real Estate LLC</span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            Your Gateway to<br />
                            <span className="gradient-text">Dubai&apos;s Luxury Living</span>
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Price or Quality? With Us You Give Up Nothing!
                        </p>

                        <div className={styles.heroCta}>
                            <a
                                href="https://wa.me/971562852580?text=Hi%20MQAMY!%20I'm%20interested%20in%20Dubai%20properties."
                                className="btn btn-primary btn-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>Chat on WhatsApp</span>
                            </a>
                            <a href="tel:+971562852580" className="btn btn-secondary btn-lg">
                                <i className="fas fa-phone"></i>
                                <span>+971 56 285 2580</span>
                            </a>
                        </div>

                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-target="500+">0</span>
                                <span className={styles.statLabel}>Properties Sold</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-target="10+">0</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-target="4">0</span>
                                <span className={styles.statLabel}>Languages</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroFormWrapper}>
                        <h3>Quick Inquiry</h3>
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone / WhatsApp Number"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">I&apos;m interested in...</option>
                                    <option value="buy">Buying Property</option>
                                    <option value="invest">Investment Opportunities</option>
                                    <option value="rent">Renting Property</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message (Optional)"
                                    rows="3"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                <i className="fas fa-paper-plane"></i>
                                <span>Send Inquiry</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <i className="fas fa-chevron-down"></i>
            </div>
        </section>
    )
}
