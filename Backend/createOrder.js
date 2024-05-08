const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();

async function createOrderWithProducts(orderData) {
  try {
    const newOrder = await prisma.order.create({
      data: { 
        order_id: orderData.order_id,
        customer_id: orderData.customer_id,
        order_date: orderData.order_date,
        products: {
          create: orderData.products.map(product => ({
            product_id: product.product_id,
            name: product.name,
            quantity: product.quantity,
            price: product.price
          }))
        },
        total_amount: orderData.total_amount,
        status: orderData.status
      }
    });
    
    console.log('New order created:', newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
  } finally {
    await prisma.$disconnect();
  }
}
const orderData = {
  order_id: '6544',
  customer_id: '98',
  order_date: 'Sun May 05 2024 14:45:00 GMT+0530 (India Standard Time)',
  products: [
    {
      product_id: '1',
      name: 'Product 1',
      quantity: 2,
      price: 10
    },
    {
      product_id: '2',
      name: 'Product 2',
      quantity: 1,
      price: 20
    }
  ],
  total_amount: 100,
  status: 'pending'
};

createOrderWithProducts(orderData);
