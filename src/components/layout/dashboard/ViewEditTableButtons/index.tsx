import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

import { useTimesheets } from 'src/context/timesheetsContext';
import classes from './ViewEditTableButtons.module.css';
import { useClient } from 'src/context/clientContext';

interface ViewEditTableButtonsProps {
  rowObj: any;
  type: 'CLIENT' | 'TIMESHEET';
}

export default function ViewEditTableButtons(props: ViewEditTableButtonsProps) {
  const { rowObj, type } = props;

  const navigate = useNavigate();
  const { setSelectedTimesheet, setIsEditMode } = useTimesheets();
  const { setSelectedClient, setIsEditMode: setIsEditModeClient } = useClient();

  const handleButtonClick = (action: 'VIEW' | 'EDIT') => {
    if (type === 'CLIENT') {
      setSelectedClient(rowObj.original);
      setIsEditModeClient(action === 'VIEW' ? false : true);
      navigate(`/dashboard/clients/${rowObj.original.id}`);
    }

    if (type === 'TIMESHEET') {
      setSelectedTimesheet(rowObj.original);
      setIsEditMode(action === 'VIEW' ? false : true);
      navigate(`/dashboard/timesheets/${rowObj.original.id}`);
    }
  };

  return (
    <div className={`${classes['button-container']}`}>
      <button
        className={`${classes['button-view']} ${classes['button']}`}
        onClick={() => handleButtonClick('VIEW')}
        data-tooltip-id="view-tooltip"
        data-tooltip-content="View"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 16 }} />
      </button>
      <button
        className={`${classes['button-edit']} ${classes['button']}`}
        onClick={() => handleButtonClick('EDIT')}
        data-tooltip-id="edit-tooltip"
        data-tooltip-content="Edit"
      >
        <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: 16 }} />
      </button>
      <Tooltip id="edit-tooltip" />
      <Tooltip id="view-tooltip" />
    </div>
  );
}
