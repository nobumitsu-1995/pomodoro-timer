import React, { useState } from 'react'
import { tokenGetSelector } from 'src/feature/selectors'
import { useSelector } from 'src/feature/store'
import { api } from 'src/lib/functions/axios'
import Presenter from './Presenter'

const index: React.FC = () => {
  const token = useSelector(tokenGetSelector)
  const [custumConfig, setCustumConfig] = useState({
    workTime: 0,
    restTime: 0,
    cycle: 0,
    longRestTime: 0,
    cycleToLongRestTime: 0,
  })

  const formItems = [
    {
      id: 'workTime',
      label: 'work time',
      value: custumConfig.workTime,
    },
    {
      id: 'restTime',
      label: 'rest time',
      value: custumConfig.restTime,
    },
    {
      id: 'cycle',
      label: 'cycle',
      value: custumConfig.cycle,
    },
    {
      id: 'longRestTime',
      label: 'long rest time',
      value: custumConfig.longRestTime,
    },
    {
      id: 'cycleToLongRestTime',
      label: (
        <>
          Cycles to <br /> long rest periods
        </>
      ),
      value: custumConfig.cycleToLongRestTime,
    },
  ]

  const changeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCustumConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const clickCreate = () => {
    api(token.token)
      .post('/v1/custum_config/create', {
        ...custumConfig,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const clickUpdate = () => {
    console.log('fetch')
  }

  const onChangeSelect = () => {
    console.log('onChange')
  }

  return (
    <Presenter
      formItems={formItems}
      configLength={5}
      clickUpdate={clickUpdate}
      changeEdit={changeEdit}
      onChangeSelect={onChangeSelect}
    />
  )
}

export default index
