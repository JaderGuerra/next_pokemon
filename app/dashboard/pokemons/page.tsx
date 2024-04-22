import { PokemonResponse, PokemonsGrid, SimplePokemons } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 10,offset = 0): Promise<SimplePokemons[]> => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response: PokemonResponse = await fetch(`${url}?limit=${limit}&offset=${offset}`)
  .then((resp) => resp.json());

  const pokemons = response.results.map((pokemon) => ({
    //obtener el id
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
//throw new Error('error')
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl m-2">
        Lista de pokemons <small>estáticos</small>
      </span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
