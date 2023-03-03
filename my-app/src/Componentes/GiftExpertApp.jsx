import { useState } from "react"
import {GifGrid} from "./GifGrid";
import { AddCategory } from "./AddCategory";
import  useEffect from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([''])

    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    return (
        <>
        <h1>GifExpert</h1>
        <AddCategory onAddCategory={onAddCategory} />
        {
            categories .map(
                (category, key) =>
                {
                    return <GifGrid category= {category} key = {key} />
                }
            )
        }
        </>
    )
}
