import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import { LayoutDashboard, Users, RefreshCw, BadgeDollarSign, LogOut, Hexagon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/common/Button';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
    isCollapsed?: boolean;
    setIsCollapsed?: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isCollapsed, setIsCollapsed }) => {
    const router = useRouter();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const { logout } = useAuth();

    const links = [
        { href: '/', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/sales', label: 'Sales Management', icon: BadgeDollarSign },
        { href: '/designers', label: 'Designers', icon: Users },
        { href: '/users', label: 'Machine Owners', icon: Users },
        { href: '/designs', label: 'Design Approval', icon: RefreshCw },
        { href: '/withdrawals', label: 'Withdrawals', icon: RefreshCw },
        
    ];

    return (
        <>
            <aside className={clsx(styles.sidebar, { [styles.open]: isOpen, [styles.collapsed]: isCollapsed })}>
                <div className={styles.brand}>
                    <Hexagon size={28} />
                    {!isCollapsed && <span>Admin</span>}
                </div>

                {setIsCollapsed && (
                    <button 
                        className={styles.collapseToggle} 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </button>
                )}

                <nav className={styles.nav}>
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = router.pathname === link.href || (link.href !== '/' && router.pathname.startsWith(link.href));

                        return (
                            <Link key={link.href} href={link.href} className={clsx(styles.link, { [styles.active]: isActive })}>
                                <Icon />
                                {!isCollapsed && <span>{link.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.footer}>
                    <Button variant="ghost" className={clsx("w-full justify-start", styles.logoutButton)} onClick={() => setIsLogoutModalOpen(true)}>
                        <LogOut size={20} />
                        {!isCollapsed && <span>Sign Out</span>}
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
