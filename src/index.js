import React from 'react'
import ReactDOM from 'react-dom'
import { BeersProvider } from './components/Statemng'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <BeersProvider>
      <App />
    </BeersProvider>
  </React.StrictMode>,
  rootElement
)
