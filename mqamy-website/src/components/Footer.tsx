import Link from 'next/link';

const footerLinks = {
    company: [
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
    ],
    properties: [
        { href: '/properties?type=residential', label: 'Residential' },
        { href: '/properties?type=commercial', label: 'Commercial' },
        { href: '/properties?type=luxury', label: 'Luxury Estates' },
        { href: '/properties?type=investment', label: 'Investment' },
    ],
    legal: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/cookies', label: 'Cookie Policy' },
    ],
};

const socialLinks = [
    {
        href: 'https://facebook.com',
        label: 'Facebook',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )
    },
    {
        href: 'https://instagram.com',
        label: 'Instagram',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
];

export default function Footer() {
    return (
        <footer className="relative pt-32 pb-16" style={{ backgroundColor: 'var(--primary)' }}>
            {/* Top Pattern/Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Brand Column (Span 5) */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-block mb-8 group pl-4">
                            <div className="flex flex-col">
                                <span className="text-5xl lg:text-7xl font-bold tracking-tighter mb-2 transition-opacity group-hover:opacity-90" style={{ fontFamily: 'var(--font-figtree)', color: '#FFFFFF' }}>
                                    MQAMY
                                </span>
                                <span className="text-xs uppercase tracking-[0.4em] pl-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                    Real Estate LLC
                                </span>
                            </div>
                        </Link>
                        <p className="text-lg leading-relaxed mb-8 max-w-md pl-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Premium real estate services for discerning clients. We curate exclusive properties that match your lifestyle and legacy.
                        </p>
                        <div className="flex gap-4 pl-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-white/5"
                                    style={{ color: '#FFFFFF' }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns (Span 7) */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
                        {/* Company */}
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-wider text-sm" style={{ color: '#FFFFFF' }}>Company</h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="transition-colors text-sm font-medium hover:opacity-100" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Properties */}
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-wider text-sm" style={{ color: '#FFFFFF' }}>Properties</h4>
                            <ul className="space-y-4">
                                {footerLinks.properties.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="transition-colors text-sm font-medium hover:opacity-100" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Contact */}
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-wider text-sm" style={{ color: '#FFFFFF' }}>Contact</h4>
                            <ul className="space-y-4 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                <li className="leading-relaxed">123 Business Bay<br />Dubai, UAE</li>
                                <li>
                                    <a href="tel:+971501234567" className="hover:text-white transition-colors block py-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        +971 50 123 4567
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@mqamy.com" className="hover:text-white transition-colors block py-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        info@mqamy.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <p>© {new Date().getFullYear()} MQAMY Real Estate LLC. All rights reserved.</p>
                    <div className="flex gap-8">
                        {footerLinks.legal.map(link => (
                            <Link key={link.href} href={link.href} className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
