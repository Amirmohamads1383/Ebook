import Image from 'next/image'
import React from 'react'

export default function Banner({src}) {
  return (
    <section className='container pb-10 md:pb-14'>
        <Image src={src} alt='banner' className='rounded-lg' width={1300} height={466} />
    </section>
  )
}
