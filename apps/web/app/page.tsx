
import { client } from "@repo/db/client";



export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <h1>{user?.username}</h1>
      <h2>Hi Ram Pukar</h2>
    </div>
  );
}
