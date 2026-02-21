import React from 'react';
import { Card } from '@/components/common/Card';
import { Table, Badge } from '@/components/common/Table';
import { mockMachineOwners } from '@/data/mockData';
import styles from './MachineOwners.module.scss';

export default function MachineOwners() {
    const columns = [
        { header: 'ID', accessor: 'id' as const },
        { header: 'Name', accessor: 'name' as const },
        { header: 'Email', accessor: 'email' as const },
        { header: 'Location', accessor: 'location' as const, className: styles.location },
        { header: 'Machine Model', accessor: 'machineModel' as const, className: styles.machine },
        { header: 'Joined Date', accessor: 'joinedDate' as const },
        {
            header: 'Status',
            accessor: (item: any) => <Badge status={item.status} />
        },
    ];

    return (
        <Card>
            <Table data={mockMachineOwners} columns={columns} keyField="id" />
        </Card>
    );
}
