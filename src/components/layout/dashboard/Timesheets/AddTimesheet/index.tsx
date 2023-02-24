import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BackToLink from 'src/components/layout/dashboard/BackToLink';

import classes from './AddTimesheet.module.css';

type FormValues = {
  referenceNumber: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  clientName: string;
};

export default function AddClient() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <div style={{ maxWidth: 200 }}>
        <BackToLink to="/dashboard/timesheets" text="Back to Timesheets List" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Coming Soon</h2>
      </form>
    </div>
  );
}
