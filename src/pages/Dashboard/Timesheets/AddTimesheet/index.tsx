import DashboardLayout from 'src/components/layout/dashboard/DashboardLayout';
import AddTimesheet from 'src/components/layout/dashboard/Timesheets/AddTimesheet';

export default function AddTimesheetPage() {
  return (
    <DashboardLayout>
      <AddTimesheet />
    </DashboardLayout>
  );
}
