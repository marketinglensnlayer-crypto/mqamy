'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from '@/components/SearchModal';

const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/properties', label: 'LISTINGS' },
    { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm py-4`}
                style={{
                    backgroundColor: '#F2EFE8',
                }}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative">
                            <img
                                src="/mqamy-logo.png"
                                alt="MQAMY Real Estate"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative text-sm font-medium tracking-wide transition-colors hover:text-primary"
                                style={{
                                    fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                    color: 'var(--heading)'
                                }}
                            >
                                {link.label}
                                <span
                                    className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                    style={{ backgroundColor: 'var(--primary)' }}
                                />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        {/* Search Icon */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden md:flex p-2 hover:opacity-70 transition-opacity"
                            aria-label="Search"
                            style={{ color: 'var(--heading)' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:-translate-x-[2px] hover:-translate-y-[2px]"
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: '#FFFFFF',
                                boxShadow: '4px 4px 0 0 var(--accent-coral)',
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                            }}
                        >
                            Book a Call
                        </Link>

                        {/* Hamburger Menu Button - Mobile Only */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-1.5 transition-all"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-current transition-colors"
                                style={{ backgroundColor: 'var(--heading)' }}
                            />
                            <motion.span
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-current transition-colors"
                                style={{ backgroundColor: 'var(--heading)' }}
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-current transition-colors"
                                style={{ backgroundColor: 'var(--heading)' }}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        className="fixed inset-0 z-40 flex items-center justify-center"
                        style={{ backgroundColor: 'var(--surface)' }}
                    >
                        <nav className="text-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-4 text-3xl md:text-5xl font-medium tracking-wide transition-colors hover:opacity-60"
                                        style={{
                                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                            color: 'var(--heading)'
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Close button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center"
                            aria-label="Close menu"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                style={{ color: 'var(--heading)' }}
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
