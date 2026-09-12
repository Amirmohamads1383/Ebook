import TitleHeader from '@/components/modules/TitleHeader/TitleHeader'
import React from 'react'
import SwiperPro from './SwiperPro'

export default function NewBooks() {
  return (
    <section className='container pb-10 md:pb-14'>
        <TitleHeader title={"جدید ترین کتاب ها :"} href={"/"}/>
        {/* Swiper */}
        <SwiperPro />
    </section>
  )
}
