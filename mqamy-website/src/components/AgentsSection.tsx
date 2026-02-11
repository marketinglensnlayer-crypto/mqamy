'use client';

import { motion } from 'framer-motion';
import AgentCard from '@/components/AgentCard';
import agents from '@/data/agents.json';

export default function AgentsSection() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                        style={{ color: 'var(--primary)' }}
                    >
                        Meet Our Team
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-semibold"
                        style={{
                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                            color: 'var(--heading)'
                        }}
                    >
                        Our Expert Agents
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {agents.map((agent) => (
                        <div key={agent.id} className="w-full max-w-[380px]">
                            <AgentCard
                                name={agent.name}
                                title={agent.title}
                                licenseNumber={agent.licenseNumber}
                                bio={agent.bio}
                                image={agent.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
