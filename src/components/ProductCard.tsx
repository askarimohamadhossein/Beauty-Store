"use client";
import { TProduct } from "@/types/products.type";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: TProduct }) {
  const router = useRouter();
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover bg-gray-700"
        height={200}
        src={product.thumbnail}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80 truncate">{product.title}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
          onClick={() =>
            router.push(`/products/${product.category}/${product.id}`)
          }
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}


