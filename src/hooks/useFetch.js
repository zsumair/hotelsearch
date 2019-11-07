import React, { useState, useEffect } from 'react';

function useFetch(url, dependencies) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        }
        setIsLoading(false);
        setError(err);
      });

    return () => {
      controller.abort();
    };
  }, dependencies);

  return [isLoading, fetchedData, error];
}

export default useFetch;
