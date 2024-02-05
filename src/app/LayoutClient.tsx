"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export type LayoutClientProps = {
  children: React.ReactNode;
};

export const LayoutClient = ({ children }: LayoutClientProps) => (
  <SessionProvider>{children}</SessionProvider>
);
