import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, title, noPadding }) => {
    return (
        <div className={clsx(styles.card, className, { [styles.noPadding]: noPadding })}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {children}
        </div>
    );
};
