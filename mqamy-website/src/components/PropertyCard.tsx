'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PropertyCardProps {
    id: string;
    name: string;
    location: string;
    price?: string;
    image: string;
    type?: string;
}

export default function PropertyCard({
    id,
    name,
    location,
    price,
    image,
    type
}: PropertyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
        >
            <div
                className="card overflow-hidden rounded-none border border-black/5 transition-all duration-300 hover:-translate-y-1"
                style={{
                    backgroundColor: 'var(--surface)',
                    boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.05)'
                }}
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {type && (
                        <div
                            className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: 'var(--surface)'
                            }}
                        >
                            {type}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3
                        className="text-xl font-semibold mb-2 transition-colors group-hover:text-primary"
                        style={{
                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                            color: 'var(--heading)'
                        }}
                    >
                        {name}
                    </h3>

                    <div className="flex items-center gap-1.5 mb-4" style={{ color: 'var(--body)' }}>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-sm">{location}</span>
                    </div>

                    {price && (
                        <p
                            className="text-lg font-semibold mb-4"
                            style={{ color: 'var(--primary)' }}
                        >
                            {price}
                        </p>
                    )}

                    {/* Divider */}
                    <div
                        className="h-px w-full mb-4"
                        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                    />

                    {/* CTA Link */}
                    <Link
                        href={`/properties/${id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all group-hover:gap-3"
                        style={{
                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                            color: 'var(--heading)'
                        }}
                    >
                        Show Estate
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
        </motion.div>
    );
}
