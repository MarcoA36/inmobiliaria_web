export interface Property {
  id: number;
  slug: string;
  image: string;
  title: string;
  type: string;
  property_type: string;
  address: string;
  city: string;
  price: string;
  description: string;
  images?: string[];
  bedrooms?: number;
 bathrooms?: number;
}