import { Card } from '@/components/common/Card';
import { mockOrders } from '@/data/mockData';
import { SalesTable } from '../salesTable/SalesTable';

export default function Sales() {
    return (
        <Card>
            <SalesTable data={mockOrders} />
        </Card>
    );
}
