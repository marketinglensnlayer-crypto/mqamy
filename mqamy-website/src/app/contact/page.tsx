'use client';

import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="pt-40 pb-20 bg-no-repeat bg-cover bg-center relative"
                style={{
                    backgroundColor: 'var(--background)'
                }}
            >
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span
                            className="text-sm font-bold uppercase tracking-widest mb-6 block"
                            style={{ color: 'var(--primary)' }}
                        >
                            We're Here For You
                        </span>
                        <h1
                            className="text-5xl md:text-7xl font-medium mb-8 leading-tight"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            LET'S START A <br />
                            <span style={{ color: 'var(--accent-coral)' }}>CONVERSATION</span>
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--body)' }}>
                            Have a question about a property? Ready to list your home? Or just want to discuss the market? Our team is ready to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <div className="w-full h-[400px] bg-gray-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653926922!2d55.27218771500953!3d25.197197983896188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1623456789012!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/* Reused Contact Section (Form & Info) */}
            <div className="-mt-24 relative z-10">
                <ContactSection />
            </div>

            <div className="pb-24" style={{ backgroundColor: 'var(--surface-alt)' }}></div>
        </>
    );
}
