import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import { LayoutDashboard, Users, RefreshCw, BadgeDollarSign, LogOut, Hexagon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/common/Button';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const { logout } = useAuth();

    const links = [
        { href: '/', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/designers', label: 'Designers', icon: Users },
        { href: '/withdrawals', label: 'Withdrawals', icon: RefreshCw },
        { href: '/sales', label: 'Transactions', icon: BadgeDollarSign },
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
                        const isActive = router.pathname === link.href || (link.href !== '/' && router.pathname.startsWith(link.href));

                        return (
                            <Link key={link.href} href={link.href} className={clsx(styles.link, { [styles.active]: isActive })}>
                                <Icon />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.footer}>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => setIsLogoutModalOpen(true)}>
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </Button>
                </div>
            </aside>

            {/* Mobile/Tablet Overlay */}
            {isOpen && <div className={styles.overlay} onClick={onClose} />}

            <Modal show={isLogoutModalOpen} onHide={() => setIsLogoutModalOpen(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to log out? You will need to sign in again to access the admin panel.</p>
                </Modal.Body>
                <Modal.Footer>
                    <BootstrapButton variant="secondary" onClick={() => setIsLogoutModalOpen(false)}>
                        Cancel
                    </BootstrapButton>
                    <BootstrapButton variant="danger" onClick={logout}>
                        Logout
                    </BootstrapButton>
                </Modal.Footer>
            </Modal>
        </>
    );
};
