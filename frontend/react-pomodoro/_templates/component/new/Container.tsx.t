---
to: "<%= atomic === 'organisms' ? `src/components/${atomic}/${name}/Container.tsx` : null %>"
---
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'src/feature/store'
import { tokenGetSelector } from 'src/feature/selectors/token'
import { api } from 'src/lib/functions/axios'

import Presenter from './Presenter'

const Container: FC = () => {
  const dispatch = useDispatch()
  const token = useSelector(tokenGetSelector)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
  }, [])

  const plusButton = () => {
    setCount((prev) => (prev + 1))
  }

  const loadButton = () => {
    api(token)
      .get(`/v1/sample_api`)
      .then((res) => {
        dispatch(sampleRedux(res.data))
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <Presenter
      count={count}
      plusButton={plusButton}
      loadButton={loadButton}
    />
  )
}

export default Container
