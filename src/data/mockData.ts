export interface Designer {
    id: string;
    name: string;
    email: string;
    walletBalance: number;
    totalSales: number;
    joinedDate: string;
}

export interface MachineOwner {
    id: string;
    name: string;
    email: string;
    location: string;
    machineModel: string;
    joinedDate: string;
    status: 'active' | 'pending' | 'suspended';
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

export interface Design {
    id: string;
    name: string;
    designerId: string;
    designerName: string;
    category: string;
    price: number;
    image: string;
    details: string;
    uploadDate: string;
    status: 'published' | 'pending' | 'rejected';
    rejectionReason?: string;
}

export const mockDesigners: Designer[] = [
    { id: 'd1', name: 'Alice Creative', email: 'alice@example.com', walletBalance: 1200, totalSales: 5000, joinedDate: '2025-01-10' },
    { id: 'd2', name: 'Bob Designs', email: 'bob@example.com', walletBalance: 4500, totalSales: 12000, joinedDate: '2025-01-12' },
    { id: 'd3', name: 'Carol Stitch', email: 'carol@example.com', walletBalance: 800, totalSales: 1500, joinedDate: '2025-01-15' },
];

export const mockMachineOwners: MachineOwner[] = [
    { id: 'mo1', name: 'Raj Gupta', email: 'raj@example.com', location: 'Surat, Gujarat', machineModel: 'Brother PR1055X', joinedDate: '2025-02-01', status: 'active' },
    { id: 'mo2', name: 'Amit Shah', email: 'amit@example.com', location: 'Jaipur, Rajasthan', machineModel: 'Janome MB-7', joinedDate: '2025-02-05', status: 'pending' },
    { id: 'mo3', name: 'Priya Verma', email: 'priya@example.com', location: 'Ludhiana, Punjab', machineModel: 'Bernina E 16', joinedDate: '2025-02-10', status: 'active' },
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

export const mockDesigns: Design[] = [
    {
        id: 'des1',
        name: 'Royal Peacock',
        designerId: 'd1',
        designerName: 'Alice Creative',
        category: 'Indian Traditional',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&q=80',
        details: 'Elaborate peacock design with gold threads and zircon details.',
        uploadDate: '2026-02-15',
        status: 'published'
    },
    {
        id: 'des2',
        name: 'Lotus Border',
        designerId: 'd2',
        designerName: 'Bob Designs',
        category: 'Borders',
        price: 800,
        image: 'https://images.unsplash.com/photo-1583344672620-1378d3873966?w=500&q=80',
        details: 'Symmetric lotus border for sarees and lehengas.',
        uploadDate: '2026-02-18',
        status: 'pending'
    },
    {
        id: 'des3',
        name: 'Abstract Geometric',
        designerId: 'd1',
        designerName: 'Alice Creative',
        category: 'Modern',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1583344676231-15f5c128f411?w=500&q=80',
        details: 'Minimalist geometric patterns for cushion covers.',
        uploadDate: '2026-02-19',
        status: 'pending'
    },
    {
        id: 'des4',
        name: 'Vintage Bouquet',
        designerId: 'd3',
        designerName: 'Carol Stitch',
        category: 'Floral',
        price: 2000,
        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&q=80',
        details: 'Multicolor vintage floral bouquet for central placements.',
        uploadDate: '2026-02-20',
        status: 'rejected',
        rejectionReason: 'Image quality is too low.'
    }
];
