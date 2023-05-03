import { createContext } from 'react'
import './App.css'
import Tours from './components/Tours'
import Loading from './components/Loading'
import { useContext, useEffect, useState } from 'react'

export const tourContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  const url = 'http://localhost:3000/tours'

  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <tourContext.Provider value={ tours }>
      <main>{isLoading ? <Loading /> : <Tours/>}</main>
    </tourContext.Provider>
  )
}

export default App
