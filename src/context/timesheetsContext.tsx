import * as React from 'react';

import { FAKE_DATA } from 'src/components/layout/dashboard/Timesheets/data';

const TimesheetsContext = React.createContext(null as any);

function TimesheetsProvider({ children }: any) {
  const [timesheetsList, setTimesheetsList] = React.useState(FAKE_DATA);
  const [selectedTimesheet, setSelectedTimesheet] = React.useState(null);

  return (
    <TimesheetsContext.Provider
      value={{
        timesheetsList,
        setTimesheetsList,
        selectedTimesheet,
        setSelectedTimesheet,
      }}
    >
      {children}
    </TimesheetsContext.Provider>
  );
}

function useTimesheets() {
  const context = React.useContext(TimesheetsContext);

  if (context === undefined) {
    throw new Error('useTimesheets must be used within a TimesheetsProvider');
  }

  return context;
}

export { TimesheetsProvider, useTimesheets };
