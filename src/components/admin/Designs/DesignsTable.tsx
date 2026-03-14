import React from 'react';
import { Design } from '@/data/mockData';
import { Button } from '@/components/common/Button';
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import styles from '@/components/common/Table/Table.module.scss';
import customStyles from './Designs.module.scss';

interface DesignsTableProps {
    data: Design[];
    onReview: (design: Design) => void;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

export const DesignsTable = ({ data, onReview, onApprove, onReject }: DesignsTableProps) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Image</th>
                        <th className={styles.th}>Design Details</th>
                        <th className={styles.th}>Designer</th>
                        <th className={styles.th}>Price</th>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={styles.tr}>
                            <td className={customStyles.imageCell}>
                                <img src={item.image} alt={item.name} className={customStyles.designImage} />
                            </td>
                            <td className={styles.td}>
                                <div>
                                    <div className={customStyles.designName}>{item.name}</div>
                                    <div className={customStyles.category}>{item.category}</div>
                                </div>
                            </td>
                            <td className={styles.td}>{item.designerName}</td>
                            <td className={styles.td}>₹{item.price}</td>
                            <td className={styles.td}>{item.uploadDate}</td>
                            <td className={styles.td}>
                                <div className={customStyles.actions}>
                                    <Button variant="ghost" size="sm" onClick={() => onReview(item)}>
                                        <Eye size={18} />
                                    </Button>
                                    {item.status === 'pending' && (
                                        <>
                                            <Button variant="ghost" size="sm" onClick={() => onApprove(item.id)} className={customStyles.textSuccess}>
                                                <CheckCircle size={18} />
                                            </Button>
                                            <Button variant="ghost" size="sm" onClick={() => onReject(item.id)} className={customStyles.textDanger}>
                                                <XCircle size={18} />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
