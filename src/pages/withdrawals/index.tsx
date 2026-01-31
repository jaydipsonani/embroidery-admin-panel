import React from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import Head from 'next/head';
import WithdrawalsComponent from '@/components/admin/Withdrawals';

export default function Withdrawals() {
    return (
        <AdminLayout title="Withdrawal Requests">
            <Head><title>Withdrawals | Embroidery Admin</title></Head>
            <WithdrawalsComponent />
        </AdminLayout>
    );
}
