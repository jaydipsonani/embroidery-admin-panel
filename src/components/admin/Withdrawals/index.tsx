import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { Table, Badge } from '@/components/common/Table';
import { mockWithdrawals, WithdrawalRequest } from '@/data/mockData';
import { Button } from '@/components/common/Button';
import { Check, X } from 'lucide-react';
import { toastSuccess } from '@/lib/toast';
import styles from './Withdrawals.module.scss';

export default function Withdrawals() {
    const [data, setData] = useState<WithdrawalRequest[]>(mockWithdrawals);

    const handleStatusChange = (id: string, newStatus: 'paid' | 'rejected') => {
        if (confirm(`Are you sure you want to mark this request as ${newStatus}?`)) {
            setData(prev => prev.map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            ));
            toastSuccess(`Request marked as ${newStatus}`);
        }
    };

    const columns = [
        { header: 'Date', accessor: 'requestDate' as const },
        { header: 'Designer', accessor: 'designerName' as const },
        { header: 'Amount', accessor: (item: any) => `₹${item.amount}` },
        {
            header: 'Method', accessor: (item: any) => (
                <div>
                    <div className={styles.method}>{item.method}</div>
                    <div className={styles.details}>{item.details}</div>
                </div>
            )
        },
        { header: 'Status', accessor: (item: any) => <Badge status={item.status} /> },
        {
            header: 'Actions', accessor: (item: any) => (
                item.status === 'pending' ? (
                    <div className={styles.actions}>
                        <Button size="sm" onClick={() => handleStatusChange(item.id, 'paid')}>
                            <Check size={16} /> Pay
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => handleStatusChange(item.id, 'rejected')}>
                            <X size={16} /> Reject
                        </Button>
                    </div>
                ) : (
                    <span className={styles.completed}>Completed</span>
                )
            )
        }
    ];

    return (
        <Card>
            <Table data={data} columns={columns} keyField="id" />
        </Card>
    );
}
