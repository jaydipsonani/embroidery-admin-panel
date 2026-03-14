import React from 'react';
import { Badge } from '@/components/common/Badge';
import { WithdrawalRequest } from '@/data/mockData';
import { Button } from '@/components/common/Button';
import { Check, X } from 'lucide-react';
import styles from '@/components/common/Table/Table.module.scss';
import customStyles from './Withdrawals.module.scss';

interface WithdrawalsTableProps {
    data: WithdrawalRequest[];
    onStatusChange: (id: string, newStatus: 'paid' | 'rejected') => void;
}

export const WithdrawalsTable = ({ data, onStatusChange }: WithdrawalsTableProps) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Designer</th>
                        <th className={styles.th}>Amount</th>
                        <th className={styles.th}>Method</th>
                        <th className={styles.th}>Status</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={styles.tr}>
                            <td className={styles.td}>{item.requestDate}</td>
                            <td className={styles.td}>{item.designerName}</td>
                            <td className={styles.td}>₹{item.amount}</td>
                            <td className={styles.td}>
                                <div>
                                    <div className={customStyles.method}>{item.method}</div>
                                    <div className={customStyles.details}>{item.details}</div>
                                </div>
                            </td>
                            <td className={styles.td}>
                                <Badge status={item.status} />
                            </td>
                            <td className={styles.td}>
                                {item.status === 'pending' ? (
                                    <div className={customStyles.actions}>
                                        <Button size="sm" onClick={() => onStatusChange(item.id, 'paid')}>
                                            <Check size={16} /> Pay
                                        </Button>
                                        <Button size="sm" variant="danger" onClick={() => onStatusChange(item.id, 'rejected')}>
                                            <X size={16} /> Reject
                                        </Button>
                                    </div>
                                ) : (
                                    <span className={customStyles.completed}>Completed</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
