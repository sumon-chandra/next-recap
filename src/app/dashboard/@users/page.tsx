import { wait } from "@/lib/utils";

export default async function UsersPage() {
  await wait(2000);
  return (
    <div>
      <h3>This is the Users Page!</h3>
    </div>
  );
}
