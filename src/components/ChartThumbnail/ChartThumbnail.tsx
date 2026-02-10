import { useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import type { ContentItem, TemplateItem, FavoriteBook } from '@/types/content'
import './ChartThumbnail.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
)

const CHART_COLORS = ['#173f6f', '#00b0d8', '#6bb86b', '#e8b88a', '#b8a7d4', '#d4736e']

type ChartType = ContentItem['chartType'] | TemplateItem['chartType'] | FavoriteBook['chartType']

interface ChartThumbnailProps {
  type?: ChartType
  title?: string
  className?: string
}

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Series 1',
      data: [30, 45, 35, 55, 48, 62],
      borderColor: CHART_COLORS[0],
      backgroundColor: 'rgba(23, 63, 111, 0.1)',
      fill: true,
      tension: 0.3,
    },
  ],
}

const barData = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [
    {
      label: 'Value',
      data: [40, 55, 45, 70, 50],
      backgroundColor: CHART_COLORS,
    },
  ],
}

const pieData = {
  labels: ['Equity', 'Fixed', 'Alts', 'Cash'],
  datasets: [
    {
      data: [45, 30, 20, 5],
      backgroundColor: CHART_COLORS,
      borderWidth: 0,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
}

export const ChartThumbnail = ({ type, className = '' }: ChartThumbnailProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  if (type === 'grid' || type === 'circle') {
    return (
      <div className={`chart-thumb placeholder ${className}`.trim()} ref={containerRef}>
        {type === 'grid' && (
          <div className="grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="cell" />
            ))}
          </div>
        )}
        {type === 'circle' && (
          <div className="circle">
            <div className="inner" />
          </div>
        )}
      </div>
    )
  }

  if (type === 'line') {
    return (
      <div className={`chart-thumb ${className}`.trim()}>
        <Line data={lineData} options={chartOptions} />
      </div>
    )
  }

  if (type === 'bar') {
    return (
      <div className={`chart-thumb ${className}`.trim()}>
        <Bar
          data={barData}
          options={{
            ...chartOptions,
            scales: {
              x: { display: false },
              y: { display: false },
            },
          }}
        />
      </div>
    )
  }

  if (type === 'pie') {
    return (
      <div className={`chart-thumb pie ${className}`.trim()}>
        <Doughnut
          data={pieData}
          options={{
            ...chartOptions,
            cutout: '60%',
          }}
        />
      </div>
    )
  }

  if (type === 'scatter') {
    const scatterLineData = {
      labels: ['', '', '', '', ''],
      datasets: [
        {
          label: 'Points',
          data: [20, 35, 25, 50, 45],
          borderColor: CHART_COLORS[0],
          backgroundColor: CHART_COLORS[0],
          showLine: false,
          pointRadius: 5,
        },
      ],
    }
    return (
      <div className={`chart-thumb ${className}`.trim()}>
        <Line data={scatterLineData} options={chartOptions} />
      </div>
    )
  }

  if (type === 'multi') {
    return (
      <div className={`chart-thumb multi ${className}`.trim()}>
        <div className="item">
          <Line data={lineData} options={chartOptions} />
        </div>
        <div className="item">
          <Bar data={barData} options={chartOptions} />
        </div>
        <div className="item small">
          <Doughnut data={pieData} options={{ ...chartOptions, cutout: '60%' }} />
        </div>
      </div>
    )
  }

  return (
    <div className={`chart-thumb placeholder ${className}`.trim()}>
      <div className="bar-placeholder" />
    </div>
  )
}
