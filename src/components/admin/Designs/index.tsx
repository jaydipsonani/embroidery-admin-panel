import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { DesignsTable } from './DesignsTable';
import { mockDesigns, Design } from '@/data/mockData';
import styles from './Designs.module.scss';
import clsx from 'clsx';
import { DesignDetailsModal } from './DesignDetailsModal';
import { ConfirmationModal } from '@/components/common/ConfirmationModal';
import { toastSuccess } from '@/lib/toast';

export default function DesignManagement() {
    const [activeTab, setActiveTab] = useState<'pending' | 'published' | 'rejected'>('pending');
    const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmConfig, setConfirmConfig] = useState<{
        show: boolean;
        id: string;
        action: 'approve' | 'reject';
    }>({
        show: false,
        id: '',
        action: 'approve'
    });

    const filteredDesigns = mockDesigns.filter(d => d.status === activeTab);

    const tabs = [
        { id: 'pending', label: 'Pending Requests', count: mockDesigns.filter(d => d.status === 'pending').length },
        { id: 'published', label: 'Published', count: mockDesigns.filter(d => d.status === 'published').length },
        { id: 'rejected', label: 'Rejected', count: mockDesigns.filter(d => d.status === 'rejected').length },
    ];

    const handleReview = (design: Design) => {
        setSelectedDesign(design);
        setIsModalOpen(true);
    };

    const handleApprove = (id: string) => {
        setConfirmConfig({ show: true, id, action: 'approve' });
    };

    const handleReject = (id: string) => {
        setConfirmConfig({ show: true, id, action: 'reject' });
    };

    const handleConfirmAction = () => {
        const { id, action } = confirmConfig;
        if (action === 'approve') {
            console.log('Approved:', id);
            toastSuccess('Design approved and published');
        } else {
            console.log('Rejected:', id);
            toastSuccess('Design rejected');
        }
        setConfirmConfig(prev => ({ ...prev, show: false }));
        setIsModalOpen(false);
    };

    return (
        <Card noPadding>
            <div className={styles.tabs}>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={clsx(styles.tab, { [styles.active]: activeTab === tab.id })}
                        onClick={() => setActiveTab(tab.id as any)}
                    >
                        {tab.label}
                        {tab.count > 0 && <span className={styles.count}>{tab.count}</span>}
                    </div>
                ))}
            </div>

            <DesignsTable
                data={filteredDesigns}
                onReview={handleReview}
                onApprove={handleApprove}
                onReject={handleReject}
            />

            <DesignDetailsModal
                design={selectedDesign}
                show={isModalOpen}
                onHide={() => setIsModalOpen(false)}
                onApprove={handleApprove}
                onReject={handleReject}
            />

            <ConfirmationModal
                show={confirmConfig.show}
                onHide={() => setConfirmConfig(prev => ({ ...prev, show: false }))}
                onConfirm={handleConfirmAction}
                title={confirmConfig.action === 'approve' ? 'Confirm Approval' : 'Confirm Rejection'}
                message={`Are you sure you want to ${confirmConfig.action} this design?`}
                variant={confirmConfig.action === 'approve' ? 'success' : 'danger'}
                confirmText={confirmConfig.action === 'approve' ? 'Approve' : 'Reject'}
            />
        </Card>
    );
}
