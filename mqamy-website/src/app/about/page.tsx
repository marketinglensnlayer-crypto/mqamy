'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';
import TeamPhilosophySection from '@/components/TeamPhilosophySection';
import AgentsSection from '@/components/AgentsSection';

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="pt-40 pb-20 lg:pt-52 lg:pb-32"
                style={{ backgroundColor: 'var(--background)' }}
            >
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1
                                className="font-bold leading-tight mb-12"
                                style={{ fontFamily: 'var(--font-figtree), system-ui, sans-serif' }}
                            >
                                <span className="block text-4xl sm:text-5xl lg:text-6xl mb-3" style={{ color: 'var(--heading)' }}>
                                    CRAFTING SPACES OF YOUR DREAMS -
                                </span>
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-300">
                                    YOUR PROPERTY, OUR PASSION!
                                </span>
                            </h1>

                            <Link
                                href="#story"
                                className="btn btn-primary inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-widest transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
                                style={{
                                    boxShadow: '6px 6px 0 0 var(--accent-coral)'
                                }}
                            >
                                READ MORE
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] md:aspect-[4/3] w-full max-w-lg mx-auto lg:ml-auto border border-black/5 bg-white"
                            style={{ boxShadow: '16px 16px 0 0 rgba(16, 69, 80, 0.1)' }}
                        >
                            <Image
                                src="/images/about-hero.png"
                                alt="Modern Architecture"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Content Section */}
            <section id="story" className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Main Content Column - Main Card */}
                        <motion.div
                            className="lg:col-span-8 bg-white p-8 md:p-12 border border-black/5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.05)' }}
                        >
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                About MQAMY
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--body)' }}>
                                <p>
                                    Mqamy Real Estate L.L.C is a Dubai-based real estate company dedicated to helping global investors confidently enter and grow in the UAE property market. The team focuses on transparency, data-driven decisions, and long-term relationships with clients from the UAE, Saudi Arabia, Canada, the USA, India, and other key investment destinations.
                                </p>
                                <p>
                                    Mqamy operates as a specialized real estate brokerage firm, connecting clients with carefully selected off-plan and ready properties across Dubai's most in-demand communities. Investors benefit from market-driven advice, clear financial projections, and guidance tailored to goals like rental income, capital appreciation, or relocation.
                                </p>
                                <p>
                                    A unique advantage of working with Mqamy is the free transition period offered to investors so they can experience Dubai's lifestyle before fully settling in. During this time, the team supports clients with community selection, schooling, healthcare, banking, transport, and everyday services, helping them feel at home in the city. This lifestyle support is designed to make moving to or investing in Dubai smoother, safer, and more enjoyable for families and individual buyers.
                                </p>
                                <p>
                                    Mqamy provides end-to-end brokerage services, from initial consultation and property search to negotiation, documentation, and registration with Dubai Land Department. Overseas investors receive virtual tours, digital paperwork handling, and secure remote closing options, making it easy to buy from Saudi Arabia, Canada, the USA, India, and beyond. The company also assists with leasing strategies and resale planning, acting as a long-term partner throughout the entire investment lifecycle.
                                </p>
                                <div className="p-6 mt-4" style={{ backgroundColor: 'rgba(16, 69, 80, 0.03)', borderLeft: '4px solid var(--primary)' }}>
                                    <p className="font-bold text-lg" style={{ color: 'var(--heading)' }}>
                                        "The promise of Mqamy Real Estate L.L.C is that clients never have to choose between price and quality."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Sidebar Column - Stacked Cards */}
                        <motion.div
                            className="lg:col-span-4 space-y-8 lg:sticky lg:top-32"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Feature 1 Card */}
                            <div
                                className="bg-white p-8 border border-black/5"
                                style={{ boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.05)' }}
                            >
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#E6F4F1]"
                                    style={{ color: 'var(--primary)' }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-4"
                                    style={{ fontFamily: 'var(--font-figtree)', color: 'var(--heading)' }}
                                >
                                    Signed with 10+ Developers
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
                                    Mqamy Real Estate L.L.C has direct brokerage agreements with more than ten of Dubai's leading developers, giving our clients priority access to high-demand projects and launch prices.
                                </p>
                            </div>

                            {/* Feature 2 Card */}
                            <div
                                className="bg-white p-8 border border-black/5"
                                style={{ boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.05)' }}
                            >
                                <h3
                                    className="text-xl font-bold mb-4"
                                    style={{ fontFamily: 'var(--font-figtree)', color: 'var(--heading)' }}
                                >
                                    Promise of our Founder
                                </h3>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--body)' }}>
                                    At Mqamy Real Estate L.L.C, being fully licensed and regulated in Dubai is the foundation of everything we do. It means every transaction follows clear RERA standards.
                                </p>

                                <div className="pt-2 border-t border-black/5">
                                    <svg width="180" height="50" viewBox="0 0 200 60" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                                        <path d="M10 40c0 0 10-20 20-25s15 10 15 10 5-15 15-15c10 0 10 20 5 30s-15 15-20 10m40-10c0 0 5-10 15-10s10 20 5 25m20-20c0 0 5-15 15-15s10 10 5 20m20-10c0 0 5-15 15-15s10 20 5 25" strokeLinecap="round" strokeLinejoin="round" />
                                        <text x="50" y="45" fontFamily="serif" fontSize="24" fontStyle="italic" fill="var(--primary)" stroke="none">Ahmed Wazir</text>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section" style={{ backgroundColor: 'var(--background)' }}>
                <div className="container space-y-20 lg:space-y-32">
                    {/* Feature 01 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-md mx-auto lg:ml-0"
                        >
                            <div
                                className="bg-white border border-black/5 p-3 pb-12"
                                style={{ boxShadow: '16px 16px 0 0 rgba(16, 69, 80, 0.1)' }}
                            >
                                <div className="relative aspect-[4/5] w-full bg-gray-100">
                                    <Image
                                        src="/images/about-01.jpg"
                                        alt="Family enjoying Dubai lifestyle"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-[10px] uppercase tracking-widest opacity-50 truncate">
                                        Photo by Mushvig Niftaliyev / Unsplash
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div
                                className="w-16 h-16 bg-[#E6F4F1] flex items-center justify-center text-xl font-bold mb-8 border border-black/5"
                                style={{
                                    color: 'var(--primary)',
                                    boxShadow: '6px 6px 0 0 rgba(16, 69, 80, 0.1)'
                                }}
                            >
                                01
                            </div>
                            <h2
                                className="text-3xl lg:text-4xl font-bold mb-8 leading-tight"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                PRICE OR QUALITY? WITH US YOU GIVE UP NOTHING!
                            </h2>
                            <p className="text-lg leading-relaxed" style={{ color: 'var(--body)' }}>
                                Enjoy Dubai's best real estate opportunities without sacrificing returns or service. With Mqamy Real Estate L.L.C, you receive competitively priced, high-quality properties plus a free transition period and full lifestyle guidance so you feel at home from day one.
                            </p>
                        </motion.div>
                    </div>

                    {/* Feature 02 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Text Side (First on Mobile due to order utility if needed, but standard stacking is Text top usually? Or Image top. I'll keep default grid order locally but swap columns) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div
                                className="w-16 h-16 bg-[#E6F4F1] flex items-center justify-center text-xl font-bold mb-8 border border-black/5"
                                style={{
                                    color: 'var(--primary)',
                                    boxShadow: '6px 6px 0 0 rgba(16, 69, 80, 0.1)'
                                }}
                            >
                                02
                            </div>
                            <h2
                                className="text-3xl lg:text-4xl font-bold mb-8 leading-tight"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                VISIT US FOR A FREE CONSULTATIONS
                            </h2>
                            <p className="text-lg leading-relaxed" style={{ color: 'var(--body)' }}>
                                Visit our Dubai office for a no-obligation consultation about your investment goals. Sit with our licensed advisors, review real projects and numbers, and get clear guidance tailored to your budget and timeline.
                            </p>
                        </motion.div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:mr-0"
                        >
                            <div
                                className="bg-white border border-black/5 p-3 pb-12"
                                style={{ boxShadow: '16px 16px 0 0 rgba(16, 69, 80, 0.1)' }}
                            >
                                <div className="relative aspect-[4/5] w-full bg-gray-100">
                                    <Image
                                        src="/images/about-02.png"
                                        alt="Couple signing documents"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-[10px] uppercase tracking-widest opacity-50 truncate">
                                        Advisors guiding you every step
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Unified Team & Philosophy Section */}
            <TeamPhilosophySection />

            {/* Our Agents Section */}
            <AgentsSection />

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
