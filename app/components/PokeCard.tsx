import React, { SetStateAction } from 'react';
import style from '../style/Pokeboard.module.css';
import { PokemonType } from './Pokeboard';

type Props = {
  name: string;
  image: string;
  shuffleArray: (array: PokemonType[]) => PokemonType[];
  setPokemon: React.Dispatch<SetStateAction<PokemonType[]>>;
};

export function PokeCard({
  name,
  image,
  shuffleArray,
  setPokemon
}: Props) {
  return (
    <article
      className={style.card}
      onClick={() => setPokemon(pokemon => shuffleArray([...pokemon]))}
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
