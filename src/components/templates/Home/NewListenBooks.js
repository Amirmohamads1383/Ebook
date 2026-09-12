import TitleHeader from '@/components/modules/TitleHeader/TitleHeader'
import React from 'react'
import SwiperPro from './SwiperPro'

export default function NewListenBooks() {
    return (
        <section className='container pb-10 md:pb-14'>
            <TitleHeader title={"جدید ترین کتاب های صوتی:"} href={"/"} />
            {/* Swiper */}
            <SwiperPro />
        </section>
    )
}
