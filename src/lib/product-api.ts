import type { Product } from "@/types/product";

export const PRODUCT_API_BASE_URL =
  process.env.PRODUCT_API_URL ||
  process.env.NEXT_PUBLIC_PRODUCT_API_URL ||
  "http://localhost:4000";


export async function getProducts(limit: number = 20): Promise<Product[]>
{
  const response = await fetch(`${PRODUCT_API_BASE_URL}/products?_limit=${limit}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}


export async function getProductById(id: number|string): Promise<Product|null>
{
  const response = await fetch(`${PRODUCT_API_BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product ${id}: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}