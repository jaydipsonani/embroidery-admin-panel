import { AdminLayout } from '@/components/layout/AdminLayout';
import Head from 'next/head';
import SalesComponent from '@/components/Sales';

export default function Sales() {
    return (
        <AdminLayout title="Sales History">
            <Head><title>Sales | Embroidery Admin</title></Head>
            <SalesComponent />
        </AdminLayout>
    );
}
