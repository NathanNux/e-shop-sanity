import React from 'react'

import { urlFor } from '../lib/client'
import Link from 'next/link'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
        <Link href={`/product/${slug.current}`}>
            <div className='product-card'>
                <img 
                    src={urlFor(image && image[0])} 
                    // we are setting if the image exists because we have multiple images
                    width={250}
                    height={250}
                    className='product-image'
                    alt={name}
                />
                <p className='product-name'>{name}</p>
                <p className='product-price'>${price}</p>
            </div> 
        </Link>
    </div>
  )
}

export default Product