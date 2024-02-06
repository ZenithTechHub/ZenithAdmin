"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";

export type LayoutClientProps = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

export const LayoutClient = ({ children }: LayoutClientProps) => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </SessionProvider>
);
