import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import Head from 'next/head';
import DesignersComponent from '@/components/admin/Designers';

export default function Designers() {
    return (
        <AdminLayout title="Designers">
            <Head><title>Designers | Embroidery Admin</title></Head>
            <DesignersComponent />
        </AdminLayout>
    );
}
