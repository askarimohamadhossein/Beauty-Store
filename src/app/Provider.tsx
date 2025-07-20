"use-client";

import { HeroUIProvider } from "@heroui/system";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider> {children}</HeroUIProvider>;
}
