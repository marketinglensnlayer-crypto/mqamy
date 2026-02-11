'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AgentCardProps {
    name: string;
    title: string;
    licenseNumber?: string;
    bio: string;
    image: string;
}

export default function AgentCard({
    name,
    title,
    licenseNumber,
    bio,
    image
}: AgentCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group h-full"
        >
            <div
                className="card overflow-hidden h-full flex flex-col rounded-none border border-black/5 transition-all duration-300 hover:-translate-y-1"
                style={{
                    backgroundColor: 'var(--surface)',
                    boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.05)'
                }}
            >
                {/* Image Container - Using aspect-[3/4] for portraits */}
                <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex-1">
                        <h3
                            className="text-xl font-bold mb-1 transition-colors group-hover:text-primary"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            {name}
                        </h3>

                        <p
                            className="text-sm font-semibold uppercase tracking-wider mb-4"
                            style={{ color: 'var(--primary)' }}
                        >
                            {title}
                        </p>

                        <div className="flex items-center gap-1.5 mb-6 text-sm" style={{ color: 'var(--body)' }}>
                            {licenseNumber ? (
                                <span>{licenseNumber}</span>
                            ) : (
                                <span>Real Estate Broker</span>
                            )}
                        </div>
                    </div>

                    {/* Divider & CTA at bottom */}
                    <div className="mt-auto">
                        <div
                            className="h-px w-full mb-4"
                            style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                        />
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all group-hover:gap-3"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            Contact Agent
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
