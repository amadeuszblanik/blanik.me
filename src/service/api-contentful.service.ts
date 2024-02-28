import * as contentful from "contentful";
import { EntryCollection, LocaleCode } from "contentful";

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
  };
};

export default class ApiContentfulService {
  private readonly client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE!,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  experience = this.client.withoutUnresolvableLinks.getEntries<ExperienceEntrySkeleton>({
    content_type: "experience",
  });
}
