import { Order } from "src/reports/interfaces/order-details.interface";

export const mappersToInterfaces = (prismaResponse: any): Order => {
  return {
    order_id: prismaResponse.order_id,
    customer_id: prismaResponse.customer_id,
    order_date: prismaResponse.order_date,
    order_details: prismaResponse.order_details.map((detail: any) => ({
      quantity: detail.quantity,
      products: {
        product_id: detail.products.product_id,
        product_name: detail.products.product_name,
        category_id: detail.products.category_id,
        unit: detail.products.unit,
        price: detail.products.price
      }
    })),
    customers: {
      customer_id: prismaResponse.customers.customer_id,
      customer_name: prismaResponse.customers.customer_name,
      contact_name: prismaResponse.customers.contact_name,
      address: prismaResponse.customers.address,
      city: prismaResponse.customers.city,
      postal_code: prismaResponse.customers.postal_code,
      country: prismaResponse.customers.country
    }
  };
}
