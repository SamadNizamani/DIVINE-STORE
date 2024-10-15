export interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    slug: {
      current: string;
    };
  }
  