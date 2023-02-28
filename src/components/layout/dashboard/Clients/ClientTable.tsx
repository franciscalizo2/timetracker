import { useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTable, useSortBy } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { useClient } from 'src/context/clientContext';
import { formatCurrency } from 'src/utils';
import ViewEditTableButtons from 'src/components/layout/dashboard/ViewEditTableButtons';

function ClientTable() {
  const navigate = useNavigate();
  const { clientList, setSelectedClient } = useClient();

  const columns: any = useMemo(
    () => [
      {
        Header: 'Actions',
        Cell: (props: any) => (
          <ViewEditTableButtons rowObj={props.row} type="CLIENT" />
        ),
      },
      {
        Header: 'Ref #',
        accessor: 'ref',
      },
      { Header: 'Job Title', accessor: 'jobTitle' },
      {
        Header: 'Consultant',
        accessor: 'firstName',
        Cell: (props: any) =>
          `${props.row.original.firstName} ${props.row.original.lastName}`,
      },
      { Header: 'Client', accessor: 'client' },
      {
        Header: 'Rate',
        accessor: 'rate',
        Cell: (props: any) => formatCurrency(props.row.original.rate),
      },
      {
        Header: 'Supervisor',
        accessor: 'supervisor',
        Cell: (props: any) =>
          `${props.row.original.supervisorFirstName} ${props.row.original.supervisorLastName}`,
      },
      { Header: 'Supervisor Email', accessor: 'supervisorEmail' },
      { Header: 'Billing Email', accessor: 'billingEmail' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: clientList }, useSortBy);

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {column.render('Header')}{' '}
                    <span>
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
    </Styles>
  );
}

export default ClientTable;

const Styles = styled.div`
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
    border: 1px solid black;

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
        &:hover {
          background: gainsboro;
          transition: background 150ms ease-in-out;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
