import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: ac.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(`can't fetch the data`);
          }
          return res.json();
        })
        .then((result) => {
          setData(result);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Request Canceled");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => ac.abort();
  }, [url]);

  return { data, isLoading, error, setData };
};

export default useFetch;
