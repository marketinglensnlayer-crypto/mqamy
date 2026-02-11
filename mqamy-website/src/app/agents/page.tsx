'use client';

import { motion } from 'framer-motion';
import AgentCard from '@/components/AgentCard';
import ContactSection from '@/components/ContactSection';
import agents from '@/data/agents.json';

export default function AgentsPage() {
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
                            Our Team
                        </span>
                        <h1
                            className="text-5xl md:text-7xl font-medium mb-8 leading-tight"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            MEET THE <br />
                            <span style={{ color: 'var(--accent-coral)' }}>EXPERTS</span>
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--body)' }}>
                            Our multilingual team brings together decades of experience in
                            international real estate, committed to guiding you through every step.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Agents Grid */}
            <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {agents.map((agent, index) => (
                            <motion.div
                                key={agent.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <AgentCard
                                    name={agent.name}
                                    title={agent.title}
                                    licenseNumber={agent.licenseNumber}
                                    bio={agent.bio}
                                    image={agent.image}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team Callout */}
            <section className="py-20 text-center" style={{ backgroundColor: 'var(--heading)' }}>
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6 text-white">Want to Join Our Team?</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        We are always looking for talented individuals who share our passion for real estate and client service.
                    </p>
                    <a href="/contact" className="btn btn-primary bg-white text-black hover:bg-white/90" style={{ color: 'var(--heading)' }}>
                        Join Mqamy
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
