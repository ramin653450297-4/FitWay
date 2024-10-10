import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

export default async function connectToDatabase() {
  if (cachedClient) return { client: cachedClient, db: cachedClient.db() };

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;

  return { client, db: client.db() };
}
