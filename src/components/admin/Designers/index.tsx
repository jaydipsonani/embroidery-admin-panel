import React from 'react';
import { Card } from '@/components/common/Card';
import { mockDesigners } from '@/data/mockData';
import { DesignersTable } from '@/components/DesignersTable';

export default function Designers() {
    return (
        <Card>
            <DesignersTable data={mockDesigners} />
        </Card>
    );
}
