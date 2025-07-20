import { getProductById } from "@/apis/products.api";
import { TProduct } from "@/types/products.type";
import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id } = await params;
  const product: TProduct = await getProductById(id);

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 ">
      <Card className="col-span-12 sm:col-span-4 h-[300px]  bg-gray-700">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {product.category}
          </p>
          <h4 className="text-white font-medium text-large">{product.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={product.images[0]}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]  bg-gray-700">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {product.category}
          </p>
          <h4 className="text-white font-medium text-large">{product.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={product.images[0]}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]  bg-gray-700">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {product.category}
          </p>
          <h4 className="text-white font-medium text-large">{product.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={product.images[0]}
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5  bg-gray-700"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {product.category}
          </p>
          <h4 className="text-black font-medium text-2xl">{product.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={product.images[0]}
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7  bg-gray-700"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {product.category}
          </p>
          <h4 className="text-white/90 font-medium text-xl">{product.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={product.images[0]}
        />
      </Card>
    </div>
  );
}
