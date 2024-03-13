import { useEffect, useState } from "react";
import "./PokemonForm.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Nav from "../../components/Nav/Nav";

interface IPokemon {
  id: number;
  name: string;
  img: string;
  abilities: string[];
  type: ''
}

const PokemonForm = () => {
  const [pokemon, setPokemon] = useState<IPokemon>({
    id: 0,
    name: "",
    img: "",
    abilities: [],
    type: ''
  });

  useEffect(() => {
    getPokemon(pokemon.name);
  }, [pokemon.name]);

  const getPokemon = async (pokeName: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPokemon({
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        abilities: [
          data.abilities[0].ability.name,
          data.abilities[1].ability.name,
        ],
        type: data.types[0].type.name
      });
    } else {
      setPokemon({ ...pokemon, id: 0 });
    }
  };

  return (
    <>
      <Nav/>
      <div className="pokemon-container mt-3">
        <h1>Search Pokemon</h1>
        <input
          type="text"
          placeholder="Pokemon Name"
          onChange={(event) => {
            setPokemon({ ...pokemon, name: event.target.value });
          }}
        />
      </div>
      {pokemon.id ? <PokemonCard pokemon={pokemon} /> : null}
    </>
  );
};
export default PokemonForm;
