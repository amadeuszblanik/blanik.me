import React from "react";
import {
  AbilitiesCodingEntrySkeleton,
  AbilitiesLanguagesEntrySkeleton,
  AbilitiesOthersEntrySkeleton,
} from "@/service/api-contentful.service";
import { Entry } from "contentful";

export interface AbilityItemProps {
  name: string;
  level: number;
  logo?: {
    url: string;
    alt: string;
  };
  logoDark?: {
    url: string;
    alt: string;
  };
}

export type AbilityItem = React.FC<AbilityItemProps>;

export interface AbilitiesSectionProps {
  name: string;
  items: AbilityItemProps[];
}

export type AbilitiesSection = React.FC<AbilitiesSectionProps>;

export interface AbilitiesProps {
  technologies: Entry<AbilitiesCodingEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>[];
  languages: Entry<AbilitiesLanguagesEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>[];
  others: Entry<AbilitiesOthersEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>[];
}

export type Abilities = React.FC<AbilitiesProps>;
