 

import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

const QuoteComponent = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { data: quote, isLoading, hasError } = useFetch(
    'https://api.breakingbadquotes.xyz/v1/quotes/1'
  );

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShowLoading(false), 500);
    }
  }, [isLoading]);

  if (showLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error: {hasError.message}</p>;
  }

  return (
    <blockquote>
      <p>{quote?.quote}</p>
      <footer>{quote?.author}</footer>
    </blockquote>
  );
};

export default QuoteComponent;
