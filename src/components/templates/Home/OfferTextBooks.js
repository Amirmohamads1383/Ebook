import TitleHeader from '@/components/modules/TitleHeader/TitleHeader'
import React from 'react'
import SwiperPro from './SwiperPro'

export default function OfferTextBooks() {
    return (
        <section className='container pb-10 md:pb-14'>
            <TitleHeader title={"تا 30 درصد تخفیف :"} href={"/"} />
            {/* Swiper */}
            <SwiperPro />
        </section>
    )
}
