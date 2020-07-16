import React from 'react';
import {useParams} from 'react-router-dom'
import Shoes from '../Shoes.json'

const ProductItem = () => {

    const { id } = useParams();
    const shoe = Shoes[id]

    if(!shoe) {
        return <h2>Product Not Found</h2>
    }
   
    return (
        <div>
           <h1>Welcome To ProductItem</h1>
            <div>
                <h4>{shoe.name}</h4>
                
                <img  src={shoe.img} height={500} alt="Shoe"/>
               
            </div> 
        </div>
    )
}

export default ProductItem
