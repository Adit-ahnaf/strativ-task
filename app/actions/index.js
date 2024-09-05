"use server"

import { signIn } from "@/auth";

export async function ceredntialLogin(data) {
    try {
       const response = await signIn("credentials", {
            email: data?.email,
            password: data?.password,
            redirect: false
        })
        return response;
    } catch(error) {
        throw new Error(error);
    }
}

