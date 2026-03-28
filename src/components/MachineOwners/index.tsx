import { Card } from '@/components/common/Card';
import { mockMachineOwners } from '@/data/mockData';
import { MachineOwnersTable } from '../machineOwnerTable/MachineOwnersTable';

export default function MachineOwners() {
    return (
        <Card>
            <MachineOwnersTable data={mockMachineOwners} />
        </Card>
    );
}
