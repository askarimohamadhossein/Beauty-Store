export type TProduct = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TProductList = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};
