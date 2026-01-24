'use client'

import Image from 'next/image'
import styles from './PropertiesSection.module.css'

const properties = [
    {
        id: 1,
        name: 'Skyline Tower',
        location: 'Business Bay, Dubai',
        price: 'AED 2.5M',
        beds: 3,
        baths: 2,
        sqft: '1,850',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
        badge: 'Featured'
    },
    {
        id: 2,
        name: 'Crystal Heights',
        location: 'Downtown Dubai',
        price: 'AED 1.8M',
        beds: 2,
        baths: 2,
        sqft: '1,200',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        badge: 'Hot Deal'
    },
    {
        id: 3,
        name: 'Harbor View Villa',
        location: 'Palm Jumeirah',
        price: 'AED 4.2M',
        beds: 5,
        baths: 4,
        sqft: '4,500',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
        badge: 'New'
    }
]

export default function PropertiesSection() {
    return (
        <section className={styles.propertiesSection} id="properties">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Featured Properties</span>
                    <h2 className="section-title">
                        Discover Your Dream<br />
                        <span className="gradient-text">Dubai Property</span>
                    </h2>
                </div>

                <div className={styles.propertiesGrid}>
                    {properties.map((property) => (
                        <div key={property.id} className={styles.propertyCard}>
                            <div className={styles.propertyImage}>
                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className={styles.propertyBadge}>{property.badge}</div>
                                <div className={styles.propertyPrice}>{property.price}</div>
                            </div>
                            <div className={styles.propertyContent}>
                                <h3>{property.name}</h3>
                                <p className={styles.propertyLocation}>
                                    <i className="fas fa-location-dot"></i> {property.location}
                                </p>
                                <div className={styles.propertyFeatures}>
                                    <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                                    <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                                    <span><i className="fas fa-vector-square"></i> {property.sqft} sqft</span>
                                </div>
                                <a
                                    href={`https://wa.me/971562852580?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(property.name)}%20property.`}
                                    className="btn btn-outline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-whatsapp"></i> Inquire Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.propertiesCta}>
                    <a
                        href="https://wa.me/971562852580?text=Hi!%20I%20want%20to%20see%20more%20properties."
                        className="btn btn-primary btn-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i>
                        <span>View All Properties</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
