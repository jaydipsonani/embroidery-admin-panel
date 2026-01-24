import React from 'react';
import styles from './Table.module.scss';
import clsx from 'clsx';

interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    className?: string;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyField: keyof T;
}

export const Table = <T extends Record<string, any>>({ data, columns, keyField }: TableProps<T>) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className={styles.th}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item[keyField]} className={styles.tr}>
                            {columns.map((col, index) => (
                                <td key={index} className={clsx(styles.td, col.className)}>
                                    {typeof col.accessor === 'function' ? col.accessor(item) : item[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const Badge = ({ status }: { status: string }) => {
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
