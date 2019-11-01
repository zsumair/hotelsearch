import React, { useState, useEffect } from 'react';

function useFetch(url, dependencies) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    console.log('sending http');
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
        // console.log(data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, dependencies);

  return [isLoading, fetchedData];
}

export default useFetch;
