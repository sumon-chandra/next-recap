import { wait } from "@/lib/utils";

export default async function OrdersPage() {
  await wait(3000);
  return (
    <div>
      <h3>This is the Orders Page!!</h3>
    </div>
  );
}
