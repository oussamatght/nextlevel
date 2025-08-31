import React from 'react'
import {
     List}from 'lucide-react'
     import Link from 'next/link'

export default function ProductItem({ product }) {
  return (

    <Link href={`/here/${product.id}`} >
        <div className='rounded-lg 
  border border-gray-300 overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer '>
    {
      product.banner.map((img, index) => (
        <img key={index} src={img.url} alt={img.alt} className='w-full h-[170px]  rounded-t-lg ' />
      ))
    }
    <div className='p-3  '  >
         <h2> <p className='  text-[28px] font-bold text-green-500 text-center'>${product.price}</p></h2>

      <h2 className='text-[20px]
       font-medium line-clamp-1'>{product.title}
       

        </h2>
       
      <p className='text-gray-600'>{product.description}</p>
      <p className='text-gray-400 flex flex-row items-center' > <List className='w-4 h-4 ' />{product.category}
      </p>
     
      </div>
    </div>

    </Link>

  )
}


