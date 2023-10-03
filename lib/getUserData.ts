import 'server-only'


import { ironOptions } from "@/lib/ironSessionConfig";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";

export const getUserData = async (): Promise<{ email: string; id: number } | null> => {
    const sessionCookie = cookies().get(ironOptions.cookieName)?.value;
    if (!sessionCookie) return null;
    const data = await unsealData(sessionCookie, {
        password: ironOptions.password,
    });
    return data as { email: string; id: number };
};