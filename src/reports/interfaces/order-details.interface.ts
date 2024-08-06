
export interface Product {
  product_id: number;
  product_name: string;
  category_id: number;
  unit: string;
  price: number;
}

export interface OrderDetail {
  quantity: number;
  products: Product;
}

export interface Customer {
  customer_id: number;
  customer_name: string;
  contact_name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface Order {
  order_id: number;
  customer_id: number;
  order_date: Date; // Using string to represent the date in ISO format
  order_details: OrderDetail[];
  customers: Customer;
}
