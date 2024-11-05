"use client";

import LayoutFooter from "./components/layouts/Footer/LayoutFooter";
import Sidebar from "./components/layouts/Sidebar/page";
import { useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(false);

  return (
    <div className="flex flex-1 flex-col overflow-hidden dark:bg-black lg:h-screen lg:flex-auto">
      <Sidebar setLoad={setLoad} />
      <LayoutFooter />
    </div>
  );
}
