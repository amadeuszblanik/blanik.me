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

export type ExperienceItem = React.FC<ExperienceItemProps>;
