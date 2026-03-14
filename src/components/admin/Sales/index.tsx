import { Card } from '@/components/common/Card';
import { SalesTable } from './SalesTable';
import { mockOrders } from '@/data/mockData';

export default function Sales() {
    return (
        <Card>
            <SalesTable data={mockOrders} />
        </Card>
    );
}
