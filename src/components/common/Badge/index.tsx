import React from 'react';
import styles from '../Table/Table.module.scss';
import clsx from 'clsx';

interface BadgeProps {
    status: string;
}

export const Badge = ({ status }: BadgeProps) => {
    const getStatusType = (s: string) => {
        switch (s.toLowerCase()) {
            case 'completed': return 'success';
            case 'paid': return 'success';
            case 'approved': return 'success';
            case 'pending': return 'pending';
            case 'rejected': return 'danger';
            case 'refunded': return 'danger';
            default: return 'info';
        }
    };

    return (
        <span className={clsx(styles.badge, styles[getStatusType(status)])}>
            {status}
        </span>
    );
};
