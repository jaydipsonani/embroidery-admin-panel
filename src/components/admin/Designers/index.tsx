import { useState } from 'react';
import { Card } from '@/components/common/Card';
import { mockDesigners } from '@/data/mockData';
import { DesignersTable } from '@/components/DesignersTable';
import { useRouter } from 'next/router';
import styles from './Designers.module.scss';
const searchIcon = `/assets/icons/searchIcon.svg`;
const calendar_icon = `/assets/icons/calendarIcon.svg`;

export default function Designers() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    
    return (
        <>
            <div className={styles.userManagementPage}>
                <div className={styles.userHeader}>
                    <div className={styles.userManagementPageBlock}>
                        <span className={styles.searchButton}>
                            <img src={searchIcon} alt="search" />
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value.startsWith(' ')) {
                                        setSearchQuery(value.trimStart());
                                    } else {
                                        setSearchQuery(value);
                                    }
                                }}
                                placeholder="Search"

                            />
                            <button style={{ border: 'none' }} >
                                Search
                            </button>
                        </span>
                        <div
                            className={styles.resetButton}
                        >
                            <button>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <Card>
                <DesignersTable data={mockDesigners} />
            </Card>
        </>
    );
}
