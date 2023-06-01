"use client"
import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import style from './page.module.css'
import { Pokeboard } from './components/Pokeboard';

export default function Home() {
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([score])

  useEffect(() => {
    setScores(current => [...current, score])
  }, [score])

  const highScore = useMemo(() => Math.max.apply(null, scores), [scores])

  return (
    <main>
      <Header score={score} highScore={highScore}/>
      <Pokeboard setScore={setScore} />
    </main>
  )
}
