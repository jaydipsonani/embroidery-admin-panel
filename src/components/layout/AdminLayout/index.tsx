import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import styles from './AdminLayout.module.scss';

interface AdminLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>; // Or a spinner
    }

    return (
        <div className={styles.layout}>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className={styles.mainContent}>
                <Header title={title} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
                <main className={styles.pageContent}>
                    {children}
                </main>
            </div>
        </div>
    );
};
