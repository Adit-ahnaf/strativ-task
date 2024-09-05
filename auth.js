import { users } from "@/app/credentialdata";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          const match = users.find(
            (user) =>
              user.email === credentials.email &&
              user.password === credentials.password
          );

          if (match) {
            // User found, return user object
            return match;
          } else {
            console.error("User not found");
            return null;
          }
        } catch (err) {
          console.error("Authorization error:", err);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // This is called after authorize, add match to the token
      if (user) {
        token.user = user;  // Attach the user object to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the token's user object to the session
      if (token.user) {
        session.user = token.user; // Now session has the match object
      }
      return session;
    },
  },
});
