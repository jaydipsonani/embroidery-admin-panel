import React from 'react';
import { Badge } from '@/components/common/Badge';
import { Order } from '@/data/mockData';
import styles from '@/components/common/Table/Table.module.scss';
import customStyles from './Sales.module.scss';
import clsx from 'clsx';

interface SalesTableProps {
    data: Order[];
}

export const SalesTable = ({ data }: SalesTableProps) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Order ID</th>
                        <th className={styles.th}>Design</th>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Buyer</th>
                        <th className={styles.th}>Amount</th>
                        <th className={styles.th}>Commission</th>
                        <th className={styles.th}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={styles.tr}>
                            <td className={styles.td}>{item.id}</td>
                            <td className={styles.td}>{item.designName}</td>
                            <td className={styles.td}>{item.date}</td>
                            <td className={styles.td}>{item.buyerName}</td>
                            <td className={styles.td}>₹{item.amount}</td>
                            <td className={clsx(styles.td, customStyles.commission)}>₹{item.commission}</td>
                            <td className={styles.td}>
                                <Badge status={item.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
