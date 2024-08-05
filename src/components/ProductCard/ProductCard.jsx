import React from 'react'
import "./ProductCard.scss"

const ProductCard = ({product}) => {
  return (
    <div className="productCard">
        <div className='productCard__top'>
            <img src={product.image} alt={product.title} className='productCard__image'/>
        </div>

        <div className='productCard__bottom'>
            <h3 className='productCard__title'>{product.title}</h3>
            <p className='productCard__price'><span>{product.price}$</span></p>
        </div>
    </div>
  )
}

export default ProductCard