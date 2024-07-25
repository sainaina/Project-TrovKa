import React from 'react'
import DropdownMenu from '../../components/button/DropdownMenu'

import SearchComponent from '../../components/cart/home-page-components/SearchComponent'
import SlideImageComponent from '../../components/cart/home-page-components/SlideImageComponent'
import ServiceCard from '../../components/cart/home-page-components/ServiceCard'
import CartService from '../../components/cart/CartService'

const HomeLogin = () => {
  return (
    <div>
     
      <SearchComponent/>
      <SlideImageComponent/>
      <DropdownMenu />
      <h2 className="my-[40px] mx-[130px] text-blue-900 font-bold text-xl">All Category</h2>
      <ServiceCard/>
      <h2 className="my-[20px] mx-[130px] text-blue-900 font-bold text-xl">Feature Category</h2>
      <div className="flex gap-[40px] flex-wrap justify-center mx-[120px]">
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
        <CartService />
      </div>
      <h2 className="my-[40px] mx-[130px] text-blue-900 font-bold text-xl">Popular Category</h2>
      <div className='mx-[200px] mb-[100px] flex-wrap flex gap-[50px]'>
        <CartService />
        <CartService />
        <CartService />
        <CartService />
      </div>

    </div>
  )
}

export default HomeLogin
