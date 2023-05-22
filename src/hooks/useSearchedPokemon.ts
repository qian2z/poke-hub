import { useEffect, useState } from "react";
import { FetchPokemonResponse, Pokemon } from "./usePokemons";
import axios, { CanceledError } from "axios";

const useSearchedPokemon = (searchedText: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<FetchPokemonResponse>(
        "https://pokeapi.co/api/v2/pokemon/" + searchedText + "/",
        { signal: controller.signal }
      )
      .then((res) =>
        setPokemon({
          id: res.data.id,
          name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
          url: res.data.url,
          imageUrl: res.data.sprites.front_default,
          type: res.data.types[0].type.name.toUpperCase(),
        })
      )
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
      });
    return () => {
      controller.abort();
    };
  }, [searchedText]);
  return { pokemon };
};

export default useSearchedPokemon;
