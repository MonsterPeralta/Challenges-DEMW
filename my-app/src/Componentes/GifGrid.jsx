import { useEffect } from "react";
//import { useFetchGifs } from "../useFetchGifs";
import { GifItem } from '..Componentes/GifItem';
import {useFetchGifs} from '../Componentes/useFetchGifs';

export const GifGrid = ({category}) => {
    const {images, isoading}= useFetchGifs(category)
    return(
        <>
        <h3> {category} </h3>
        <div className="card-grid">
            {
                images.map( (image, key) => {
                    return <GifItem key={key} {...image}></GifItem>
                })
            }
        </div>
        </>
    )
}

