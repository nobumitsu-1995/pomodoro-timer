import React, { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'

export type Props = {
  labels: string[]
  datas: number[]
}

const DoughnutGraph: FC<Props> = ({ labels, datas }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'User Achievement',
        data: datas,
        backgroundColor: ['#CF4F4F', '#D6EFFF', '#5FA8D3', '#B5B5B5'],
        hoverOffset: 4,
      },
    ],
  }

  ChartJS.register(ArcElement, Tooltip, Legend)

  return (
    <StyledDiv>
      <Doughnut data={data} />
    </StyledDiv>
  )
}

export default DoughnutGraph

const StyledDiv = styled.div`
  width: 500px;
`
