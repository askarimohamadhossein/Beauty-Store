import { TProduct, TProductList } from "@/types/products.type";

const API_URL = "https://dummyjson.com/products";
const LIMIT = 32;

export async function getAllProducts(): Promise<TProductList> {
  const res = await fetch(`${API_URL}?limit=${LIMIT}`);
  return res.json();
}

export async function getProductById(id: string): Promise<TProduct> {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function getProductsByCategory(
  category: string
): Promise<TProductList> {
  const res = await fetch(`${API_URL}/category/${category}?limit=${LIMIT}`);
  return res.json();
}

export async function getAllCategories(): Promise<string[]> {
  const res = await fetch(`${API_URL}/category-list`);
  return res.json();
}
