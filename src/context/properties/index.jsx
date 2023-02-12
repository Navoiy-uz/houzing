import React, { useReducer } from 'react'
import { createContext } from 'react'
import { reduser } from '../../components/Properties/reduser'

const PropertiesContext = createContext()
export const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, [])
  return (
    <PropertiesContext.Provider>
      {children}
    </PropertiesContext.Provider>
  )
}
