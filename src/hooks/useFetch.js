import React, { useState, useEffect } from 'react';

function useFetch(url, dependencies) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });

    return () => {
      setFetchedData(null);
    };
  }, dependencies);

  return [isLoading, fetchedData, error];
}

export default useFetch;
