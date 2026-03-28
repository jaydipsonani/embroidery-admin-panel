import { Badge } from '@/components/common/Badge';
import { MachineOwner } from '@/data/mockData';
import styles from './MachineOwnersTable.module.scss';
import clsx from 'clsx';

interface MachineOwnersTableProps {
    data: MachineOwner[];
}

export const MachineOwnersTable = ({ data }: MachineOwnersTableProps) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Joined Date</th>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Location</th>
                        <th className={styles.th}>Machine Model</th>
                        <th className={styles.th}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={styles.tr}>
                            <td className={styles.td}>{item.joinedDate}</td>
                            <td className={styles.td}>{item.id}</td>
                            <td className={styles.td}>{item.name}</td>
                            <td className={styles.td}>{item.email}</td>
                            <td className={clsx(styles.td, styles.location)}>{item.location}</td>
                            <td className={clsx(styles.td, styles.machine)}>{item.machineModel}</td>
                            <td className={styles.td}>
                                <Badge status={item.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
