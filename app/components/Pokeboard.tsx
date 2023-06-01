import React, { useEffect, useState } from 'react';
import style from '../style/Pokeboard.module.css';
import { PokeCard } from './PokeCard';

type Props = {};

type PokemonType = {
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

  const pokemonCount = 100;

  return (
    <section
      role="region"
      aria-label="Gameboard"
      className={style.gameboard}
    >
      {pokemon.map(eachPokemon => (
        <PokeCard
          name={eachPokemon.name}
          image={eachPokemon.image}
        />
      ))}
    </section>
  );
}
