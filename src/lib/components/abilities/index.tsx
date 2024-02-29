import React, { useState } from "react";
import { Wrapper, Grid, GridItem } from "@/lib/components/abilities/styled";
import { Abilities } from "@/lib/components/abilities/types";
import Section from "@/lib/components/abilities/section";
import { BmeBox, BmeInput } from "@/lib/components";
import { search } from "@/lib/utils";

const Component: Abilities = ({ technologies, languages, others }) => {
  // @TODO: Make it hook
  // @TODO: Add debouncer
  const [searchQuery, setSearchQuery] = useState("");

  // @TODO: Dev purposes only
  const filteredTechnologies = technologies.filter(({ fields: { name } }) => search(searchQuery, name.toString()));
  const filteredLanguages = languages.filter(({ fields: { name } }) => search(searchQuery, name.toString()));
  const filteredOthers = others.filter(({ fields: { name } }) => search(searchQuery, name.toString()));

  return (
    <Wrapper>
      <BmeInput value={searchQuery} onChange={setSearchQuery} />
      <Grid>
        <GridItem name="technologies">
          <Section
            name="Technologies"
            items={filteredTechnologies.map(({ fields }) => ({
              name: fields.name.toString(),
              level: Number(fields.level),
            }))}
          />
        </GridItem>
        <GridItem name="languages">
          <BmeBox paddingBottom="md">
            <Section
              name="Languages"
              items={filteredLanguages.map(({ fields }) => ({
                name: fields.name.toString(),
                level: Number(fields.level),
              }))}
            />
          </BmeBox>
        </GridItem>
        <GridItem name="others">
          <Section
            name="Others"
            items={filteredOthers.map(({ fields }) => ({ name: fields.name.toString(), level: Number(fields.level) }))}
          />
        </GridItem>
      </Grid>
    </Wrapper>
  );
};

export default Component;
