"use client";

import { ScrollContainer } from "react-indiana-drag-scroll";
import { Link } from "@/components/SideBar/Links/Link/Link";

export const Links = () => (
  <ScrollContainer className="sm:flex sm:flex-col sm:h-full sm:-my-2 sm:overflow-y-auto sm:pr-6 sm:py-2 sm:w-full">
    <Link href="/products">Produtos</Link>

    <Link href="#">Johnny Cage</Link>

    <Link href="#">Naruto</Link>
  </ScrollContainer>
);
