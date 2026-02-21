import React, { useState } from 'react';
import { Card } from '@/components/common/Card';
import { Table, Badge } from '@/components/common/Table';
import { mockDesigns, Design } from '@/data/mockData';
import styles from './Designs.module.scss';
import clsx from 'clsx';
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';
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

    const columns = [
        {
            header: 'Image',
            accessor: (item: Design) => (
                <img src={item.image} alt={item.name} className={styles.designImage} />
            ),
            className: styles.imageCell
        },
        {
            header: 'Design Details',
            accessor: (item: Design) => (
                <div>
                    <div className={styles.designName}>{item.name}</div>
                    <div className={styles.category}>{item.category}</div>
                </div>
            )
        },
        { header: 'Designer', accessor: 'designerName' as const },
        { header: 'Price', accessor: (item: Design) => `₹${item.price}` },
        { header: 'Date', accessor: 'uploadDate' as const },
        {
            header: 'Actions',
            accessor: (item: Design) => (
                <div className={styles.actions}>
                    <Button variant="ghost" size="sm" onClick={() => handleReview(item)}>
                        <Eye size={18} />
                    </Button>
                    {item.status === 'pending' && (
                        <>
                            <Button variant="ghost" size="sm" onClick={() => handleApprove(item.id)} className={styles.textSuccess}>
                                <CheckCircle size={18} />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleReject(item.id)} className={styles.textDanger}>
                                <XCircle size={18} />
                            </Button>
                        </>
                    )}
                </div>
            )
        },
    ];

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

            <Table
                data={filteredDesigns}
                columns={columns}
                keyField="id"
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
