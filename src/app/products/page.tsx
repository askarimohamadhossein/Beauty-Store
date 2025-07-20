import { getAllProducts } from "@/apis/products.api";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const productsList = await getAllProducts();
  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-16">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {productsList.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
