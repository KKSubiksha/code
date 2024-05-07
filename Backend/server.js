const fastify = require('fastify')();
const { MongoClient } = require('mongodb');

// MongoDB Atlas connection URL
const url = 'mongodb+srv://subikshakk2003:Subiksha003@cluster0.4zcqqcr.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas cloud
MongoClient.connect(url)
  .then(client => {
    console.log('MongoDB connected'); // Log message indicating successful connection
    
    // Define a route handler to respond with "MongoDB connected"
    fastify.get('/', (request, reply) => {
      reply.send('MongoDB connected');
    });

    // Close the MongoDB connection when the server is closed
    fastify.addHook('onClose', async () => {
      await client.close();
      console.log('MongoDB connection closed');
    });

    // Start the server
    fastify.listen({ port: 3000 }, (err) => {
      if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
      }
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.error(err));
