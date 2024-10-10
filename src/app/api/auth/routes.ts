import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const token = req.body.token;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'RGVkYXMzTmFqdGVhdDdoRzAydHFIUHFyMlVaY1phSk4=');
      res.status(200).json({ message: 'Valid session' });
    } catch (error) {
      res.status(401).json({ message: 'Invalid session' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
