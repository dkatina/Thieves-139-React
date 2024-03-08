import { useEffect, useState } from "react";
import "./PokemonForm.css";
import PokemonCard from "../PokemonCard/PokemonCard";

interface IPokemon {
    id: number,
    name: string,
    img: string,
    abilities: string[]
}

const PokemonForm = () => {
  const [pokemon, setPokemon] = useState<IPokemon>({
    id: 0,
    name: '',
    img: '',
    abilities: []
  })

  useEffect(() => {
    getPokemon(pokemon.name)
  }, [pokemon.name]);

  const getPokemon = async (pokeName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    if(response.ok){
        const data = await response.json()
        console.log(data)
        setPokemon({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default,
            abilities: [data.abilities[0].ability.name, data.abilities[1].ability.name]
        })
    } else {
        setPokemon({...pokemon, id: 0})
    }
  }

  return (
    <>
        <div className="pokemon-container">
        <h1>Search Pokemon</h1>
        <input
            type="text"
            placeholder="Pokemon Name"
            value={pokemon.name}
            onChange={(event) => {
            setPokemon({...pokemon, name: event.target.value});
            }}
        />
        </div>
        {pokemon.id ? (
            <PokemonCard pokemon={pokemon}/>
        ) : null}
    </>
  );
};
export default PokemonForm;
