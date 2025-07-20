import { getProductsByCategory } from "@/apis/products.api";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const productsList = await getProductsByCategory(category);

  return (
    <main className="min-h-screen flex flex-col justify-start items-center p-16">
      <h1 className="text-2xl font-bold mb-16 ">Category : {category}</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {productsList?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
