const fastify = require('fastify')();
const { MongoClient, ObjectID } = require('mongodb'); // Import ObjectID

// MongoDB Atlas connection URL
const url = 'mongodb+srv://subikshakk2003:Subiksha003@cluster0.4zcqqcr.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas cloud
MongoClient.connect(url)
  .then(client => {
    console.log('MongoDB connected'); // Log message indicating successful connection
    
    const db = client.db('Order'); // Replace 'order' with your actual database name
    const ordersCollection = db.collection('Order');

    // Define a route to get order details by order_id
    fastify.get('/Order/:order_id', async (request, reply) => {
      try {
        const { order_id } = request.params;
        const order = await ordersCollection.findOne({ _id: ObjectID(order_id) }); // Using ObjectID to match by _id
        if (!order) {
          return reply.code(404).send({ message: 'Order not found' });
        }
        return reply.send(order);
      } catch (error) {
        return reply.code(500).send({ message: 'Error retrieving order', error });
      }
    });

    // Define a route to delete order by order_id
    fastify.delete('/Order/:order_id', async (request, reply) => {
      try {
        const { order_id } = request.params;
        const result = await ordersCollection.deleteOne({ _id: ObjectID(order_id) }); // Using ObjectID to match by _id
        if (result.deletedCount === 0) {
          return reply.code(404).send({ message: 'Order not found' });
        }
        return reply.send({ message: 'Order deleted successfully' });
      } catch (error) {
        return reply.code(500).send({ message: 'Error deleting order', error });
      }
    });

    // Define a route to create a new order
    fastify.post('/Order', async (request, reply) => {
      try {
        const order = request.body; // Assuming the request body contains the details of the new order
        const result = await ordersCollection.insertOne(order);
        return reply.code(201).send({ message: 'Order created successfully', insertedId: result.insertedId });
      } catch (error) {
        return reply.code(500).send({ message: 'Error creating order', error });
      }
    });

    // Define a route handler to respond with "MongoDB connected" for the root path
    fastify.get('/', (request, reply) => {
      return reply.send('MongoDB connected');
    });

    // Close the MongoDB connection when the server is closed
    fastify.addHook('onClose', async () => {
      await client.close();
      console.log('MongoDB connection closed');
    });

    // Start the server on port 4000
    fastify.listen({ port: 4000 }, (err) => {
      if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
      }
      console.log('Server is running on port 4000');
    });
  })
  .catch(err => console.error(err));
