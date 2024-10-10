import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from "bcryptjs"
import connectToDatabase from '../../../utils/db';
import { NextResponse } from 'next/server';
import User from "./../../../models/User"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password, firstName, lastName, phoneNumber } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await connectToDatabase();

      // Create a new user
      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
      });

      // Save the user to the database
      await user.save();

      return res.status(201).json({ message: 'User created' });
    } catch (error) {
      console.error('Error during signup:', error); // Log error details
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}