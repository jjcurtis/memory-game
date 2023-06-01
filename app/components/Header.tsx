import React from 'react';
import Image from 'next/image';
import style from '../style/Header.module.css'

type Props = {
  score: number;
  highScore: number;
}

export function Header({ score, highScore }: Props) {
  return (
    <header className={style.header}>
        <Image className={style.logo} src='/header.svg' alt='Pokemon Memory game header' width={400} height={100} priority={true}/>
        <div className={style.scoreboard} role='scoreboard'>
          <span>High Score: {highScore}</span>
          <span>Score: {score}</span>
        </div>

    </header>
  )
}