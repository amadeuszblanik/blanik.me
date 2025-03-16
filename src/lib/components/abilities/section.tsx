import React from "react";
import { BmeBox, BmeText } from "@/lib/components";
import { AbilitiesSection } from "@/lib/components/abilities/types";
import { SectionContent, SectionWrapper } from "@/lib/components/abilities/styled";
import Item from "@/lib/components/abilities/item";

const Component: AbilitiesSection = ({ name, items }) => (
  <SectionWrapper>
    <BmeBox paddingBottom="sm">
      <BmeText variant="header-small">{name}</BmeText>
    </BmeBox>
    <SectionContent>
      {items
        .sort(({ level: sortA }, { level: sortB }) => sortB - sortA)
        .map((item) => (
          <BmeBox key={item.name} paddingBottom="sm" paddingRight="sm">
            <Item {...item} />
          </BmeBox>
        ))}
    </SectionContent>
  </SectionWrapper>
);

export default Component;
