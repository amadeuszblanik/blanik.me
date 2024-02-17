import type { AppProps } from "next/app";
import React from "react";
import { BmeGlobalStyle, BmeHead, BmeProviders } from "@/lib/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BmeProviders>
      <BmeHead />
      <BmeGlobalStyle />
      <Component {...pageProps} />
    </BmeProviders>
  );
}
