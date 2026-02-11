'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeHero() {
    return (
        <section
            className="pt-32 pb-16"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8"
                            style={{ fontFamily: 'var(--font-figtree), system-ui, sans-serif' }}
                        >
                            <span style={{ color: 'var(--accent-coral)' }}>AT MQAMY WE </span>
                            <span style={{ color: 'var(--primary)' }}>WORK </span>
                            <span style={{ color: 'var(--heading)' }}>FOR YOUR HOME - </span>
                            <span style={{ color: 'var(--accent-coral)' }}>YOUR PROPERTY, OUR PASSION!</span>
                        </h1>

                        <Link
                            href="/properties"
                            className="btn btn-primary transition-all hover:-translate-x-[2px] hover:-translate-y-[2px]"
                            style={{
                                boxShadow: '4px 4px 0 0 var(--accent-coral)'
                            }}
                        >
                            Our Offer
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div
                            className="relative aspect-[4/3] overflow-hidden"
                            style={{
                                boxShadow: '20px 20px 0px var(--primary)',
                            }}
                        >
                            <Image
                                src="/images/hero-property.jpg"
                                alt="Luxury modern villa"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
