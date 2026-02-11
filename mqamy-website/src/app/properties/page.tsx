'use client';

import { motion } from 'framer-motion';
import PropertyCard from '@/components/PropertyCard';
import ContactSection from '@/components/ContactSection';
import properties from '@/data/properties.json';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

function PropertiesContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const [activeLocation, setActiveLocation] = useState('All');

    // Filter Logic
    const filteredProperties = properties.filter((property) => {
        // 1. Search Query Match
        const query = searchQuery.toLowerCase();
        const matchesSearch = !query ||
            property.name.toLowerCase().includes(query) ||
            property.location.toLowerCase().includes(query) ||
            property.type?.toLowerCase().includes(query) ||
            false;

        // 2. Location Filter Match
        const matchesLocation = activeLocation === 'All' || property.location.includes(activeLocation);

        return matchesSearch && matchesLocation;
    });

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
                            Curated Portfolio
                        </span>
                        <h1
                            className="text-5xl md:text-7xl font-medium mb-8 leading-tight"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            EXCEPTIONAL <br />
                            <span style={{ color: 'var(--accent-coral)' }}>PROPERTIES WORLDWIDE</span>
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--body)' }}>
                            Discover our exclusive collection of luxury properties, handpicked for their unique character, prime location, and exceptional quality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="section pt-0" style={{ backgroundColor: 'var(--background)' }}>
                <div className="container">
                    {/* Search Results Feedback */}
                    {searchQuery && (
                        <div className="text-center mb-8">
                            <p className="text-lg" style={{ color: 'var(--body)' }}>
                                Showing results for "<span className="font-bold text-[var(--heading)]">{searchQuery}</span>"
                            </p>
                        </div>
                    )}

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-16 justify-center">
                        {['All', 'Dubai', 'Vienna', 'Oslo', 'Lisbon'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveLocation(filter)}
                                className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider border transition-all ${activeLocation === filter ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-transparent text-[var(--heading)] border-black/10 hover:border-[var(--primary)]'}`}
                                style={{ boxShadow: activeLocation === filter ? '4px 4px 0 0 rgba(16,69,80,0.2)' : 'none' }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {filteredProperties.map((property, index) => (
                                <motion.div
                                    key={property.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <PropertyCard
                                        id={property.id}
                                        name={property.name}
                                        location={property.location}
                                        price={property.price}
                                        image={property.image}
                                        type={property.type}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--heading)' }}>No properties found</h3>
                            <p style={{ color: 'var(--body)' }}>Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[var(--background)]" />}>
            <PropertiesContent />
        </Suspense>
    );
}
