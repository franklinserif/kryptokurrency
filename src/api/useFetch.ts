import { useState, useEffect } from 'react';
import useFetchType from './useFetchType';
import axios from 'axios';

/**
 *
 * @param {Object} props
 * @param {string} props.string
 * @paramn {'GET'} props.methods
 * @returns {Object}
 */
function useFetch({ url, method }: useFetchType) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function getData(url: string) {
    useEffect(() => {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    }, [url]);
  }

  return { data, loading, error, getData };
}

export default useFetch;
