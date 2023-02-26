import { Temporal } from '@js-temporal/polyfill';

const today = Temporal.Now.plainDateISO();
const time = Temporal.Now.plainTimeISO();

export const FAKE_DATA = [
  {
    id: '1',
    status: 'Missing',
    client: 'Centrium Consulting',
    firstName: 'Ryan',
    lastName: 'Howard',
    weekStarting: today.toLocaleString(),
    weekEnding: today.toLocaleString(),
    start: time.toLocaleString(),
    rate: '50',
    totalHours: 10,
  },
  {
    id: '2',
    status: 'Missing',
    client: 'Mac Jones Cleaning Co',
    firstName: 'Bill',
    lastName: 'Burr',
    weekStarting: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    weekEnding: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    start: time.subtract({ hours: 4, minutes: 32 }).toLocaleString(),
    rate: '77',
    totalHours: 9,
  },
  {
    id: '3',
    status: 'Approved',
    client: 'Perkins Technical Consulting',
    firstName: 'Paul',
    lastName: 'Michaels',
    weekStarting: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    weekEnding: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    start: time.subtract({ hours: 3, minutes: 11 }).toLocaleString(),
    rate: '39.23',
    totalHours: 22,
  },
  {
    id: '4',
    status: 'Submitting',
    client: 'Sigma Technical Group',
    firstName: 'Jim',
    lastName: 'Johnson',
    weekStarting: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    weekEnding: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 8, minutes: 11 }).toLocaleString(),
    rate: '20',
    totalHours: 5.5,
  },
  {
    id: '5',
    status: 'Approved',
    client: 'Johnson & Johnson',
    firstName: 'Michael',
    lastName: 'Kayline',
    weekStarting: today.subtract({ days: 10 }).toLocaleString(),
    weekEnding: today.subtract({ days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 10, minutes: 11 }).toLocaleString(),
    rate: '30.88',
    totalHours: 10,
  },
  {
    id: '6',
    status: 'Missing',
    client: 'Centrium Consulting',
    firstName: 'Ryan',
    lastName: 'Howard',
    weekStarting: today.toLocaleString(),
    weekEnding: today.toLocaleString(),
    start: time.toLocaleString(),
    rate: '50',
    totalHours: 8,
  },
  {
    id: '7',
    status: 'Missing',
    client: 'Mac Jones Cleaning Co',
    firstName: 'Bill',
    lastName: 'Burr',
    weekStarting: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    weekEnding: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    start: time.subtract({ hours: 4, minutes: 32 }).toLocaleString(),
    rate: '77',
    totalHours: 11,
  },
  {
    id: '8',
    status: 'Approved',
    client: 'Perkins Technical Consulting',
    firstName: 'Paul',
    lastName: 'Michaels',
    weekStarting: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    weekEnding: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    start: time.subtract({ hours: 3, minutes: 11 }).toLocaleString(),
    rate: '39.23',
    totalHours: 2,
  },
  {
    id: '9',
    status: 'Submitting',
    client: 'Sigma Technical Group',
    firstName: 'Jim',
    lastName: 'Johnson',
    weekStarting: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    weekEnding: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 8, minutes: 11 }).toLocaleString(),
    rate: '20',
    totalHours: 3,
  },
  {
    id: '10',
    status: 'Approved',
    client: 'Johnson & Johnson',
    firstName: 'Michael',
    lastName: 'Kayline',
    weekStarting: today.subtract({ days: 10 }).toLocaleString(),
    weekEnding: today.subtract({ days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 10, minutes: 11 }).toLocaleString(),
    rate: '30.88',
    totalHours: 31,
  },
  {
    id: '11',
    status: 'Missing',
    client: 'Centrium Consulting',
    firstName: 'Ryan',
    lastName: 'Howard',
    weekStarting: today.toLocaleString(),
    weekEnding: today.toLocaleString(),
    start: time.toLocaleString(),
    rate: '50',
    totalHours: 12.5,
  },
  {
    id: '12',
    status: 'Missing',
    client: 'Mac Jones Cleaning Co',
    firstName: 'Bill',
    lastName: 'Burr',
    weekStarting: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    weekEnding: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    start: time.subtract({ hours: 4, minutes: 32 }).toLocaleString(),
    rate: '77',
    totalHours: 11,
  },
  {
    id: '13',
    status: 'Approved',
    client: 'Perkins Technical Consulting',
    firstName: 'Paul',
    lastName: 'Michaels',
    weekStarting: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    weekEnding: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    start: time.subtract({ hours: 3, minutes: 11 }).toLocaleString(),
    rate: '39.23',
    totalHours: 10,
  },
  {
    id: '14',
    status: 'Submitting',
    client: 'Sigma Technical Group',
    firstName: 'Jim',
    lastName: 'Johnson',
    weekStarting: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    weekEnding: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 8, minutes: 11 }).toLocaleString(),
    rate: '20',
    totalHours: 9,
  },
  {
    id: '15',
    status: 'Approved',
    client: 'Johnson & Johnson',
    firstName: 'Michael',
    lastName: 'Kayline',
    weekStarting: today.subtract({ days: 10 }).toLocaleString(),
    weekEnding: today.subtract({ days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 10, minutes: 11 }).toLocaleString(),
    rate: '30.88',
    totalHours: 10,
  },
];
