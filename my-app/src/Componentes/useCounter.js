// useCounter.js

 // Define un nuevo custom hook llamado useCounter que recibe un valor 
//inicial como parámetro (default: 0)
// Utiliza el hook useState para definir un nuevo estado count, que
// se inicializa con el valor recibido por parámetro
import { useState } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
};

export default useCounter;