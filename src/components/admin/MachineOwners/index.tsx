import React from 'react';
import { Card } from '@/components/common/Card';
import { MachineOwnersTable } from './MachineOwnersTable';
import { mockMachineOwners } from '@/data/mockData';

export default function MachineOwners() {
    return (
        <Card>
            <MachineOwnersTable data={mockMachineOwners} />
        </Card>
    );
}
