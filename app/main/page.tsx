import { redirect } from "next/navigation";
import Signout from "./component/signout";
import Update from "./component/update";
import { getUserData } from "@/lib/getUserData";

export default async function Main() {
  const userData = await getUserData();
  if (!userData) return redirect("/");

  return (
    <div className="mainWrapper">
      <h1>Email: {userData.email}</h1>
      <div>
        <Update />
      </div>
      <div>
        <Signout />
      </div>
    </div>
  );
}
