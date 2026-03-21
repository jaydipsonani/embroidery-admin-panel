import React from 'react';
import Head from 'next/head';
import LoginComponent from '@/components/auth/Login';

export default function Login() {
    return (
        <>
            <Head>
                <title>Admin Login | Embroidery Panel</title>
            </Head>
            <LoginComponent />
        </>
    );
}
