import React from "react";
import { ExperienceItem, ExperienceSummary } from "@/lib/components/experience/types";
import Item from "@/lib/components/experience/item";
import {
  ItemGrid,
  LineDecoration,
  LineItem,
  Wrapper,
  WrapperContent,
  WrapperLine,
} from "@/lib/components/experience/styled";
import Summary from "@/lib/components/experience/summary";

const Component: React.FC<React.PropsWithChildren> & { Item: ExperienceItem; Summary: ExperienceSummary } = ({
  children,
}) => (
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
Component.Summary = Summary;

export default Component;
