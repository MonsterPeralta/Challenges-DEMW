import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useCounter from './useCounter';

const MultipleCustomHooks = () => {
  const [count, setCount] = useCounter(0);
  const apiUrl = `https://api.breakingbadquotes.xyz/v1/quotes/${count + 1}`;
  const { data: quote, isLoading, hasError } = useFetch(apiUrl);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error: {hasError.message}</p>;
  }

  return (
    <>
      <blockquote>
        <p>{quote?.quote}</p>
        <footer>{quote?.author}</footer>
      </blockquote>
      <button onClick={() => setCount(count + 1)}>Next quote</button>
    </>
  );
};

export default MultipleCustomHooks;