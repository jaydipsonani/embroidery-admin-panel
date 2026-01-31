import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import Head from 'next/head';
import SalesComponent from '@/components/admin/Sales';

export default function Sales() {
    return (
        <AdminLayout title="Transaction History">
            <Head><title>Sales | Embroidery Admin</title></Head>
            <SalesComponent />
        </AdminLayout>
    );
}
