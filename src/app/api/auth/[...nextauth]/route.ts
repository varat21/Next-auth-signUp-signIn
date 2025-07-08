
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // Simple test user for debugging
        if (credentials.email === "test@example.com" && credentials.password === "test123") {
          return { id: "1", email: credentials.email, name: "Test User" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Changed to match your Login component
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
