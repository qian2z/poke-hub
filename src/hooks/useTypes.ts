import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Type {
  name: string;
  url: string;
}

interface FetchTypeResponse {
  results: Type[];
}

const useTypes = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<FetchTypeResponse>("https://pokeapi.co/api/v2/type/", {
        signal: controller.signal,
      })
      .then((res) => {
        setTypes(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { types, error, isLoading };
};

export default useTypes;
