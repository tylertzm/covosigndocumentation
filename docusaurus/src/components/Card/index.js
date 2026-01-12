import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Card({ title, description, badge, to }) {
    return (
        <Link to={to} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    {badge && (
                        <span className={styles.badge}>
                            {badge}
                        </span>
                    )}
                </div>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </Link>
    );
}
