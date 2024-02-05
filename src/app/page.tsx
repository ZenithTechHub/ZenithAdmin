"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Home = () => {
  const { data, status, update } = useSession();

  return (
    <main className="sm:flex sm:flex-col sm:gap-6 sm:w-full">
      <div>
        {data === null && (
          <button onClick={() => signIn("github")}>signIn</button>
        )}

        {data !== null && <button onClick={() => signOut()}>signOut</button>}
      </div>

      <strong>Status: {status}</strong>

      <ul>
        <li>expires: {data?.expires}</li>
        <li>email: {data?.user?.email}</li>
        <li>image: {data?.user?.image}</li>
        <li>name: {data?.user?.name}</li>
      </ul>
    </main>
  );
};

export default Home;
