import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { FetchPokemonResponse, Pokemon } from "./usePokemons";

interface FetchTypePokemonsResponse {
  pokemon: { pokemon: { url: string } }[];
}

const useTypePokemons = (typeName: string) => {
  const [typePokemons, setTypePokemons] = useState<Pokemon[]>([]);
  const [tError, setError] = useState("");
  const [tIsLoading, setLoading] = useState(false);
  const [endpoints, setEndpoints] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    let source: CancelTokenSource;

    setLoading(true);
    axios
      .get<FetchTypePokemonsResponse>(
        "https://pokeapi.co/api/v2/type/" + typeName + "/",
        { signal: controller.signal }
      )
      .then((res) => {
        const fetchedEndpoints = res.data.pokemon.map(
          (poke) => poke.pokemon.url
        );
        setEndpoints(fetchedEndpoints);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
      if (source) {
        source.cancel("Operation canceled by the user.");
      }
    };
  }, [typeName]);

  useEffect(() => {
    const controller = new AbortController();

    if (endpoints.length === 0) {
      setLoading(false);
      return;
    }

    Promise.all(
      endpoints.map((endpoint) =>
        axios.get<FetchPokemonResponse>(endpoint, { signal: controller.signal })
      )
    )
      .then((response) => {
        const updatedPokemons = response.map((result) => ({
          id: result.data.id,
          name:
            result.data.name.charAt(0).toUpperCase() +
            result.data.name.slice(1),
          url: result.data.url,
          imageUrl: result.data.sprites.front_default,
          type: result.data.types[0].type.name.toUpperCase(),
        }));
        setTypePokemons(updatedPokemons);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [endpoints]);

  return { typePokemons, tError, tIsLoading };
};

export default useTypePokemons;
