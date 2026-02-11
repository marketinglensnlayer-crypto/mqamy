'use client'

import { useEffect, useRef } from 'react'
import styles from './ValueSection.module.css'

const values = [
    {
        icon: 'fas fa-shield-halved',
        title: 'Licensed Professionals',
        description: 'Work with RERA-certified agents who understand Dubai\'s property market inside out.'
    },
    {
        icon: 'fas fa-hand-holding-heart',
        title: 'Free Transition Support',
        description: 'Unique free transition period guiding you through every detail of your new life in Dubai.'
    },
    {
        icon: 'fas fa-language',
        title: 'Multilingual Advisors',
        description: 'Fluent in English, Arabic, Hindi, and Urdu for seamless communication.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Smart Investment',
        description: 'Get the best opportunities at the right price without sacrificing lifestyle or service.'
    }
]

export default function ValueSection() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.active)
                    }
                })
            },
            { threshold: 0.1 }
        )

        const cards = sectionRef.current?.querySelectorAll(`.${styles.valueCard}`)
        cards?.forEach(card => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.valueSection} id="about" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Why Choose Us</span>
                    <h2 className="section-title">
                        Your Trusted Partner in<br />
                        <span className="gradient-text">Dubai Real Estate</span>
                    </h2>
                </div>
                <div className={styles.valueGrid}>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={styles.valueCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.valueIcon}>
                                <i className={value.icon}></i>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
