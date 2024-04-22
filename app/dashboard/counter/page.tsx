import { CardCounter } from "@/app/shopping-card/components/CardCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Card",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="items-center justify-center flex-col flex h-full w-full">
      <span>Productos en el carrito</span>
      <CardCounter />
    </div>
  );
}
