import React from 'react'
import { DeliverySection } from '../components/DeliverySection'
import { HeaderSlider } from '../components/HeaderSlider'
import { BestSummer } from '../components/BestSummer'
import { Reviews } from '../components/Reviews'
import { SecondSection } from '../components/SecondSection'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { ExclusiveProducts } from '../components/ExclusiveProducts'

export const Home = () => {
  return (
    <>
      <HeaderSlider/>
      <SecondSection/>
      <ExclusiveProducts/>
      <BestSummer/>
      <FeaturedProducts/>
      <Reviews/>
      <DeliverySection/>
    </>
  )
}
