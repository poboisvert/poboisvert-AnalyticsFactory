import React, { useCallback } from 'react';
import Link from 'next/link';

import LineChart from '@/charts/LineChart';
import Icon from '@/components/icon';

// Import utilities
import { tailwindConfig, hexToRGB } from '@/utils/Utils';

function DashboardLine({ icon, result, title }) {
  const chartData = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
      '06-01-2021',
      '07-01-2021',
      '08-01-2021',
      '09-01-2021',
      '10-01-2021',
      '11-01-2021',
      '12-01-2021',
      '01-01-2022',
      '02-01-2022',
      '03-01-2022',
      '04-01-2022',
      '05-01-2022',
      '06-01-2022',
      '07-01-2022',
      '08-01-2022',
      '09-01-2022',
      '10-01-2022',
      '11-01-2022',
      '12-01-2022',
      '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: Array.from(
          { length: 27 },
          (_, i) => i + Math.floor(Math.random() * 350)
        ),
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: Array.from(
          { length: 27 },
          (_, i) => i + Math.floor(Math.random() * 550)
        ),
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className='col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4'>
      <div className='px-5 pt-5'>
        <header className='mb-2 flex items-start justify-between'>
          {/* Icon */}
          <Icon name={icon} />
        </header>
        <h2 className='mb-2 text-lg font-semibold text-slate-800'>{title}</h2>
        <div className='mb-1 text-xs font-semibold uppercase text-slate-400'>
          Sales
        </div>
        <div className='flex items-start'>
          <div className='mr-2 text-3xl font-bold text-slate-800'>$24,780</div>
          <div className='rounded-full bg-green-500 px-1.5 text-sm font-semibold text-white'>
            {result}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default React.memo(DashboardLine);
