'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 md:p-12 lg:p-16 border border-black/5"
                    style={{ boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.1)' }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Contact Form */}
                        <div>
                            <h2
                                className="text-3xl lg:text-4xl font-bold mb-10"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label
                                            htmlFor="name"
                                            className="block text-xs font-bold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[var(--primary)]"
                                            style={{ color: 'var(--body-light)' }}
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full py-4 border-b-2 transition-all focus:outline-none bg-transparent placeholder-transparent"
                                            style={{
                                                borderColor: 'rgba(0,0,0,0.1)',
                                                color: 'var(--heading)'
                                            }}
                                        />
                                    </div>
                                    <div className="group">
                                        <label
                                            htmlFor="email"
                                            className="block text-xs font-bold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[var(--primary)]"
                                            style={{ color: 'var(--body-light)' }}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full py-4 border-b-2 transition-all focus:outline-none bg-transparent placeholder-transparent"
                                            style={{
                                                borderColor: 'rgba(0,0,0,0.1)',
                                                color: 'var(--heading)'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label
                                            htmlFor="phone"
                                            className="block text-xs font-bold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[var(--primary)]"
                                            style={{ color: 'var(--body-light)' }}
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full py-4 border-b-2 transition-all focus:outline-none bg-transparent placeholder-transparent"
                                            style={{
                                                borderColor: 'rgba(0,0,0,0.1)',
                                                color: 'var(--heading)'
                                            }}
                                        />
                                    </div>
                                    <div className="group">
                                        <label
                                            htmlFor="subject"
                                            className="block text-xs font-bold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[var(--primary)]"
                                            style={{ color: 'var(--body-light)' }}
                                        >
                                            Subject
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full py-4 border-b-2 transition-all focus:outline-none bg-transparent appearance-none cursor-pointer"
                                                style={{
                                                    borderColor: 'rgba(0,0,0,0.1)',
                                                    color: 'var(--heading)'
                                                }}
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="buying">Buying a Property</option>
                                                <option value="selling">Selling a Property</option>
                                                <option value="investment">Investment Inquiry</option>
                                                <option value="consultation">General Consultation</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <label
                                        htmlFor="message"
                                        className="block text-xs font-bold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[var(--primary)]"
                                        style={{ color: 'var(--body-light)' }}
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        className="w-full py-4 border-b-2 transition-all focus:outline-none bg-transparent resize-none placeholder-transparent"
                                        style={{
                                            borderColor: 'rgba(0,0,0,0.1)',
                                            color: 'var(--heading)'
                                        }}
                                    />
                                </div>
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full md:w-auto px-10 py-4 text-sm font-bold tracking-widest transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
                                        style={{ boxShadow: '6px 6px 0 0 var(--accent-coral)' }}
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:pl-12 lg:border-l lg:border-black/5 h-full">
                            <h2
                                className="text-3xl font-bold mb-10"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                Get In Touch
                            </h2>

                            <div className="space-y-12">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--primary)] group-hover:text-white" style={{ backgroundColor: 'rgba(16, 69, 80, 0.05)', color: 'var(--primary)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--primary)' }}>
                                            Office Address
                                        </h3>
                                        <p className="text-lg leading-relaxed" style={{ color: 'var(--body)' }}>
                                            123 Business Bay<br />
                                            Dubai, UAE
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--primary)] group-hover:text-white" style={{ backgroundColor: 'rgba(16, 69, 80, 0.05)', color: 'var(--primary)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--primary)' }}>
                                            Phone
                                        </h3>
                                        <a href="tel:+971501234567" className="text-lg transition-colors hover:text-[var(--primary)] block" style={{ color: 'var(--body)' }}>
                                            +971 50 123 4567
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--primary)] group-hover:text-white" style={{ backgroundColor: 'rgba(16, 69, 80, 0.05)', color: 'var(--primary)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--primary)' }}>
                                            Email
                                        </h3>
                                        <a href="mailto:info@mqamy.com" className="text-lg transition-colors hover:text-[var(--primary)] block" style={{ color: 'var(--body)' }}>
                                            info@mqamy.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
