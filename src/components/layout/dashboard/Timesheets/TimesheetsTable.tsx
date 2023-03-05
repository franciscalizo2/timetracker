import { useMemo } from 'react';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

import { useTimesheets } from 'src/context/timesheetsContext';
import { formatCurrency } from 'src/utils';
import ViewEditTableButtons from '../ViewEditTableButtons';

function TimesheetsTable() {
  const { timesheetsList } = useTimesheets();

  const columns: any = useMemo(
    () => [
      {
        Header: 'Actions',
        Cell: (props: any) => (
          <ViewEditTableButtons rowObj={props.row} type="TIMESHEET" />
        ),
      },
      { Header: 'Client', accessor: 'client' },
      {
        Header: 'Consultant',
        accessor: 'firstName',
        Cell: (props: any) =>
          `${props.row.original.firstName} ${props.row.original.lastName}`,
      },
      { Header: 'Week Starting', accessor: 'weekStarting' },
      { Header: 'Week Ending', accessor: 'weekEnding' },
      {
        Header: 'Rate',
        accessor: 'rate',
        Cell: (props: any) => formatCurrency(props.row.original.rate),
      },
      { Header: 'Total Hours', accessor: 'totalHours' },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: timesheetsList }, useSortBy);

  return (
    <TableStyles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps({
                    ...column.getSortByToggleProps(),
                  })}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {column.render('Header')}{' '}
                    <span>
                      {!column.isSorted && column.canSort && (
                        <FontAwesomeIcon
                          icon={faSort}
                          style={{ fontSize: 16, marginLeft: 8 }}
                        />
                      )}

                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{ fontSize: 16, marginLeft: 8 }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faCaretUp}
                            style={{ fontSize: 16, marginLeft: 8 }}
                          />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyles>
  );
}

export default TimesheetsTable;

export const TableStyles = styled.div`
  display: block;
  max-width: 100%;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }

  table {
    width: 100%;
    border-spacing: 0;

    thead {
      background: #ff6b6b;
      color: #fff;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tbody {
      tr {
        background: #fff;

        &:hover {
          background: gainsboro;
          transition: background 150ms ease-in-out;
        }
      }

      font-size: 0.9rem;
    }

    th,
    td {
      padding: 0.5rem;
      border-bottom: 10px solid #f1f2f6;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
