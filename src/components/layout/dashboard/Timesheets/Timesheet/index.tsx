import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import BackToLink from 'src/components/layout/dashboard/BackToLink';
import { useTimesheets } from 'src/context/timesheetsContext';
import classes from './Timesheet.module.css';

export type FormValues = {
  clientName: string;
  consultantFirstName: string;
  consultantLastName: string;
  weekStarting: Date;
  weekEnding: Date;
  rate: number;
  totalHours: number;
  status: string;
};

export default function AddClient() {
  const navigate = useNavigate();
  const { selectedTimesheet, setTimesheetsList, isEditMode, setIsEditMode } =
    useTimesheets();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // Set Values of form on initial render
  React.useEffect(() => {
    if (selectedTimesheet) {
      setValue('clientName', selectedTimesheet.client);
      setValue('consultantFirstName', selectedTimesheet.firstName);
      setValue('consultantLastName', selectedTimesheet.lastName);
      setValue('weekStarting', selectedTimesheet.weekStarting);
      setValue('weekEnding', selectedTimesheet.weekEnding);
      setValue('rate', selectedTimesheet.rate);
      setValue('totalHours', selectedTimesheet.totalHours);
      setValue('status', selectedTimesheet.status);
    }
  }, []);

  const onSubmit = (data: FormValues) => {
    const {
      clientName,
      consultantFirstName,
      consultantLastName,
      weekStarting,
      weekEnding,
      rate,
      totalHours,
      status,
    } = data;

    const newClient = {
      client: clientName,
      firstName: consultantFirstName,
      lastName: consultantLastName,
      weekStarting,
      weekEnding,
      rate,
      totalHours,
      status,
    };

    setTimesheetsList((old: any) => [...old, newClient]);
    navigate(`/dashboard/timesheets`);
  };

  return (
    <div>
      <div style={{ maxWidth: 200 }}>
        <BackToLink to="/dashboard/timesheets" text="Back to Client List" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes['page-container']}>
          <div className={classes['form-container']}>
            {!isEditMode && (
              <div className={`${classes['edit-container']}`}>
                <button
                  type="button"
                  onClick={() => setIsEditMode(true)}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Edit Client"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            )}

            <Tooltip id="edit-tooltip" />

            {isEditMode && <h2>Edit Client</h2>}

            <div className={classes['grid-container']}>
              <div className={`${classes['client-name']}`}>
                <label className={classes['input-label']} htmlFor="clientName">
                  Client Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="clientName"
                  className={classes['input']}
                  type="text"
                  {...register('clientName', {
                    required: 'This field is required',
                  })}
                />
                {errors.clientName && (
                  <div className={classes['error-message']}>
                    {errors.clientName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['consultant-first-name']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="consultantFirstName"
                >
                  Consultant First Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="consultantFirstName"
                  className={classes['input']}
                  type="text"
                  {...register('consultantFirstName', {
                    required: 'This field is required',
                  })}
                />
                {errors.consultantFirstName && (
                  <div className={classes['error-message']}>
                    {errors.consultantFirstName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['consultant-last-name']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="consultantLastName"
                >
                  Consultant Last Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="consultantLastName"
                  className={classes['input']}
                  type="text"
                  {...register('consultantLastName', {
                    required: 'This field is required',
                  })}
                />
                {errors.consultantLastName && (
                  <div className={classes['error-message']}>
                    {errors.consultantLastName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['week-starting']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="weekStarting"
                >
                  Week Starting
                </label>
                <input
                  disabled={!isEditMode}
                  id="weekStarting"
                  className={classes['input']}
                  type="date"
                  {...register('weekStarting', {
                    required: 'This field is required',
                  })}
                />
                {errors.weekStarting && (
                  <div className={classes['error-message']}>
                    {errors.weekStarting.message}
                  </div>
                )}
              </div>

              <div className={`${classes['week-ending']}`}>
                <label className={classes['input-label']} htmlFor="weekEnding">
                  Week Ending
                </label>
                <input
                  disabled={!isEditMode}
                  id="weekEnding"
                  className={classes['input']}
                  type="date"
                  {...register('weekEnding', {
                    required: 'This field is required',
                  })}
                />
                {errors.weekEnding && (
                  <div className={classes['error-message']}>
                    {errors.weekEnding.message}
                  </div>
                )}
              </div>

              <div className={`${classes['rate']}`}>
                <label className={classes['input-label']} htmlFor="rate">
                  Rate
                </label>
                <input
                  disabled={!isEditMode}
                  id="rate"
                  className={classes['input']}
                  type="number"
                  {...register('rate', {
                    required: 'This field is required',
                  })}
                />
                {errors.rate && (
                  <div className={classes['error-message']}>
                    {errors.rate.message}
                  </div>
                )}
              </div>

              <div className={`${classes['total-hours']}`}>
                <label className={classes['input-label']} htmlFor="totalHours">
                  Total Hours
                </label>
                <input
                  disabled={!isEditMode}
                  id="totalHours"
                  className={classes['input']}
                  type="number"
                  {...register('totalHours', {
                    required: 'This field is required',
                  })}
                />
                {errors.totalHours && (
                  <div className={classes['error-message']}>
                    {errors.totalHours.message}
                  </div>
                )}
              </div>

              <div className={`${classes['status']}`}>
                <label className={classes['input-label']} htmlFor="status">
                  Status
                </label>
                <input
                  disabled={!isEditMode}
                  id="status"
                  className={classes['input']}
                  type="text"
                  {...register('status', {
                    required: 'This field is required',
                  })}
                />
                {errors.status && (
                  <div className={classes['error-message']}>
                    {errors.status.message}
                  </div>
                )}
              </div>
            </div>

            {isEditMode && (
              <div className={classes['buttons-container']}>
                <button
                  type="button"
                  onClick={() => setIsEditMode(false)}
                  className={`${classes['button']} ${classes['cancel']}`}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`${classes['button']} ${classes['save']}`}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
