import { http, HttpResponse } from 'msw';
import type { DashboardData, User } from '@/types/content';

const user: User = {
  name: 'Maria Martinez',
};

const dashboardData: DashboardData = {
  contentLibrary: {
    newPopular: [
      {
        id: '1',
        title: 'US Treasury Securities Outlook',
        source: 'Box',
        author: 'TLU Summary',
        date: 'May 14, 2024',
        description: 'We expect long US Treasury securities to remain range-bound as inflation data and Fed communication drive volatility. We maintain a neutral duration stance.',
        tags: ['POPULAR', 'SPECIAL TOPIC'],
        chartType: 'line',
      },
      {
        id: '2',
        title: 'North American Real Estate Market Update',
        source: 'Box',
        author: 'Real Assets Investment Group',
        date: 'Apr 27, 2024',
        description: 'The rise of interest rates has put a downward pressure on valuations across core real estate markets.',
        tags: ['MARKET UPDATE'],
        chartType: 'line',
      },
      {
        id: '3',
        title: 'Monthly Market Highlights',
        source: 'Box',
        date: 'Apr 2, 2024',
        description: 'Equities surged in the first quarter on the back of stronger economic and earnings growth expectations.',
        tags: ['MARKET UPDATE'],
        chartType: 'scatter',
      },
    ],
    recents: [
      {
        id: '4',
        title: '2023 Diversity, Equity, and Inclusion (DEI) Report',
        source: 'Insights',
        author: 'Melinda Wright',
        date: 'Apr 23, 2024',
        description: 'Welcome to the Cambridge Associates 2023 Diversity, Equity, and Inclusion report.',
        tags: ['DEI'],
        chartType: 'grid',
      },
      {
        id: '5',
        title: '2024 Outlook: Sustainability & Impact',
        source: 'Insights',
        author: 'Simon Hallet, Carla Dalton, JP Gibbons',
        date: 'Apr 23, 2024',
        description: 'We expect more companies will set science-based targets to reduce their emissions.',
        tags: ['OUTLOOK'],
        chartType: 'circle',
      },
    ],
  },
  templates: {
    newPopular: [
      {
        id: 't1',
        title: 'Portfolio Update',
        author: 'Jane Doe',
        date: 'May 14, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['POPULAR', 'EXPOSURES'],
        chartType: 'pie',
      },
      {
        id: 't2',
        title: 'Quarterly Update',
        author: 'Box',
        date: 'Apr 2, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['PENSIONS'],
        chartType: 'multi',
      },
      {
        id: 't3',
        title: 'Pension Monthly Pack',
        author: 'Jane Doe',
        date: 'Apr 23, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['PERFORMANCE'],
        chartType: 'multi',
      },
    ],
    recents: [
      {
        id: 't4',
        title: 'Manager Factsheet',
        author: 'Box',
        date: 'Apr 2, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['FACTSHEET'],
      },
      {
        id: 't5',
        title: 'Risk Exhibit Pack',
        author: 'John Doe',
        date: 'Apr 23, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['RISK'],
        chartType: 'bar',
      },
      {
        id: 't6',
        title: 'Attribution Exhibit Pack',
        author: 'Box',
        date: 'Apr 23, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['ATTRIBUTION'],
      },
    ],
  },
  books: {
    scheduled: [
      {
        id: 'b1',
        title: 'Main Line Health Pension - June 2024 Review',
        client: 'Main Line Health Pension',
        type: 'Scheduled Monthly',
        date: '2024-06-07',
        dateLabel: 'June 7 2024',
      },
      {
        id: 'b2',
        title: 'AOPA Foundation - Q3 2024 Review',
        client: 'AOPA Foundation',
        type: 'Scheduled Quarterly',
        date: '2024-06-09',
        dateLabel: 'June 9 2024',
      },
    ],
    favorites: [
      {
        id: 'b3',
        title: 'MLH Annual Review',
        client: 'Main Line Health Pension',
        lastUpdated: 'Apr 23, 2024',
        chartType: 'bar',
      },
      {
        id: 'b4',
        title: 'MLH What if Analysis',
        client: 'Main Line Health Pension',
        lastUpdated: 'Apr 23, 2024',
        chartType: 'bar',
      },
      {
        id: 'b5',
        title: 'MLH Annual Review',
        client: 'Main Line Health Pension',
        lastUpdated: 'Apr 23, 2024',
        chartType: 'bar',
      },
    ],
  },
};

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json(user);
  }),
  http.get('/api/dashboard', () => {
    return HttpResponse.json(dashboardData);
  }),
];
