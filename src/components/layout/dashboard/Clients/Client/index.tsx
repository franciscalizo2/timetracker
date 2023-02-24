import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { useClient } from 'src/context/clientContext';
import BackToLink from '../../BackToLink';
import classes from './Client.module.css';

type FormValues = {
  referenceNumber: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  clientName: string;
};

export default function Client() {
  const navigate = useNavigate();
  const { selectedClient, setSelectedClient, clientList, setClientList } =
    useClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [isEditMode, setIsEditMode] = React.useState(false);

  // Set Values of form on initial render
  React.useEffect(() => {
    if (selectedClient) {
      setValue('referenceNumber', selectedClient.ref);
      setValue('clientName', selectedClient.client);
      setValue('jobTitle', selectedClient.jobTitle);
      setValue('firstName', selectedClient.firstName);
      setValue('lastName', selectedClient.lastName);
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
                <button type="button" onClick={() => setIsEditMode(true)}>
                  <FontAwesomeIcon icon={faEdit} style={{ fontSize: '1rem' }} />
                  <p>Edit</p>
                </button>
              </div>
            )}

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
