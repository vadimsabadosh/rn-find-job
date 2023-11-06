interface FilterBarData {
  title: string;
  data: Array<{
    id: string;
    title: string;
    value: string;
  }>;
}

const data = [
  {
    title: 'Country',
    data: [
      {
        id: '1',
        title: 'Ukraine',
        value: 'ukraine',
      },
      {
        id: '2',
        title: 'Poland',
        value: 'poland',
      },
      {
        id: '3',
        title: 'Germany',
        value: 'germany',
      },
      {
        id: '4',
        title: 'Slovakia',
        value: 'slovakia',
      },
      {
        id: '5',
        title: 'United Kingdom',
        value: 'united-kingdom',
      },
    ],
  },
  {
    title: 'Experience',
    data: [
      {
        id: '1',
        title: 'Without experience',
        value: 'without',
      },
      {
        id: '2',
        title: '1 Year',
        value: '1-year',
      },
      {
        id: '3',
        title: '2 years',
        value: '2-years',
      },
      {
        id: '4',
        title: '3 Years',
        value: '3-years',
      },
      {
        id: '5',
        title: '5 Years',
        value: '5-years',
      },
    ],
  },
  {
    title: 'Employment',
    data: [
      {
        id: '1',
        title: 'Remote work',
        value: 'remote',
      },
      {
        id: '2',
        title: 'Part-time',
        value: 'part-time',
      },
      {
        id: '3',
        title: 'Office',
        value: 'office',
      },
    ],
  },
  {
    title: 'Salary from',
    data: [
      {
        id: '1',
        title: '$1500',
        value: '1500',
      },
      {
        id: '2',
        title: '$2500',
        value: '2500',
      },
      {
        id: '3',
        title: '$3500',
        value: '3500',
      },
      {
        id: '4',
        title: '$4500',
        value: '4500',
      },
      {
        id: '5',
        title: '$5500',
        value: '5500',
      },
      {
        id: '6',
        title: '$6500',
        value: '6500',
      },
    ],
  },
];
export default data as Array<FilterBarData>;
