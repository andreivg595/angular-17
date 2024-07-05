export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  electronics = 'electronics',
  jewelery = 'jewelery',
  menSClothing = "men's clothing",
  womenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}
