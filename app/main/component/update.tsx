import { setUser } from "@/lib/setUser";
import { revalidatePath } from "next/cache";
import React from "react";

export default function Update() {
  const updateUser = async () => {
    "use server";
    // pass the updated user data from db
    await setUser({
      userId: Math.random(),
      email: `test${Math.floor(Math.random() * 90 + 10)}@yopmail.com`,
    });
    revalidatePath("/main");
  };
  return (
    <form action={updateUser}>
      <button className="mainButton" type="submit">
        update
      </button>
    </form>
  );
}
