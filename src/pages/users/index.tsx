import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import Head from 'next/head';
import MachineOwnersComponent from '@/components/admin/MachineOwners';

export default function MachineOwners() {
    return (
        <AdminLayout title="Machine Owners">
            <Head><title>Machine Owners | Embroidery Admin</title></Head>
            <MachineOwnersComponent />
        </AdminLayout>
    );
}
