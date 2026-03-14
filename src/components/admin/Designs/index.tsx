import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { DesignsTable } from './DesignsTable';
import { mockDesigns, Design } from '@/data/mockData';
import styles from './Designs.module.scss';
import clsx from 'clsx';
import { DesignDetailsModal } from './DesignDetailsModal';

export default function DesignManagement() {
    const [activeTab, setActiveTab] = useState<'pending' | 'published' | 'rejected'>('pending');
    const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        console.log('Approved:', id);
        // In a real app, update state/API
        setIsModalOpen(false);
    };

    const handleReject = (id: string) => {
        console.log('Rejected:', id);
        // In a real app, update state/API
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
        </Card>
    );
}
