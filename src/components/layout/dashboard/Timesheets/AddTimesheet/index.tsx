import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import add from 'date-fns/add';
import Select from 'react-select';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import BackToLink from 'src/components/layout/dashboard/BackToLink';
import { useTimesheets } from 'src/context/timesheetsContext';
import classes from './AddTimesheet.module.css';
import WeekPicker from 'src/components/WeekPicker';

export type StartEnd = Date | null;

export type FormValues = {
  clientName: string;
  consultantFirstName: string;
  consultantLastName: string;
  weekStarting: Date;
  weekEnding: Date;
  rate: number;
  status: string;

  timesheets: {
    date: Date;
    rate: number;
    hours: number;
    notes: string;
  }[];
};

const options = [
  { value: 'missing', label: 'Missing' },
  { value: 'approved', label: 'Approved' },
  { value: 'submitted', label: 'Submitted' },
];

export default function AddClient() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { fields, append } = useFieldArray({
    name: 'timesheets',
    control,
    rules: {},
  });

  const navigate = useNavigate();
  const { setTimesheetsList } = useTimesheets();

  const [isFixedRate, setIsFixedRate] = useState(false);
  const [weekSelection, setWeekSelection] = useState<{
    start: StartEnd;
    end: StartEnd;
  }>({
    start: null,
    end: null,
  });

  const calculateDays = (startDate: Date) => {
    let days = [];

    for (let i = 0; i <= 6; i++) {
      days.push(add(startDate, { days: i }));
    }

    return days;
  };

  const handleCreateTimesheetRows = (startDate: Date) => {
    const days = calculateDays(startDate);

    for (const day of days) {
      append({
        date: day,
        rate: 0,
        hours: 0,
        notes: '',
      });
    }
  };

  const onSubmit = (data: FormValues) => {
    const {
      clientName,
      consultantFirstName,
      consultantLastName,
      weekStarting,
      weekEnding,
      rate,
      status,
    } = data;

    const newClient = {
      client: clientName,
      firstName: consultantFirstName,
      lastName: consultantLastName,
      weekStarting,
      weekEnding,
      rate,
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
            <h2>Add A Timesheet</h2>

            <div className={classes['grid-container']}>
              <div className={`${classes['client-name']}`}>
                <label className={classes['input-label']} htmlFor="clientName">
                  Client Name
                </label>
                <input
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

              <div className={`${classes['status']}`}>
                <label className={classes['input-label']} htmlFor="status">
                  Timesheet Status
                </label>

                <Controller
                  name="status"
                  rules={{ required: 'This field is required' }}
                  render={({ field }: any) => (
                    <Select
                      {...field}
                      options={options}
                      placeholder="Status"
                      isSearchable={false}
                      styles={selectStyles}
                      instanceId="status"
                    />
                  )}
                  control={control}
                  defaultValue={''}
                />

                {errors.status && (
                  <div className={classes['error-message']}>
                    {errors.status.message}
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

              <div className={classes['weekpicker-container']}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    className={classes['input-label']}
                    htmlFor="rate"
                    style={{ marginBottom: '.5rem', textAlign: 'center' }}
                  >
                    Timesheet week selection
                  </label>
                  <WeekPicker
                    onChange={(start: StartEnd, end: StartEnd) => {
                      if (!weekSelection.start && !weekSelection.end) {
                        handleCreateTimesheetRows(start as Date);
                      }

                      setWeekSelection({ start, end });
                    }}
                  />
                </div>
              </div>
            </div>

            {weekSelection.start && weekSelection.end && (
              <>
                <div className={classes['fixed-rate-container']}>
                  <div className={classes['fixed-rate-checkbox']}>
                    <input
                      style={{ marginRight: 10 }}
                      type="checkbox"
                      id="isFixedRate"
                      onChange={(e) => setIsFixedRate(e.target.checked)}
                    />
                    <label htmlFor="isFixedRate">Fixed Rate</label>

                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      data-tooltip-id="fixed-rate-tooltip"
                      data-tooltip-content="Checking this box will use a fixed rate for all timesheet dates below. If any rate for a particular date differs from the rest, leave this box unchecked."
                      className={`${classes['info-icon']}`}
                    />
                  </div>
                  <Tooltip id="fixed-rate-tooltip" style={{ width: 250 }} />

                  {isFixedRate && (
                    <div className={`${classes['rate']}`}>
                      <label className={classes['input-label']} htmlFor="rate">
                        Rate
                      </label>
                      <input
                        id="rate"
                        className={classes['input']}
                        type="number"
                        {...register('rate')}
                      />
                      {errors.rate && (
                        <div className={classes['error-message']}>
                          {errors.rate.message}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className={classes['timesheets-grid']}>
                  <div style={{ gridColumn: 'span 4' }}>Date</div>
                  <div style={{ gridColumn: 'span 2' }}>Rate</div>
                  <div style={{ gridColumn: 'span 2' }}>Hours</div>
                  <div style={{ gridColumn: 'span 4' }}>Notes</div>
                  <hr className={classes['hr']} />

                  {fields.map((field, idx) => {
                    return (
                      <React.Fragment key={field.id}>
                        <div style={{ gridColumn: 'span 4' }}>
                          <p>{format(field.date, 'ccc	MMMM dd, yyyy')}</p>
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                          <input
                            className={classes['input']}
                            placeholder="00.00"
                            type="number"
                            disabled={isFixedRate}
                            {...register(`timesheets.${idx}.rate`, {
                              required: true,
                            })}
                          />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                          <input
                            className={classes['input']}
                            placeholder="0"
                            type="number"
                            {...register(`timesheets.${idx}.hours`, {
                              required: true,
                            })}
                          />
                        </div>

                        <div style={{ gridColumn: 'span 4' }}>
                          <input
                            className={classes['input']}
                            placeholder="Notes"
                            style={{ width: '100%' }}
                            {...register(`timesheets.${idx}.notes`)}
                          />
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </>
            )}

            <div className={classes['buttons-container']}>
              <Link to={'/dashboard/timesheets'}>
                <button className={`${classes['button']} ${classes['cancel']}`}>
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                className={`${classes['button']} ${classes['add']}`}
                disabled={!weekSelection.start || !weekSelection.end}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const selectStyles = {
  container: (baseStyles: any) => ({
    ...baseStyles,
    margin: '.5rem 0',
  }),
  control: (baseStyles: any) => ({
    ...baseStyles,
    fontSize: 'calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)))',
    border: '1px solid lightgray',
    boxShadow: 'none',
    '&:hover': { border: '1px solid #CCD7EA' },
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    height: '42px',
    overflow: 'auto',
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,
    maxHeight: '150px',
  }),
  dropdownIndicator: (baseStyles: any) => ({
    ...baseStyles,
    svg: { fill: 'grey' },
  }),
};
