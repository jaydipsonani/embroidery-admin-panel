import React from 'react';
import { Card } from '@/components/common/Card';
import { Table } from '@/components/common/Table';
import { mockDesigners } from '@/data/mockData';
import styles from './Designers.module.scss';

export default function Designers() {
    const columns = [
        { header: 'ID', accessor: 'id' as const },
        { header: 'Name', accessor: 'name' as const },
        { header: 'Email', accessor: 'email' as const },
        { header: 'Joined Date', accessor: 'joinedDate' as const },
        { header: 'Total Sales', accessor: (item: any) => `₹${item.totalSales}`, className: styles.mono },
        { header: 'Wallet Balance', accessor: (item: any) => `₹${item.walletBalance}`, className: styles.balance },
    ];

    return (
        <Card>
            <Table data={mockDesigners} columns={columns} keyField="id" />
        </Card>
    );
}
