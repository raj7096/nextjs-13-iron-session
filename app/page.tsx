import { getUserData } from "@/lib/getUserData";
import { setUser } from "@/lib/setUser";
import { redirect } from "next/navigation";

export default async function SignPage() {
  const userData = await getUserData();
  if (userData) return redirect("/main");

  const onSignIn = async () => {
    "use server";
    // pass the user data from db which need to be store in session
    await setUser();
    redirect("/main");
  };

  return (
    <main className="mainWrapper">
      <h1>Iron Session with next 13 app directory</h1>
      <form action={onSignIn}>
        <button className="mainButton" type="submit">
          Sign In
        </button>
      </form>
    </main>
  );
}
