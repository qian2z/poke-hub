import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
  type: string;
}

export interface FetchPokemonResponse {
  id: number;
  name: string;
  url: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

function getEndpoints() {
  const endpoints = [];
  for (let i = 1; i <= 40; i++) {
    endpoints.push("https://pokeapi.co/api/v2/pokemon/" + i + "/");
  }
  return endpoints;
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const endpoints = getEndpoints();

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    Promise.all(
      endpoints.map((endpoint) => axios.get<FetchPokemonResponse>(endpoint))
    )
      .then((response) => {
        response.map((result) => {
          setPokemons((prevPoke) => [
            ...prevPoke,
            {
              id: result.data.id,
              name:
                result.data.name.charAt(0).toUpperCase() +
                result.data.name.slice(1),
              url: result.data.url,
              imageUrl: result.data.sprites.front_default,
              type: result.data.types[0].type.name.toUpperCase(),
            },
          ]);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { pokemons, error, isLoading };
};

export default usePokemons;
