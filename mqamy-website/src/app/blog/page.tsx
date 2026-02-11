'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: '5 Tips for First-Time Property Investors in Dubai',
        excerpt: 'Navigate the Dubai real estate market with confidence using these essential tips for new investors.',
        date: '2026-01-28',
        category: 'Investment'
    },
    {
        id: 2,
        title: 'The Rise of Luxury Sustainable Homes in Europe',
        excerpt: 'How eco-conscious design is transforming the luxury real estate market across European capitals.',
        date: '2026-01-22',
        category: 'Trends'
    },
    {
        id: 3,
        title: 'Understanding Property Taxes for International Buyers',
        excerpt: 'A comprehensive guide to navigating property taxes when purchasing real estate abroad.',
        date: '2026-01-15',
        category: 'Guide'
    }
];

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="pt-32 pb-20"
                style={{ backgroundColor: 'var(--background)' }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span
                            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                            style={{ color: 'var(--primary)' }}
                        >
                            Insights & News
                        </span>
                        <h1
                            className="text-4xl md:text-5xl font-semibold mb-6"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--heading)'
                            }}
                        >
                            The MQAMY Blog
                        </h1>
                        <p className="text-lg" style={{ color: 'var(--body)' }}>
                            Stay informed with the latest insights on real estate trends, investment
                            strategies, and market analysis.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                                style={{ backgroundColor: 'var(--background)' }}
                            >
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span
                                            className="text-xs font-semibold uppercase tracking-wider px-3 py-1"
                                            style={{
                                                backgroundColor: 'var(--primary)',
                                                color: 'var(--surface)'
                                            }}
                                        >
                                            {post.category}
                                        </span>
                                        <span className="text-sm" style={{ color: 'var(--body-light)' }}>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <h2
                                        className="text-xl font-semibold mb-3 transition-colors group-hover:opacity-80"
                                        style={{
                                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                            color: 'var(--heading)'
                                        }}
                                    >
                                        {post.title}
                                    </h2>
                                    <p className="mb-6" style={{ color: 'var(--body)' }}>
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all group-hover:gap-3"
                                        style={{
                                            fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                            color: 'var(--primary)'
                                        }}
                                    >
                                        Read More
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section" style={{ backgroundColor: 'var(--background)' }}>
                <div className="container">
                    <div
                        className="max-w-2xl mx-auto text-center p-12"
                        style={{ backgroundColor: 'var(--primary)' }}
                    >
                        <h2
                            className="text-2xl font-semibold mb-4"
                            style={{
                                fontFamily: 'var(--font-figtree), system-ui, sans-serif',
                                color: 'var(--surface)'
                            }}
                        >
                            Subscribe to Our Newsletter
                        </h2>
                        <p
                            className="mb-8"
                            style={{ color: 'rgba(255,255,255,0.85)' }}
                        >
                            Get the latest market insights and exclusive listings delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 flex-1 max-w-xs focus:outline-none"
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    color: 'var(--heading)'
                                }}
                            />
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: 'var(--accent-coral)',
                                    color: 'var(--surface)'
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
