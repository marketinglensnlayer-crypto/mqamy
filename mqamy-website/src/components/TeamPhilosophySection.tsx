'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TeamPhilosophySection() {
    return (
        <section className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
            {/* Left Side: Team & Pillars */}
            <div
                className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative"
                style={{ backgroundColor: 'var(--surface-alt)' }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 lg:mb-12"
                >
                    <h2 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ color: 'var(--heading)', fontFamily: 'var(--font-figtree)' }}>OUR TEAM</h2>
                    <p className="text-xl lg:text-2xl text-slate-500 font-medium tracking-wide">With us you give up nothing!</p>
                </motion.div>

                <div className="space-y-8">
                    {[
                        { label: 'EXPERIENCE', color: 'var(--accent-coral)', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
                        { label: 'KNOWLEDGE', color: '#317bff', icon: <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z M9 21h6" /> },
                        { label: 'RESULTS', color: 'var(--heading)', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" /> },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-6 lg:gap-10 group cursor-default"
                        >
                            <div
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-xl shrink-0"
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2" style={{ stroke: item.color }}>
                                    {item.icon}
                                </svg>
                            </div>
                            <span
                                className="text-4xl lg:text-6xl font-black uppercase tracking-tight"
                                style={{ color: item.color, fontFamily: 'var(--font-figtree)' }}
                            >
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 lg:mt-12">
                    <Link
                        href="/agents"
                        className="btn btn-primary transition-all hover:-translate-x-[2px] hover:-translate-y-[2px]"
                        style={{
                            boxShadow: '4px 4px 0 0 var(--accent-coral)'
                        }}
                    >
                        Check Our Offer
                    </Link>
                </div>
            </div>

            {/* Right Side: Quote & Image */}
            <div className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-auto flex items-center">
                <Image
                    src="/images/hero-property.jpg"
                    alt="Dubai Skyline"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div
                    className="absolute inset-0 opacity-80"
                    style={{ background: 'linear-gradient(to bottom right, rgba(16, 69, 80, 0.9), rgba(16, 69, 80, 0.5))', mixBlendMode: 'multiply' }}
                />

                <div className="relative z-10 p-12 lg:p-24 w-full">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl lg:text-4xl font-medium leading-relaxed mb-16 text-white"
                            style={{ fontFamily: 'var(--font-figtree)', color: '#FFFFFF' }}
                        >
                            &ldquo;At Mqamy Real Estate L.L.C, the focus is always on people, not just property. Every investor we work with deserves honest advice, clear numbers, and a smooth experience from the first call to handover and beyond.&rdquo;
                        </motion.p>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div>
                                <p className="font-bold text-2xl text-white mb-2" style={{ color: '#FFF' }}>Ahmed Wazir</p>
                                <p className="text-white/80 uppercase text-sm tracking-wider font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>GM at Mqamy Real Estate</p>
                            </div>
                            <div className="w-32 bg-white/10 p-2 rounded backdrop-blur-sm">
                                <Image src="/mqamy-logo.png" alt="Mqamy" width={140} height={50} className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
