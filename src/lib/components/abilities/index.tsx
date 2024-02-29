import React from "react";
import { Wrapper, Grid, GridItem } from "@/lib/components/abilities/styled";
import { Abilities } from "@/lib/components/abilities/types";
import Section from "@/lib/components/abilities/section";
import { BmeBox } from "@/lib/components";

const Component: Abilities = ({ technologies, languages, others }) => (
  <Wrapper>
    <Grid>
      <GridItem name="technologies">
        <Section
          name="Technologies"
          items={technologies.map(({ fields }) => ({ name: fields.name.toString(), level: Number(fields.level) }))}
        />
      </GridItem>
      <GridItem name="languages">
        <BmeBox paddingBottom="md">
          <Section
            name="Languages"
            items={languages.map(({ fields }) => ({ name: fields.name.toString(), level: Number(fields.level) }))}
          />
        </BmeBox>
      </GridItem>
      <GridItem name="others">
        <Section
          name="Others"
          items={others.map(({ fields }) => ({ name: fields.name.toString(), level: Number(fields.level) }))}
        />
      </GridItem>
    </Grid>
  </Wrapper>
);

export default Component;
