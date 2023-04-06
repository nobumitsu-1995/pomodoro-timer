import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const useGa4 = () => {
  useEffect(() => {
    ReactGA.initialize('G-ZD5W1B1C07')
    ReactGA.send({
      hitType: 'pageview',
    })
  }, [])
}

export default useGa4
