"use client";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { useRouter } from "next/navigation";

export default function PageSelector() {
  const router = useRouter();
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
      </Card>
    </>
  );
}
