'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PropertyCard from '@/components/PropertyCard';
import properties from '@/data/properties.json';

export default function FeaturedPropertiesSection() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between mb-12"
                >
                    <div className="mb-4 md:mb-0">
                        <h2
                            className="text-3xl md:text-4xl font-semibold mb-2"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            CHECK OUR APARTMENTS
                        </h2>
                        <p
                            className="text-lg"
                            style={{ color: 'var(--primary)' }}
                        >
                            With us you give up nothing!
                        </p>
                    </div>
                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group"
                        style={{
                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                            color: 'var(--primary)'
                        }}
                    >
                        View All
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
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.slice(0, 3).map((property) => (
                        <PropertyCard
                            key={property.id}
                            id={property.id}
                            name={property.name}
                            location={property.location}
                            price={property.price}
                            image={property.image}
                            type={property.type}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
