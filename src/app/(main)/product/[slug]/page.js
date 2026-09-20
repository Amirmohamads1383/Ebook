import Breadcrumb from "@/components/modules/Breadcrump/Breadcrump";
import ProductHero from "@/components/templates/Product/ProductHero";
import RelatedProducts from "@/components/templates/Product/RelatedProducts";

export default async function Page({ params }) {
  const { slug } = await params;

  const response = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold">محصول پیدا نشد</h1>
      </div>
    );
  }

  const data = await response.json();
  const product = data.product;

  const productsResponse = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!productsResponse.ok) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold">دریافت محصولات با خطا مواجه شد</h1>
      </div>
    );
  }

  const productsData = await productsResponse.json();
  const products = productsData.products || [];

  const authorProducts = products.filter(
    (item) => item.author === product.author && item.slug !== product.slug,
  );

  const publisherProducts = products.filter(
    (item) =>
      item.publisher === product.publisher && item.slug !== product.slug,
  );

  return (
    <>
      <Breadcrumb />

      <ProductHero product={product} />

      <RelatedProducts
        title="از همین نویسنده بخوانید :"
        products={authorProducts}
      />

      <RelatedProducts
        title="از همین انتشارات بخوانید :"
        products={publisherProducts}
      />
    </>
  );
}
