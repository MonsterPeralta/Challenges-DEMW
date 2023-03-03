import React, { useState } from 'react';
import useFetch from './useFetch';

const MyComponent = () => {
  const [counter, setCounter] = useState(1);
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1${counter}`);

  const handleButtonClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>{data?.[0]?.quote}</blockquote>
      )}
      <button onClick={handleButtonClick}>Next quote</button>
    </div>
  );
};

export default MyComponent;
