import * as contentful from "contentful";

export type AboutEntrySkeleton = {
  contentTypeId: "about";
  fields: {
    name: contentful.EntryFieldTypes.Text;
    content: contentful.EntryFieldTypes.RichText;
  };
};

export interface AbilityFields {
  name: contentful.EntryFieldTypes.Text;
  level: contentful.EntryFieldTypes.Integer;
  logo?: contentful.EntryFieldTypes.AssetLink;
  logoDark?: contentful.EntryFieldTypes.AssetLink;
}

export type AbilitiesCodingEntrySkeleton = {
  contentTypeId: "technology";
  fields: AbilityFields;
};

export type AbilitiesLanguagesEntrySkeleton = {
  contentTypeId: "abilitiesLanguages";
  fields: AbilityFields;
};

export type AbilitiesOthersEntrySkeleton = {
  contentTypeId: "abilitiesOthers";
  fields: AbilityFields;
};

export type ExperienceEntrySkeleton = {
  contentTypeId: "experience";
  fields: {
    logo: contentful.EntryFieldTypes.AssetLink;
    companyName: contentful.EntryFieldTypes.Text;
    positionName: contentful.EntryFieldTypes.Text;
    description: contentful.EntryFieldTypes.RichText;
    dateStart: contentful.EntryFieldTypes.Date;
    dateEnd?: contentful.EntryFieldTypes.Date;
    location?: contentful.EntryFieldTypes.Text;
    url?: contentful.EntryFieldTypes.Text;
  };
};

export default class ApiContentfulService {
  private readonly client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE!,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  about = this.client.withoutUnresolvableLinks.getEntries<AboutEntrySkeleton>({
    content_type: "about",
  });

  abilitiesCoding = this.client.withoutUnresolvableLinks.getEntries<AbilitiesCodingEntrySkeleton>({
    content_type: "technology",
  });

  abilitiesLanguages = this.client.withoutUnresolvableLinks.getEntries<AbilitiesLanguagesEntrySkeleton>({
    content_type: "abilitiesLanguages",
  });

  abilitiesOthers = this.client.withoutUnresolvableLinks.getEntries<AbilitiesOthersEntrySkeleton>({
    content_type: "abilitiesOthers",
  });

  experience = this.client.withoutUnresolvableLinks.getEntries<ExperienceEntrySkeleton>({
    content_type: "experience",
  });
}
