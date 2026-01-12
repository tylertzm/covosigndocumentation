import React from 'react';
import styles from './styles.module.css';

export default function Section({ title, children }) {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.grid}>
                {children}
            </div>
        </div>
    );
}
