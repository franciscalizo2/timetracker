import DashboardLayout from 'src/components/layout/dashboard/DashboardLayout';
import Client from 'src/components/layout/dashboard/Clients/Client';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Client />
    </DashboardLayout>
  );
}
