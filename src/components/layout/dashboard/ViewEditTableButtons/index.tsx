import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import { useTimesheets } from 'src/context/timesheetsContext';
import classes from './ViewEditTableButtons.module.css';

interface ViewEditTableButtonsProps {
  rowObj: any;
}

export default function ViewEditTableButtons(props: ViewEditTableButtonsProps) {
  const { rowObj } = props;

  const navigate = useNavigate();
  const { setSelectedTimesheet, setIsEditMode } = useTimesheets();

  const handleButtonClick = (action: 'VIEW' | 'EDIT') => {
    setSelectedTimesheet(rowObj.original);
    setIsEditMode(action === 'VIEW' ? false : true);

    navigate(`/dashboard/timesheets/${rowObj.original.id}`);
  };

  return (
    <div className={`${classes['button-container']}`}>
      <button
        className={`${classes['button-view']} ${classes['button']}`}
        onClick={() => handleButtonClick('VIEW')}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 16 }} />
      </button>
      <button
        className={`${classes['button-edit']} ${classes['button']}`}
        onClick={() => handleButtonClick('EDIT')}
      >
        <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: 16 }} />
      </button>
    </div>
  );
}
