import { Document } from "@contentful/rich-text-types";
import React from "react";

export interface ExperienceItemProps {
  logo?: string;
  companyName: string;
  positionName: string;
  description?: Document;
  dateStart: Date;
  dateEnd?: Date;
  location?: string;
  url?: string;
}

export interface ExperienceSummaryItemProps {
  total: {
    dateStart: Date;
    dateEnd?: Date;
  }[];
  leadership: {
    dateStart: Date;
    dateEnd?: Date;
  }[];
  firstCodeExperience: Date;
}

export type ExperienceItem = React.FC<ExperienceItemProps>;

export type ExperienceSummary = React.FC<ExperienceSummaryItemProps>;
