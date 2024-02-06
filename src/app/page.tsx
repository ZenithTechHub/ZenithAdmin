"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data, status, update } = useSession();

  return (
    <main className="sm:flex sm:flex-col sm:gap-6 sm:w-full">
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
