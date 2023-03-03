import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

 
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await getGifs(category);
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getImages();
  }, [category]);

  return { images, isLoading };
};
