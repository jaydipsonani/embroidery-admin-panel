import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { WithdrawalsTable } from './WithdrawalsTable';
import { mockWithdrawals, WithdrawalRequest } from '@/data/mockData';
import { toastSuccess } from '@/lib/toast';
import { ConfirmationModal } from '@/components/common/ConfirmationModal';

export default function Withdrawals() {
    const [data, setData] = useState<WithdrawalRequest[]>(mockWithdrawals);
    const [modalConfig, setModalConfig] = useState<{
        show: boolean;
        id: string;
        newStatus: 'paid' | 'rejected';
    }>({
        show: false,
        id: '',
        newStatus: 'paid'
    });

    const handleStatusChange = (id: string, newStatus: 'paid' | 'rejected') => {
        setModalConfig({
            show: true,
            id,
            newStatus
        });
    };

    const confirmStatusChange = () => {
        const { id, newStatus } = modalConfig;
        setData(prev => prev.map(item =>
            item.id === id ? { ...item, status: newStatus } : item
        ));
        toastSuccess(`Request marked as ${newStatus}`);
        setModalConfig(prev => ({ ...prev, show: false }));
    };

    const modalTitle = modalConfig.newStatus === 'paid' ? 'Confirm Payment' : 'Reject Request';
    const modalMessage = `Are you sure you want to mark this request as ${modalConfig.newStatus}?`;
    const modalVariant = modalConfig.newStatus === 'paid' ? 'success' : 'danger';

    return (
        <Card>
            <WithdrawalsTable data={data} onStatusChange={handleStatusChange} />

            <ConfirmationModal
                show={modalConfig.show}
                onHide={() => setModalConfig(prev => ({ ...prev, show: false }))}
                onConfirm={confirmStatusChange}
                title={modalTitle}
                message={modalMessage}
                variant={modalVariant}
                confirmText={modalConfig.newStatus === 'paid' ? 'Mark as Paid' : 'Reject'}
            />
        </Card>
    );
}
