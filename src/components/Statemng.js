import React, { useState, createContext } from 'react'

export const Beercontext = createContext()

export const BeersProvider = props => {
  const [beerslist, setBeerlist] = useState([])
  return (
    <Beercontext.Provider value={[beerslist, setBeerlist]}>
      {props.children}
    </Beercontext.Provider>
  )
}
