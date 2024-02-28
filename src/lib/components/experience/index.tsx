import React from "react";
import { ExperienceItem } from "@/lib/components/experience/types";
import Item from "@/lib/components/experience/item";
import {
  ItemGrid,
  LineDecoration,
  LineItem,
  Wrapper,
  WrapperContent,
  WrapperLine,
} from "@/lib/components/experience/styled";

const Component: React.FC<React.PropsWithChildren> & { Item: ExperienceItem } = ({ children }) => (
  <Wrapper>
    <WrapperContent>{children}</WrapperContent>
    <WrapperLine>
      <ItemGrid height="100%">
        <LineItem>
          <LineDecoration />
        </LineItem>
      </ItemGrid>
    </WrapperLine>
  </Wrapper>
);

Component.Item = Item;

export default Component;
