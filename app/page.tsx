import { redirect } from "next/navigation";

export default function HomeScreen() {
  redirect("/dashboard/counter");
}