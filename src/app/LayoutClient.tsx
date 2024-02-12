"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export type LayoutClientProps = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

export const LayoutClient = ({ children }: LayoutClientProps) => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </SessionProvider>
);
