import Image from "next/image";
import Link from "next/link";
import { SimplePokemons } from "../interface/SimplePokemons";
import { PokemonsCard } from "./PokemonsCard";

interface Props {
  pokemons: SimplePokemons[];
}
export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {pokemons.map((pokemon) => (
          <PokemonsCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};
