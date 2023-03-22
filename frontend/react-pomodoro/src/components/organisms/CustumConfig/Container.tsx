import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { tokenGetSelector } from 'src/feature/selectors/token'
import { custumConfigsSelector } from 'src/feature/selectors/custumConfig'
import { updateCustumConfig } from 'src/feature/slices/custumConfig'
import { setCustumTimerConfig } from 'src/feature/slices/timerConfig'
import { useSelector } from 'src/feature/store'
import { api } from 'src/lib/functions/axios'
import {
  validateCycle,
  validateCycleToLongRestTime,
  validateTimerConfig,
} from 'src/lib/functions/validation'
import Presenter from './Presenter'

const Container: React.FC = () => {
  const dispatch = useDispatch()
  const token = useSelector(tokenGetSelector)
  const custumConfigs = useSelector(custumConfigsSelector)
  const [selectNum, setSelectNum] = useState(0)
  const [custumConfig, setCustumConfig] = useState(custumConfigs[0])
  const [errors, setErrors] = useState({
    workTime: '',
    restTime: '',
    cycle: '',
    longRestTime: '',
    cycleToLongRestTime: '',
  })

  useEffect(() => {
    setCustumConfig(custumConfigs[selectNum])
    dispatch(setCustumTimerConfig(custumConfigs[selectNum]))
  }, [selectNum, custumConfigs])

  const formItems = [
    {
      id: 'workTime',
      label: 'work time',
      value: custumConfig.workTime,
      error: errors.workTime || '',
    },
    {
      id: 'restTime',
      label: 'rest time',
      value: custumConfig.restTime,
      error: errors.restTime || '',
    },
    {
      id: 'cycle',
      label: 'cycle',
      value: custumConfig.cycle,
      error: errors.cycle || '',
    },
    {
      id: 'longRestTime',
      label: 'long rest time',
      value: custumConfig.longRestTime,
      error: errors.longRestTime || '',
    },
    {
      id: 'cycleToLongRestTime',
      label: (
        <>
          Cycles to <br /> long rest periods
        </>
      ),
      value: custumConfig.cycleToLongRestTime,
      error: errors.cycleToLongRestTime || '',
    },
  ]

  const changeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    validateForm(name, Number(value))
    setCustumConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (name: string, value: number) => {
    switch (name) {
      case 'cycle':
        setErrors((prev) => ({
          ...prev,
          [name]: validateCycle(value),
        }))
        break
      case 'cycleToLongRestTime':
        setErrors((prev) => ({
          ...prev,
          [name]: validateCycleToLongRestTime(value),
        }))
        break
      case 'workTime':
      case 'restTime':
      case 'longRestTime':
        setErrors((prev) => ({
          ...prev,
          [name]: validateTimerConfig(value),
        }))
        break
      default:
        break
    }
  }

  const clickUpdate = () => {
    if (checkFormsValidaty()) return

    api(token)
      .patch(`/v1/custum_config/${custumConfig._id}/update`, custumConfig)
      .then((res) => {
        dispatch(updateCustumConfig(res.data))
        dispatch(setCustumTimerConfig(res.data))
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const checkFormsValidaty = () => {
    Object.entries(custumConfig).forEach((data) => {
      validateForm(data[0], Number(data[1]))
    })

    return (
      Object.values(errors).filter((value) => {
        return value !== ''
      }).length !== 0
    )
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

export default Container
