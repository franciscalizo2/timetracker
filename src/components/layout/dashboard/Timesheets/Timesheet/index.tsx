import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { useTimesheets } from 'src/context/timesheetsContext';
import BackToLink from '../../BackToLink';
import classes from './Timesheet.module.css';

type FormValues = {
  referenceNumber: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  clientName: string;
};

export default function Client() {
  const navigate = useNavigate();
  const { selectedTimesheet, setSelectedTimesheet, isEditMode } =
    useTimesheets();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // Set Values of form on initial render
  React.useEffect(() => {
    if (selectedTimesheet) {
      // setValue('referenceNumber', selectedClient.ref);
      // setValue('clientName', selectedClient.client);
      // setValue('jobTitle', selectedClient.jobTitle);
      // setValue('firstName', selectedClient.firstName);
      // setValue('lastName', selectedClient.lastName);
    }
  }, []);

  const onSubmit = (data: FormValues) => {
    const { clientName, firstName, lastName, jobTitle, referenceNumber } = data;

    const newClient = {
      ref: referenceNumber,
      jobTitle: jobTitle,
      firstName: firstName,
      lastName: lastName,
      client: clientName,
    };

    navigate(`/dashboard/timesheets`);
  };

  return (
    <>
      <div style={{ maxWidth: 200 }}>
        <BackToLink
          to="/dashboard/timesheets"
          text="Back to Timesheets List"
          onClick={() => setSelectedTimesheet(null)}
        />
      </div>
      <h2 style={{ marginLeft: '2rem' }}>Coming Soon</h2>
      <p>{isEditMode ? 'Edit Mode' : 'View Mode'}</p>
    </>
  );
}
