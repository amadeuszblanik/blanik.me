import React from "react";
import { Wrapper, Grid, GridItem } from "@/lib/components/abilities/styled";
import { Abilities, AbilitiesProps, AbilityItemProps } from "@/lib/components/abilities/types";
import Section from "@/lib/components/abilities/section";
import { BmeBox } from "@/lib/components";

const mapAbilitiesItems = ({ fields }: AbilitiesProps[keyof AbilitiesProps][number]): AbilityItemProps => ({
  name: fields.name.toString(),
  level: Number(fields.level),
  logo: fields.logo ? { url: fields.logo.fields.file!.url, alt: fields.logo.fields.title! } : undefined,
  logoDark: fields.logoDark ? { url: fields.logoDark.fields.file!.url, alt: fields.logoDark.fields.title! } : undefined,
});

const Component: Abilities = ({ technologies, languages, others }) => (
  <Wrapper>
    <Grid>
      <GridItem name="technologies">
        <Section name="Technologies" items={technologies.map(mapAbilitiesItems)} />
      </GridItem>
      <GridItem name="languages">
        <BmeBox paddingBottom="md">
          <Section name="Languages" items={languages.map(mapAbilitiesItems)} />
        </BmeBox>
      </GridItem>
      <GridItem name="others">
        <Section name="Others" items={others.map(mapAbilitiesItems)} />
      </GridItem>
    </Grid>
  </Wrapper>
);

export default Component;
