export interface Designer {
    id: string;
    name: string;
    email: string;
    walletBalance: number;
    totalSales: number;
    joinedDate: string;
}

export interface Order {
    id: string;
    designName: string;
    buyerName: string;
    amount: number;
    commission: number;
    designerId: string;
    date: string;
    status: 'completed' | 'refunded';
}

export interface WithdrawalRequest {
    id: string;
    designerId: string;
    designerName: string;
    amount: number;
    status: 'pending' | 'approved' | 'rejected' | 'paid';
    requestDate: string;
    method: 'UPI' | 'Bank Transfer';
    details: string;
}

export const mockDesigners: Designer[] = [
    { id: 'd1', name: 'Alice Creative', email: 'alice@example.com', walletBalance: 1200, totalSales: 5000, joinedDate: '2025-01-10' },
    { id: 'd2', name: 'Bob Designs', email: 'bob@example.com', walletBalance: 4500, totalSales: 12000, joinedDate: '2025-01-12' },
    { id: 'd3', name: 'Carol Stitch', email: 'carol@example.com', walletBalance: 800, totalSales: 1500, joinedDate: '2025-01-15' },
];

export const mockOrders: Order[] = [
    { id: 'ord_001', designName: 'Floral Pattern 01', buyerName: 'John Doe', amount: 500, commission: 100, designerId: 'd1', date: '2026-01-20', status: 'completed' },
    { id: 'ord_002', designName: 'Tiger Embroidery', buyerName: 'Jane Smith', amount: 1200, commission: 240, designerId: 'd2', date: '2026-01-21', status: 'completed' },
    { id: 'ord_003', designName: 'Vintage Rose', buyerName: 'Mike Ross', amount: 800, commission: 160, designerId: 'd1', date: '2026-01-22', status: 'completed' },
    { id: 'ord_004', designName: 'Abstract Art', buyerName: 'Sarah Kay', amount: 2000, commission: 400, designerId: 'd2', date: '2026-01-23', status: 'completed' },
    { id: 'ord_005', designName: 'Kids Cartoon', buyerName: 'Tom Jerry', amount: 300, commission: 60, designerId: 'd3', date: '2026-01-24', status: 'completed' },
];

export const mockWithdrawals: WithdrawalRequest[] = [
    { id: 'w_01', designerId: 'd2', designerName: 'Bob Designs', amount: 5000, status: 'pending', requestDate: '2026-01-23', method: 'UPI', details: 'bob@upi' },
    { id: 'w_02', designerId: 'd1', designerName: 'Alice Creative', amount: 2000, status: 'paid', requestDate: '2026-01-15', method: 'Bank Transfer', details: 'ACCT: 123456789' },
    { id: 'w_03', designerId: 'd3', designerName: 'Carol Stitch', amount: 500, status: 'rejected', requestDate: '2026-01-18', method: 'UPI', details: 'invalid@upi' },
];
