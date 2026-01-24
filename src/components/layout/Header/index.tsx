import React from 'react';
import styles from './Header.module.scss';
import { Menu } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface HeaderProps {
    title?: string;
    onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Dashboard', onMenuClick }) => {
    const { user } = useAuth();

    return (
        <header className={styles.header}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button className={styles.toggle} onClick={onMenuClick}>
                    <Menu />
                </button>
                <h2 className={styles.title}>{title}</h2>
            </div>

            <div className={styles.profile}>
                <div className={styles.info}>
                    <span className={styles.name}>Admin User</span>
                    <span className={styles.role}>Super Admin</span>
                </div>
                <div className={styles.avatar}>A</div>
            </div>
        </header>
    );
};
