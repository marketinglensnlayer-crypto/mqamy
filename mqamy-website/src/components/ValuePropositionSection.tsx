'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ValuePropositionSection() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
            <div className="container">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {[
                        {
                            title: 'Price vs Quality',
                            description: 'We believe in transparent pricing that reflects true value. No hidden fees, no surprises—just honest real estate.'
                        },
                        {
                            title: 'Free Transition Period',
                            description: 'Enjoy a complimentary transition period when you invest with us. We support you every step of the way.'
                        },
                        {
                            title: 'Expert Guidance',
                            description: 'Our team of seasoned professionals provides personalized advice tailored to your investment goals.'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="text-center p-10 transition-all duration-300 hover:-translate-y-2 group"
                            style={{
                                backgroundColor: 'var(--surface)',
                                boxShadow: '12px 12px 0 0 var(--accent-coral)'
                            }}
                        >
                            <div
                                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                                style={{ backgroundColor: 'var(--primary)' }}
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22,4 12,14.01 9,11.01" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold mb-4"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                {item.title}
                            </h3>
                            <p style={{ color: 'var(--body)' }}>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
