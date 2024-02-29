import React from "react";
import { ItemName, ItemWrapper } from "@/lib/components/abilities/styled";
import { AbilityItem } from "@/lib/components/abilities/types";
import { BmeStarRating } from "@/lib/components";

const Component: AbilityItem = ({ name, level }) => (
  <ItemWrapper>
    <ItemName>{name}</ItemName>
    <ItemName>
      <BmeStarRating value={level} />
    </ItemName>
  </ItemWrapper>
);

export default Component;
