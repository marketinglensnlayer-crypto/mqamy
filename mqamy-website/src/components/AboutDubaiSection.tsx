'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutDubaiSection() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Image (Left Side, Smaller) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative lg:col-span-5"
                    >
                        <div
                            className="relative aspect-square overflow-hidden max-w-[400px] mx-auto lg:ml-0"
                            style={{
                                boxShadow: '20px 20px 0px var(--accent-coral)',
                            }}
                        >
                            <Image
                                src="/images/about-dubai.jpg"
                                alt="Dubai Metro and Cityscape"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </motion.div>

                    {/* Content (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <h2
                            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            PRICE OR QUALITY? <br />
                            <span style={{ color: 'var(--primary)' }}>WITH US YOU GIVE UP NOTHING!</span>
                        </h2>
                        <p
                            className="text-lg mb-8 leading-relaxed"
                            style={{ color: 'var(--body)' }}
                        >
                            Step into Dubai with confidence, knowing you are getting the best opportunities at the right price without sacrificing lifestyle or service.
                            <br /><br />
                            Mqamy offers investors a unique, free transition period, guiding you through every detail of your new life in Dubai so you feel at home from day one.
                        </p>

                        <Link
                            href="/contact"
                            className="btn btn-primary transition-all hover:-translate-x-[2px] hover:-translate-y-[2px]"
                            style={{
                                boxShadow: '4px 4px 0 0 var(--accent-coral)'
                            }}
                        >
                            Start Your Journey
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
