import React, { useContext } from "react";
import { ItemLogo, ItemName, ItemWrapper } from "@/lib/components/abilities/styled";
import { AbilityItem } from "@/lib/components/abilities/types";
import Image from "next/image";
import { ConfigContext } from "@/lib/context/config.context";

const getLogoUrl = (theme: string, logo?: { url: string; alt: string }, logoDark?: { url: string; alt: string }) => {
  const url = theme === "dark" && logoDark ? logoDark.url : logo?.url;

  if (!url) return null;

  return url.includes("http") ? url : `https:${url}`;
};

const getLogoAlt = (theme: string, logo?: { url: string; alt: string }, logoDark?: { url: string; alt: string }) =>
  (theme === "dark" && logoDark ? logoDark.alt : logo?.alt) ?? "Logo";

const Component: AbilityItem = ({ name, logo, logoDark }) => {
  const { theme } = useContext(ConfigContext);

  const logoUrl = getLogoUrl(theme, logo, logoDark);

  return (
    <ItemWrapper>
      {logoUrl && (
        <ItemLogo>
          <Image src={logoUrl} alt={getLogoAlt(theme, logo, logoDark)} width={32} height={32} />
        </ItemLogo>
      )}
      <ItemName>{name}</ItemName>
    </ItemWrapper>
  );
};

export default Component;
