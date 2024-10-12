import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User';

const handler = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Credentials are required');
        }
        await connectToDatabase();

          
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error('No user found');

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) throw new Error('Invalid password');

        return { id: user._id, email: user.email }; 
      },
    }),
  ],
});

export { handler as GET, handler as POST };