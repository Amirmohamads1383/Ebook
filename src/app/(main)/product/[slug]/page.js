import Breadcrumb from '@/components/modules/Breadcrump/Breadcrump'
import TitleHeader from '@/components/modules/TitleHeader/TitleHeader'
import SwiperPro from '@/components/templates/Home/SwiperPro'
import ProductHero from '@/components/templates/Product/ProductHero'
import React from 'react'

export default async function Page({ params }) {
    const { slug } = await params

    const response = await fetch(
        `http://localhost:3000/api/product/${slug}`,
        {
            cache: "no-store",
        }
    )

    if (!response.ok) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold">
                    محصول پیدا نشد
                </h1>
            </div>
        )
    }

    const data = await response.json()
    const product = data.product
    
    return (
        <>
            <Breadcrumb />
            <ProductHero product={product} />
            <section className="container py-10 md:py-14">
                <TitleHeader
                    title={"از همین نویسنده بخوانید :"}
                    href={"/"}
                />
                <SwiperPro />
            </section>
            <section className="container pb-10 md:pb-14">
                <TitleHeader
                    title={"از همین انتشارات بخوانید :"}
                    href={"/"}
                />
                <SwiperPro />
            </section>
        </>
    )
}