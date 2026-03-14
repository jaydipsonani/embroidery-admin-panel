import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { WithdrawalsTable } from './WithdrawalsTable';
import { mockWithdrawals, WithdrawalRequest } from '@/data/mockData';
import { toastSuccess } from '@/lib/toast';

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

    return (
        <Card>
            <WithdrawalsTable data={data} onStatusChange={handleStatusChange} />
        </Card>
    );
}
