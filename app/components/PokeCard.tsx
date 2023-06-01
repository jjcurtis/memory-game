import React from 'react'
import style from '../style/Pokeboard.module.css'

type Props = {
    name: string;
    image: string;
}

export function PokeCard({ name, image }: Props) {
  return (
    <article className={style.card}>
        <img className={style.cardImage} src={image} alt={`picture of the pokemon ${name.charAt(0).toUpperCase() + name.slice(1)}`} />
        <h2 className={style.cardHeader}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    </article>
  )
}