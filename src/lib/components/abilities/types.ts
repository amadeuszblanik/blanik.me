import React from "react";
import {
  AbilitiesCodingEntrySkeleton,
  AbilitiesLanguagesEntrySkeleton,
  AbilitiesOthersEntrySkeleton,
} from "@/service/api-contentful.service";
import { Entry } from "contentful";

interface AbilityItemProps {
  name: string;
  level: number;
}

export type AbilityItem = React.FC<AbilityItemProps>;

export interface AbilitiesSectionProps {
  name: string;
  items: AbilityItemProps[];
}

export type AbilitiesSection = React.FC<AbilitiesSectionProps>;

export interface AbilitiesProps {
  technologies: Entry<AbilitiesCodingEntrySkeleton>[];
  languages: Entry<AbilitiesLanguagesEntrySkeleton>[];
  others: Entry<AbilitiesOthersEntrySkeleton>[];
}

export type Abilities = React.FC<AbilitiesProps>;
