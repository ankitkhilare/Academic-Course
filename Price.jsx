import React from 'react'
import "./price.css"

import Back from '../common/back/Back'
import priceCard from './priceCard'
const Price = () => {
  return (
    <>
    <Back title='Choose The Right Plan'>
      <section className='price padding'>
        <div className="container grid">
    <priceCard/>
        </div>
      </section>
      <Faq/>
    </>
  )
}

export default Price
