import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import Head from 'next/head';
import DesignManagement from '@/components/admin/Designs';

export default function DesignsPage() {
    return (
        <AdminLayout title="Design Approval">
            <Head><title>Design Approval | Embroidery Admin</title></Head>
            <DesignManagement />
        </AdminLayout>
    );
}
