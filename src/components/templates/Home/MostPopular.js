import React from 'react'
import SwiperPro from './SwiperPro'
import TitleHeader from '@/components/modules/TitleHeader/TitleHeader'

export default function MostPopular() {
    return (
        <section className='container pb-10 md:pb-14'>
            <TitleHeader title={"تازه های رمان خارجی :"} href={"/"} />
            {/* Swiper */}
            <SwiperPro />
        </section>
    )
}
