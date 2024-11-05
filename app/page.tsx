"use client";

import ProcessVoice from "./ProcessVoice/page";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden dark:bg-black lg:h-screen lg:flex-auto">
      <ProcessVoice />
    </div>
  );
}
