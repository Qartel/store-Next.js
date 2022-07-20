import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.lergeText}</h1>
            <img className="hero-banner-image" src={urlFor(heroBanner.image)} alt="headphones" />
        </div>
        <div>
            <Link href={`product/${heroBanner.product}`}>
                <button type="button" className="">{heroBanner.buttonText}</button>
            </Link>
            <div className="desc">
                <h5>Description</h5>
                <p>{heroBanner.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner