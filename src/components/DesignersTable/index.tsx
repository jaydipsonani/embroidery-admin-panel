import React from 'react';
import { Designer } from '@/data/mockData';
import styles from '@/components/common/Table/Table.module.scss';
import customStyles from './Designers.module.scss';
import clsx from 'clsx';

interface DesignersTableProps {
    data: Designer[];
}

export const DesignersTable = ({ data }: DesignersTableProps) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Joined Date</th>
                        <th className={styles.th}>Total Sales</th>
                        <th className={styles.th}>Wallet Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={styles.tr}>
                            <td className={styles.td}>{item.id}</td>
                            <td className={styles.td}>{item.name}</td>
                            <td className={styles.td}>{item.email}</td>
                            <td className={styles.td}>{item.joinedDate}</td>
                            <td className={clsx(styles.td, customStyles.mono)}>₹{item.totalSales}</td>
                            <td className={clsx(styles.td, customStyles.balance)}>₹{item.walletBalance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
