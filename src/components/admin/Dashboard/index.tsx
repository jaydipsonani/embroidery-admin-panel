import React from 'react';
import { Card } from '@/components/common/Card';
import { mockOrders, mockWithdrawals } from '@/data/mockData';
import styles from './Dashboard.module.scss';
import clsx from 'clsx';
import { DollarSign, Wallet, ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
    // Calculate Stats
    const totalSales = mockOrders.reduce((sum, order) => sum + order.amount, 0);
    const totalCommission = mockOrders.reduce((sum, order) => sum + order.commission, 0);
    const pendingWithdrawals = mockWithdrawals.filter(w => w.status === 'pending').reduce((sum, w) => sum + w.amount, 0);

    const stats = [
        { label: 'Total Sales', value: `₹${totalSales.toLocaleString()}`, icon: ShoppingBag, color: 'purple' },
        { label: 'Platform Revenue', value: `₹${totalCommission.toLocaleString()}`, icon: DollarSign, color: 'green' },
        { label: 'Pending Payouts', value: `₹${pendingWithdrawals.toLocaleString()}`, icon: Wallet, color: 'orange' },
    ];

    return (
        <>
            <div className={styles.grid}>
                {stats.map((stat, index) => (
                    <Card key={index} className={styles.statCard}>
                        <div className={styles.statInfo}>
                            <div className={styles.label}>{stat.label}</div>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.trend}>
                                <ArrowUpRight size={16} />
                                <span>+12.5% vs last month</span>
                            </div>
                        </div>
                        <div className={clsx(styles.iconBox, styles[stat.color])}>
                            <stat.icon size={24} />
                        </div>
                    </Card>
                ))}
            </div>

            <div className={styles.section}>
                <Card title="Recent Orders">
                    <div className={styles.activityList}>
                        {mockOrders.slice(0, 5).map(order => (
                            <div key={order.id} className={styles.activityItem}>
                                <div className={styles.orderInfo}>
                                    <p>{order.designName}</p>
                                    <span>by {mockOrders.find(o => o.id === order.id)?.designerId} • {order.date}</span>
                                </div>
                                <div className={styles.amount}>+₹{order.amount}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Pending Withdrawals">
                    <div className={styles.activityList}>
                        {mockWithdrawals.filter(w => w.status === 'pending').map(req => (
                            <div key={req.id} className={styles.activityItem}>
                                <div className={styles.orderInfo}>
                                    <p>{req.designerName}</p>
                                    <span>{req.method}</span>
                                </div>
                                <div className={styles.amount} style={{ color: '#f59e0b' }}>₹{req.amount}</div>
                            </div>
                        ))}
                        {mockWithdrawals.filter(w => w.status === 'pending').length === 0 && (
                            <p className="text-gray-500 text-sm">No pending requests.</p>
                        )}
                    </div>
                </Card>
            </div>
        </>
    );
}
