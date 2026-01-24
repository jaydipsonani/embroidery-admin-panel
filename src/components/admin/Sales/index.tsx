import React from 'react';
import { Card } from '@/components/common/Card';
import { Table, Badge } from '@/components/common/Table';
import { mockOrders } from '@/data/mockData';
import styles from './Sales.module.scss';

export default function Sales() {
    const columns = [
        { header: 'Order ID', accessor: 'id' as const },
        { header: 'Design', accessor: 'designName' as const },
        { header: 'Date', accessor: 'date' as const },
        { header: 'Buyer', accessor: 'buyerName' as const },
        { header: 'Amount', accessor: (item: any) => `₹${item.amount}` },
        { header: 'Commission', accessor: (item: any) => `₹${item.commission}`, className: styles.commission },
        { header: 'Status', accessor: (item: any) => <Badge status={item.status} /> },
    ];

    return (
        <Card>
            <Table data={mockOrders} columns={columns} keyField="id" />
        </Card>
    );
}
