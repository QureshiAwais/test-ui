"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ctx } from '@/context/appContext'
import { useContext } from 'react'
import { Test } from '@/components/Test'
import { Login } from '@/components/Login'
export default function App() {
  const ctxData=useContext(ctx)
  const {state}=ctxData
  return <div>
    <Header/>
    {state.isLoggedIn ? <Test/>:<Login/>}
    <Footer/>
  </div>
}
