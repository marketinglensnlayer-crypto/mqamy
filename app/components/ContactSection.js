'use client'

import { useState } from 'react'
import styles from './ContactSection.module.css'

export default function ContactSection() {
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

    return (
        <section className={styles.contactSection} id="contact">
            <div className="container">
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h3>Get in Touch</h3>
                        <div className={styles.contactItem}>
                            <i className="fas fa-phone"></i>
                            <div>
                                <span className={styles.contactLabel}>Phone / WhatsApp</span>
                                <a href="tel:+971562852580">+971 56 285 2580</a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <i className="fas fa-envelope"></i>
                            <div>
                                <span className={styles.contactLabel}>Email</span>
                                <a href="mailto:info@mqamy.com">info@mqamy.com</a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <i className="fas fa-location-dot"></i>
                            <div>
                                <span className={styles.contactLabel}>Office</span>
                                <span>Iris Bay, Business Bay, Dubai, UAE</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactFormWrapper}>
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
        </section>
    )
}
