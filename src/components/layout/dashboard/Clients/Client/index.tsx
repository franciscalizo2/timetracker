import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

import { useClient } from 'src/context/clientContext';
import BackToLink from '../../BackToLink';
import classes from './Client.module.css';

export type FormValues = {
  referenceNumber: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  clientName: string;
  billingEmail: string;
  rate: number;
  supervisorFirstName: string;
  supervisorLastName: string;
  supervisorEmail: string;
};

export default function Client() {
  const navigate = useNavigate();
  const {
    selectedClient,
    setSelectedClient,
    setClientList,
    isEditMode,
    setIsEditMode,
  } = useClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // Set Values of form on initial render
  React.useEffect(() => {
    if (selectedClient) {
      setValue('referenceNumber', selectedClient.ref);
      setValue('clientName', selectedClient.client);
      setValue('jobTitle', selectedClient.jobTitle);
      setValue('firstName', selectedClient.firstName);
      setValue('lastName', selectedClient.lastName);
      setValue('supervisorLastName', selectedClient.supervisorLastName);
      setValue('supervisorFirstName', selectedClient.supervisorFirstName);
      setValue('supervisorEmail', selectedClient.supervisorEmail);
      setValue('rate', selectedClient.rate);
      setValue('billingEmail', selectedClient.billingEmail);
    }
  }, []);

  const onSubmit = (data: FormValues) => {
    const {
      clientName,
      firstName,
      lastName,
      jobTitle,
      referenceNumber,
      billingEmail,
      rate,
      supervisorFirstName,
      supervisorLastName,
      supervisorEmail,
    } = data;

    const newClient = {
      ref: referenceNumber,
      jobTitle,
      firstName,
      lastName,
      client: clientName,
      billingEmail,
      rate,
      supervisorFirstName,
      supervisorLastName,
      supervisorEmail,
    };

    setClientList((old: any) => {
      const filtered = old.filter((el: any) => el.ref !== selectedClient.ref);
      return [...filtered, newClient];
    });

    navigate(`/dashboard`);
  };

  return (
    <div>
      <div style={{ maxWidth: 200 }}>
        <BackToLink
          to="/dashboard"
          text="Back to Client List"
          onClick={() => setSelectedClient(null)}
        />
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
              <div className={`${classes['reference']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="referenceNumber"
                >
                  Reference Number
                </label>
                <input
                  disabled={!isEditMode}
                  id="referenceNumber"
                  className={classes['input']}
                  type="text"
                  {...register('referenceNumber', {
                    required: 'This field is required',
                  })}
                />
                {errors.referenceNumber && (
                  <div className={classes['error-message']}>
                    {errors.referenceNumber.message}
                  </div>
                )}
              </div>

              <div className={`${classes['billing-email']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="billingEmail"
                >
                  Billing Email
                </label>
                <input
                  disabled={!isEditMode}
                  id="billingEmail"
                  className={classes['input']}
                  type="email"
                  {...register('billingEmail', {
                    required: 'This field is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.billingEmail && (
                  <div className={classes['error-message']}>
                    {errors.billingEmail.message}
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

              <div className={classes['client-name']}>
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

              <div className={`${classes['job-title']}`}>
                <label className={classes['input-label']} htmlFor="jobTitle">
                  Job Title
                </label>
                <input
                  disabled={!isEditMode}
                  id="jobTitle"
                  className={classes['input']}
                  type="text"
                  {...register('jobTitle', {
                    required: 'This field is required',
                  })}
                />
                {errors.jobTitle && (
                  <div className={classes['error-message']}>
                    {errors.jobTitle.message}
                  </div>
                )}
              </div>

              <div className={`${classes['first-name']}`}>
                <label className={classes['input-label']} htmlFor="firstName">
                  First Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="firstName"
                  className={classes['input']}
                  type="text"
                  {...register('firstName', {
                    required: 'This field is required',
                  })}
                />
                {errors.firstName && (
                  <div className={classes['error-message']}>
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['last-name']}`}>
                <label className={classes['input-label']} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="lastName"
                  className={classes['input']}
                  type="text"
                  {...register('lastName', {
                    required: 'This field is required',
                  })}
                />
                {errors.lastName && (
                  <div className={classes['error-message']}>
                    {errors.lastName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['supervisor-first-name']}`}>
                <label className={classes['input-label']} htmlFor="firstName">
                  Supervisor First Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="supervisorFirstName"
                  className={classes['input']}
                  type="text"
                  {...register('supervisorFirstName', {
                    required: 'This field is required',
                  })}
                />
                {errors.supervisorFirstName && (
                  <div className={classes['error-message']}>
                    {errors.supervisorFirstName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['supervisor-last-name']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="supervisorLastName"
                >
                  Supervisor Last Name
                </label>
                <input
                  disabled={!isEditMode}
                  id="supervisorLastName"
                  className={classes['input']}
                  type="text"
                  {...register('supervisorLastName', {
                    required: 'This field is required',
                  })}
                />
                {errors.supervisorLastName && (
                  <div className={classes['error-message']}>
                    {errors.supervisorLastName.message}
                  </div>
                )}
              </div>

              <div className={`${classes['supervisor-email']}`}>
                <label
                  className={classes['input-label']}
                  htmlFor="supervisorEmail"
                >
                  Supervisor Email
                </label>
                <input
                  disabled={!isEditMode}
                  id="supervisorEmail"
                  className={classes['input']}
                  type="email"
                  {...register('supervisorEmail', {
                    required: 'This field is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.supervisorEmail && (
                  <div className={classes['error-message']}>
                    {errors.supervisorEmail.message}
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
