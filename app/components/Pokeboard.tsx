import React, { useEffect, useMemo, useState } from 'react';
import style from '../style/Pokeboard.module.css';
import { PokeCard } from './PokeCard';

type Props = {};

export type PokemonType = {
  name: string;
  image: string;
};

export function Pokeboard({}: Props) {
  const [pokemon, setPokemon] = useState<PokemonType[]>([]);

  useEffect(() => {
    for (let i = 1; i <= pokemonCount; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(pokemon =>
          setPokemon(current => [
            ...current,
            {
              name: pokemon.name,
              image: pokemon.sprites.front_default,
            },
          ])
        );
    }
  }, []);

  const pokemonCount = 15;

  function shuffleArray(
    array: PokemonType[]
  ): PokemonType[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return (
    <section
      role="region"
      aria-label="Gameboard"
      className={style.gameboard}
    >
      {pokemon.map((eachPokemon, index) => (
        <PokeCard
          key={index}
          name={eachPokemon.name}
          image={eachPokemon.image}
          shuffleArray={shuffleArray}
          setPokemon={setPokemon}
        />
      ))}
    </section>
  );
}
