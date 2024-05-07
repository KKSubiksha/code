const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createOrderWithProducts() {
  try {
    const newOrder = await prisma.order.create({
      data: {
        id: '6635f705358661cd27bb69b9', 
        order_id: '6544',
        customer_id: '98',
        order_date: 'Sun May 05 2024 14:45:00 GMT+0530 (India Standard Time)',
        total_amount: 100,
        status: 'pending',
        products: {
          create: [
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
          ]
        }
      }
    });
    
    console.log('New order created:', newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createOrderWithProducts();
 
                          
        
        

