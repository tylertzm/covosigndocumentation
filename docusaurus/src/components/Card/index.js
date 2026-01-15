import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Card({ title, description, badge, to, featured }) {
    return (
        <Link to={to} className={`${styles.cardLink} ${featured ? styles.featuredCardLink : ''}`}>
            <div className={`${styles.card} ${featured ? styles.featuredCard : ''}`}>
                <div className={styles.cardHeader}>
                    <h3 className={`${styles.cardTitle} ${featured ? styles.featuredCardTitle : ''}`}>{title}</h3>
                    {badge && (
                        <span className={`${styles.badge} ${featured ? styles.featuredBadge : ''}`}>
                            {badge}
                        </span>
                    )}
                </div>
                <p className={`${styles.cardDescription} ${featured ? styles.featuredCardDescription : ''}`}>{description}</p>
            </div>
        </Link>
    );
}
