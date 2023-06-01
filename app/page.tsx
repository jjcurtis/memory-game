"use client"
import { useState } from 'react'
import { Header } from './components/Header'
import style from './page.module.css'

export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <main>
      <Header score={score} highScore={score}/>
    </main>
  )
}
