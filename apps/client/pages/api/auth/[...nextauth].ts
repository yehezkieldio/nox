import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtConstants } from "@nox/api/authorization";
import axios from "axios";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const response = await axios.post("http://localhost:3333/api/authorization/login", {
                    username: credentials.username,
                    password: credentials.password,
                });

                const user = await axios.get("http://localhost:3333/api/users/me", {
                    headers: {
                        Authorization: `Bearer ${response.data.access_token}`,
                    },
                });

                if (user) {
                    return user.data;
                } else {
                    return null;
                }
            },
        }),
    ],
    secret: jwtConstants.secret,
});
