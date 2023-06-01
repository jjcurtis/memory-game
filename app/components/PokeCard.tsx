import React, { SetStateAction, useState } from 'react';
import style from '../style/Pokeboard.module.css';
import { PokemonType } from './Pokeboard';

type Props = {
  name: string;
  image: string;
  shuffleArray: (array: PokemonType[]) => PokemonType[];
  setPokemon: React.Dispatch<SetStateAction<PokemonType[]>>;
  memoryBank: string[];
  setMemoryBank: React.Dispatch<SetStateAction<string[]>>;
  setScore: React.Dispatch<SetStateAction<number>>;

};

export function PokeCard({
  name,
  image,
  shuffleArray,
  setPokemon,
  memoryBank,
  setMemoryBank,
  setScore
}: Props) {

  return (
    <article
      className={style.card}
      onClick={() => {
        setMemoryBank(current => [...current, name])
        setPokemon(pokemon => shuffleArray([...pokemon]));
        
        if (memoryBank.includes(name)) {
          setScore(0)
          setMemoryBank([''])
        } else {
          setScore(current => current + 1)
        }
      }}
    >
      <img
        className={style.cardImage}
        src={image}
        alt={`picture of the pokemon ${
          name.charAt(0).toUpperCase() + name.slice(1)
        }`}
      />
      <h2 className={style.cardHeader}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </article>
  );
}
