import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import add from 'date-fns/add';
import format from 'date-fns/format';

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
  totalHours: number;
  status: string;
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
                      setWeekSelection({ start, end });
                    }}
                  />
                </div>
              </div>
            </div>

            {weekSelection.start && weekSelection.end && (
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '500px',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 120,
                      marginRight: '1rem',
                    }}
                  >
                    <input
                      style={{ marginRight: 10 }}
                      type="checkbox"
                      id="isFixedRate"
                      onChange={(e) => setIsFixedRate(e.target.checked)}
                    />
                    <label htmlFor="isFixedRate">Fixed Rate?</label>
                  </div>

                  {isFixedRate && (
                    <div className={`${classes['rate']}`}>
                      <label className={classes['input-label']} htmlFor="rate">
                        Rate
                      </label>
                      <input
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
                  )}
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
                    rowGap: '0.5rem',
                    columnGap: '1rem',
                    alignItems: 'center',
                  }}
                >
                  {calculateDays(weekSelection.start).map((el) => {
                    return (
                      <>
                        <div style={{ gridColumn: 'span 2' }}>
                          <p>{format(el, 'MM/dd/yyyy')}</p>
                        </div>

                        <div style={{ gridColumn: 'span 3' }}>
                          <input
                            placeholder="Rate"
                            type="number"
                            disabled={isFixedRate}
                          />
                        </div>

                        <div style={{ gridColumn: 'span 3' }}>
                          <input placeholder="Hours" type="number" />
                        </div>

                        <div style={{ gridColumn: 'span 4' }}>
                          <input placeholder="Note" style={{ width: '100%' }} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
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
