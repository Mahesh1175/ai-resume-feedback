import { Bar, Doughnut, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
)

function Chart({ type, data, options, width, height }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    ...options,
  }

  switch (type) {
    case "bar":
      return <Bar data={data} options={chartOptions} width={width} height={height} />
    case "line":
      return <Line data={data} options={chartOptions} width={width} height={height} />
    case "pie":
      return <Pie data={data} options={chartOptions} width={width} height={height} />
    case "doughnut":
      return <Doughnut data={data} options={chartOptions} width={width} height={height} />
    default:
      return <Bar data={data} options={chartOptions} width={width} height={height} />
  }
}

function BarChart(props) {
  return <Chart type="bar" {...props} />
}

function LineChart(props) {
  return <Chart type="line" {...props} />
}

function PieChart(props) {
  return <Chart type="pie" {...props} />
}

function DoughnutChart(props) {
  return <Chart type="doughnut" {...props} />
}

export { Chart, BarChart, LineChart, PieChart, DoughnutChart }

