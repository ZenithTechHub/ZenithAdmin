"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import { DialogContextProvider } from "@/contexts/DialogContext/DialogContext";

export type LayoutClientProps = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

export const LayoutClient = ({ children }: LayoutClientProps) => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <DialogContextProvider>{children}</DialogContextProvider>

      <ToastContainer />

      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </SessionProvider>
);
