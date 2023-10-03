import { ironOptions } from "@/lib/ironSessionConfig";
import { cookies } from "next/headers";
import React from "react";

export default function Signout() {
  const signOut = async () => {
    "use server";
    cookies().delete(ironOptions.cookieName);
  };

  return (
    <form action={signOut}>
      <button className="mainButton" type="submit">
        signout
      </button>
    </form>
  );
}
