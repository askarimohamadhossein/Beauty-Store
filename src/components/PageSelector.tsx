"use client";
import { getAllCategories } from "@/apis/products.api";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageSelector() {
  const router = useRouter();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);
  return (
    <>
      <Card className="w-full max-w-md text-center p-6 shadow-lg ">
        <h1 className="text-2xl font-bold mb-4">🔎 Explore the Store</h1>
        <Button
          onClick={() => router.push("./products")}
          variant="shadow"
          className="mb-4 font-semibold"
        >
          🛒 Go To Products Page
        </Button>
        <h3 className="font-bold mb-4">Explore by Category</h3>
        <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-auto">
          {categories.map((c, idx) => (
            <Button
              key={idx}
              variant="ghost"
              onClick={() => router.push(`/products/${c}`)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </Button>
          ))}
        </div>
      </Card>
    </>
  );
}
