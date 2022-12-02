import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { custumConfigsSelector, tokenGetSelector } from 'src/feature/selectors'
import { updateCustumConfig } from 'src/feature/slices/custumConfig'
import { useSelector } from 'src/feature/store'
import { api } from 'src/lib/functions/axios'
import Presenter from './Presenter'

const index: React.FC = () => {
  const dispatch = useDispatch()
  const token = useSelector(tokenGetSelector)
  const custumConfigs = useSelector(custumConfigsSelector)
  const [selectNum, setSelectNum] = useState(0)
  const [custumConfig, setCustumConfig] = useState(custumConfigs[0])

  useEffect(() => {
    setCustumConfig(custumConfigs[selectNum])
  }, [selectNum, custumConfigs])

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

  const clickUpdate = () => {
    api(token)
      .patch(`/v1/custum_config/${custumConfig._id}/update`, custumConfig)
      .then((res) => {
        dispatch(updateCustumConfig(res.data))
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setSelectNum(parseInt(value))
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
