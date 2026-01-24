import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import { LayoutDashboard, Users, RefreshCw, BadgeDollarSign, LogOut, Hexagon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/common/Button';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const { logout } = useAuth();

    const links = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/designers', label: 'Designers', icon: Users },
        { href: '/admin/withdrawals', label: 'Withdrawals', icon: RefreshCw },
        { href: '/admin/sales', label: 'Transactions', icon: BadgeDollarSign },
    ];

    return (
        <>
            <aside className={clsx(styles.sidebar, { [styles.open]: isOpen })}>
                <div className={styles.brand}>
                    <Hexagon size={28} />
                    <span>Embroidery Admin</span>
                </div>

                <nav className={styles.nav}>
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = router.pathname === link.href || (link.href !== '/admin' && router.pathname.startsWith(link.href));

                        return (
                            <Link key={link.href} href={link.href} className={clsx(styles.link, { [styles.active]: isActive })}>
                                <Icon />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.footer}>
                    <Button variant="ghost" className="w-full justify-start" onClick={logout}>
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </Button>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />}
        </>
    );
};
