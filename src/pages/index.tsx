import Head from 'next/head';
import { AdminLayout } from '@/components/layout/AdminLayout';
import DashboardComponent from '@/components/Dashboard';

export default function Dashboard() {
    return (
        <AdminLayout title="Overview">
            <Head>
                <title>Dashboard | Embroidery Admin</title>
            </Head>
            <DashboardComponent />
        </AdminLayout>
    );
}
