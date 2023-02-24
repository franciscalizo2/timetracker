import { Temporal } from '@js-temporal/polyfill';

const today = Temporal.Now.plainDateISO();
const time = Temporal.Now.plainTimeISO();

console.log(time);
console.log(time.toLocaleString());

export const FAKE_DATA = [
  {
    id: '1',
    status: 'Missing',
    placement: 'P0343284',
    jobTitle: 'Netsuite Admin',
    client: 'Centrium Consulting',
    firstName: 'Ryan',
    lastName: 'Howard',
    date: today.toLocaleString(),
    start: time.toLocaleString(),
    break: 0,
    finish: time.add({ hours: 8, minutes: 20 }).toLocaleString(),
    rate: '$50.00',
    note: null,
  },
  {
    id: '2',
    status: 'Missing',
    placement: 'P034390',
    jobTitle: 'Netsuite Senior Consultant',
    client: 'Mac Jones Cleaning Co',
    firstName: 'Bill',
    lastName: 'Burr',
    date: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    start: time.subtract({ hours: 4, minutes: 32 }).toLocaleString(),
    break: 30,
    finish: time
      .subtract({ hours: 4, minutes: 32 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$77.00',
    note: 'Overtime',
  },
  {
    id: '3',
    status: 'Approved',
    placement: 'P0343432',
    jobTitle: 'Netsuite Developer - Tabling',
    client: 'Perkins Technical Consulting',
    firstName: 'Paul',
    lastName: 'Michaels',
    date: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    start: time.subtract({ hours: 3, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 3, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$39.23',
    note: null,
  },
  {
    id: '4',
    status: 'Submitting',
    placement: 'P0343322',
    jobTitle: 'Netsuite Developer (Junior)',
    client: 'Sigma Technical Group',
    firstName: 'Jim',
    lastName: 'Johnson',
    date: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 8, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 8, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$20.00',
    note: null,
  },
  {
    id: '5',
    status: 'Approved',
    placement: 'P0343343',
    jobTitle: 'Netsuite Technician',
    client: 'Johnson & Johnson',
    firstName: 'Michael',
    lastName: 'Kayline',
    date: today.subtract({ days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 10, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 10, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$30.88',
    note: 'First hours clocked',
  },
  {
    id: '6',
    status: 'Missing',
    placement: 'P0343284',
    jobTitle: 'Netsuite Admin',
    client: 'Centrium Consulting',
    firstName: 'Ryan',
    lastName: 'Howard',
    date: today.toLocaleString(),
    start: time.toLocaleString(),
    break: 0,
    finish: time.add({ hours: 8, minutes: 20 }).toLocaleString(),
    rate: '$50.00',
    note: null,
  },
  {
    id: '7',
    status: 'Missing',
    placement: 'P034390',
    jobTitle: 'Netsuite Senior Consultant',
    client: 'Mac Jones Cleaning Co',
    firstName: 'Bill',
    lastName: 'Burr',
    date: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    start: time.subtract({ hours: 4, minutes: 32 }).toLocaleString(),
    break: 30,
    finish: time
      .subtract({ hours: 4, minutes: 32 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$77.00',
    note: 'Overtime',
  },
  {
    id: '8',
    status: 'Approved',
    placement: 'P0343432',
    jobTitle: 'Netsuite Developer - Tabling',
    client: 'Perkins Technical Consulting',
    firstName: 'Paul',
    lastName: 'Michaels',
    date: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    start: time.subtract({ hours: 3, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 3, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$39.23',
    note: null,
  },
  {
    id: '9',
    status: 'Submitting',
    placement: 'P0343322',
    jobTitle: 'Netsuite Developer (Junior)',
    client: 'Sigma Technical Group',
    firstName: 'Jim',
    lastName: 'Johnson',
    date: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 8, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 8, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$20.00',
    note: null,
  },
  {
    id: '10',
    status: 'Approved',
    placement: 'P0343343',
    jobTitle: 'Netsuite Technician',
    client: 'Johnson & Johnson',
    firstName: 'Michael',
    lastName: 'Kayline',
    date: today.subtract({ days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 10, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 10, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$30.88',
    note: 'First hours clocked',
  },
  {
    id: '11',
    status: 'Missing',
    placement: 'P0343284',
    jobTitle: 'Netsuite Admin',
    client: 'Centrium Consulting',
    firstName: 'Ryan',
    lastName: 'Howard',
    date: today.toLocaleString(),
    start: time.toLocaleString(),
    break: 0,
    finish: time.add({ hours: 8, minutes: 20 }).toLocaleString(),
    rate: '$50.00',
    note: null,
  },
  {
    id: '12',
    status: 'Missing',
    placement: 'P034390',
    jobTitle: 'Netsuite Senior Consultant',
    client: 'Mac Jones Cleaning Co',
    firstName: 'Bill',
    lastName: 'Burr',
    date: today.subtract({ months: 3, days: 2 }).toLocaleString(),
    start: time.subtract({ hours: 4, minutes: 32 }).toLocaleString(),
    break: 30,
    finish: time
      .subtract({ hours: 4, minutes: 32 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$77.00',
    note: 'Overtime',
  },
  {
    id: '13',
    status: 'Approved',
    placement: 'P0343432',
    jobTitle: 'Netsuite Developer - Tabling',
    client: 'Perkins Technical Consulting',
    firstName: 'Paul',
    lastName: 'Michaels',
    date: today.subtract({ months: 1, days: 22 }).toLocaleString(),
    start: time.subtract({ hours: 3, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 3, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$39.23',
    note: null,
  },
  {
    id: '14',
    status: 'Submitting',
    placement: 'P0343322',
    jobTitle: 'Netsuite Developer (Junior)',
    client: 'Sigma Technical Group',
    firstName: 'Jim',
    lastName: 'Johnson',
    date: today.subtract({ months: 1, days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 8, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 8, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$20.00',
    note: null,
  },
  {
    id: '15',
    status: 'Approved',
    placement: 'P0343343',
    jobTitle: 'Netsuite Technician',
    client: 'Johnson & Johnson',
    firstName: 'Michael',
    lastName: 'Kayline',
    date: today.subtract({ days: 10 }).toLocaleString(),
    start: time.subtract({ hours: 10, minutes: 11 }).toLocaleString(),
    break: 0,
    finish: time
      .subtract({ hours: 10, minutes: 11 })
      .add({ hours: 8, minutes: 20 })
      .toLocaleString(),
    rate: '$30.88',
    note: 'First hours clocked',
  },
];
