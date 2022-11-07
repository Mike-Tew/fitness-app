import {
  ArgumentAxis,
  Chart,
  LineSeries,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui'

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
  { argument: 4, value: 50 }
]

const BarChart = () => {
  return (
    <Chart data={data}>
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  )
}

export default BarChart
