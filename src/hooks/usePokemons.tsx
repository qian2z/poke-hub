import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
  imageUrl: string;
}

interface FetchPokemonResponse {
  name: string;
  url: string;
  sprites: { front_default: string };
}

function getEndpoints() {
  const endpoints = [];
  for (let i = 1; i <= 30; i++) {
    endpoints.push("https://pokeapi.co/api/v2/pokemon/" + i + "/");
  }
  return endpoints;
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const endpoints = getEndpoints();

  useEffect(() => {
    const controller = new AbortController();
    Promise.all(
      endpoints.map((endpoint) => axios.get<FetchPokemonResponse>(endpoint))
    )
      .then((response) => {
        response.map((result) =>
          setPokemons((prevPoke) => [
            ...prevPoke,
            {
              name: result.data.name,
              url: result.data.url,
              imageUrl: result.data.sprites.front_default,
            },
          ])
        );
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
    return () => controller.abort();
  }, []);
  return { pokemons, error };
};

export default usePokemons;
