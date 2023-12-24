"use client"
import { useReducer } from 'react'
import './globals.css'
import { appReducer } from '@/reducer/appReducer'
import { init } from '@/common/init'
import { Provider } from '@/context/appContext'
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({ children }) {
  const[state,dispatch]=useReducer(appReducer,init)
  return (
    <html lang="en">
      <body>
        <Provider value={{state,dispatch}}>
        {children}
        </Provider>
        </body>
    </html>
  )
}
