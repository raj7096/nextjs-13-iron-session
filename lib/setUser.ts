"use server";

import { ironOptions } from "@/lib/ironSessionConfig";
import { sealData } from "iron-session";
import { cookies } from "next/headers";

export const setUser = async (
  data = { userId: 1, email: "test@yopmail.com" }
) => {
  const seal = await sealData(data, {
    password: ironOptions.password,
    ttl: ironOptions.ttl,
  });

  const cookieStore = cookies();

  cookieStore.set({
    name: ironOptions.cookieName,
    value: seal,
    httpOnly: true,
    expires: Date.now() + ironOptions.ttl * 1000,
  });
};
