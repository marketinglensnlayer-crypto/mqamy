'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import properties from '@/data/properties.json';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<typeof properties>([]);
    const router = useRouter();

    // Lock scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Auto focus input is handled by autoFocus prop
        } else {
            document.body.style.overflow = 'unset';
            setSearchTerm(''); // Reset on close
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Live Search Logic
    useEffect(() => {
        if (searchTerm.trim().length > 1) {
            const query = searchTerm.toLowerCase();
            const results = properties.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.location.toLowerCase().includes(query) ||
                p.type?.toLowerCase().includes(query)
            ).slice(0, 4); // Limit to 4 results
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    }, [searchTerm]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onClose();
            router.push(`/properties?search=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleResultClick = () => {
        // In a real app this might go to /properties/[id]
        // For now, we go to propertes page with search query or just close
        // Let's go to Properties Page with the property name as search
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-20 md:pt-32 pointer-events-none p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="bg-white w-full max-w-2xl pointer-events-auto border border-black/5 flex flex-col max-h-[80vh]"
                            style={{ boxShadow: '12px 12px 0 0 rgba(16, 69, 80, 0.1)' }}
                        >
                            <div className="p-8 md:p-12 pb-6 relative shrink-0">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 transition-transform hover:rotate-90 hover:opacity-70"
                                    aria-label="Close search"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--heading)' }}>
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>

                                <h2
                                    className="text-3xl font-bold mb-8"
                                    style={{
                                        fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                        color: 'var(--heading)'
                                    }}
                                >
                                    Search Properties
                                </h2>

                                <form onSubmit={handleSearch} className="flex flex-col gap-6">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Type a location, name, or style..."
                                            autoFocus
                                            className="w-full py-4 text-xl md:text-2xl font-medium border-b-2 transition-all focus:outline-none bg-transparent placeholder:text-gray-300 pr-12"
                                            style={{
                                                borderColor: 'rgba(0,0,0,0.1)',
                                                color: 'var(--heading)'
                                            }}
                                        />
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                            <button
                                                type="submit"
                                                className="p-2 hover:opacity-70"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--primary)' }}>
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Live Results List */}
                            {searchTerm.length > 1 && (
                                <div className="overflow-y-auto px-8 md:px-12 pb-8 md:pb-12">
                                    {filteredResults.length > 0 ? (
                                        <div className="flex flex-col gap-4">
                                            <p className="text-xs font-bold uppercase tracking-widest text-[#104550]/50 mb-2">Properties Found</p>
                                            {filteredResults.map((prop) => (
                                                <div
                                                    key={prop.id}
                                                    onClick={() => router.push(`/properties?search=${encodeURIComponent(prop.name)}`)} // Link to search for this specific item for now
                                                    className="flex items-center gap-4 p-3 bg-gray-50 border border-transparent hover:border-[#104550]/20 hover:bg-white transition-all cursor-pointer group"
                                                >
                                                    <div className="relative w-16 h-16 shrink-0 bg-gray-200">
                                                        <Image
                                                            src={prop.image}
                                                            alt={prop.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-[#104550] truncate">{prop.name}</h4>
                                                        <p className="text-sm text-gray-500 truncate">{prop.location}</p>
                                                    </div>
                                                    <div className="text-right shrink-0">
                                                        <span className="text-[#E85C41] font-bold text-sm">{prop.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                onClick={handleSearch}
                                                className="text-center text-sm font-semibold text-[#104550] hover:text-[#E85C41] mt-2 underline underline-offset-4"
                                            >
                                                View all results for "{searchTerm}"
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-center py-4 text-gray-400">
                                            No properties found matching "{searchTerm}"
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
