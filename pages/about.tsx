import React from "react";
import { LayoutMain } from "@/layout";
import { BmeAbilities, BmeContainer, BmeExperience, BmeHeader, BmeSection, BmeText } from "@/lib/components";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import ApiContentfulService, {
  AbilitiesCodingEntrySkeleton,
  AbilitiesLanguagesEntrySkeleton,
  AbilitiesOthersEntrySkeleton,
  AboutEntrySkeleton,
  ExperienceEntrySkeleton,
} from "@/service/api-contentful.service";
import { Entry } from "contentful";
import { firstElement } from "bme-utils";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const getServerSideProps = (async () => {
  const apiContentfulService = new ApiContentfulService();

  const contentfulAbout = await apiContentfulService.about;

  const contentfulExperience = await apiContentfulService.experience;
  const experience = contentfulExperience.items.sort(
    ({ fields: { dateStart: dateA } }, { fields: { dateStart: dateB } }) =>
      new Date(dateB).getTime() - new Date(dateA).getTime(),
  );

  const contentfulAbilitiesCoding = await apiContentfulService.abilitiesCoding;
  const contentfulAbilitiesLanguages = await apiContentfulService.abilitiesLanguages;
  const contentfulAbilitiesOthers = await apiContentfulService.abilitiesOthers;

  return {
    props: {
      about: firstElement(contentfulAbout.items),
      experience,
      abilitiesCoding: contentfulAbilitiesCoding.items,
      abilitiesLanguages: contentfulAbilitiesLanguages.items,
      abilitiesOthers: contentfulAbilitiesOthers.items,
    },
  };
}) satisfies GetStaticProps<{
  about?: Entry<AboutEntrySkeleton> | null;
  experience: Entry<ExperienceEntrySkeleton>[];
  abilitiesCoding: Entry<AbilitiesCodingEntrySkeleton>[];
  abilitiesLanguages: Entry<AbilitiesLanguagesEntrySkeleton>[];
  abilitiesOthers: Entry<AbilitiesOthersEntrySkeleton>[];
}>;

export default function Page({
  about,
  experience,
  abilitiesCoding,
  abilitiesLanguages,
  abilitiesOthers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <LayoutMain>
      <BmeHeader title={<BmeText variant="title">About me</BmeText>} />
      <BmeContainer as="main">
        {about && (
          <BmeSection header={about.fields.name}>
            <article dangerouslySetInnerHTML={{ __html: documentToHtmlString(about.fields.content) }} />
          </BmeSection>
        )}
        <BmeSection header="Experience">
          <BmeExperience>
            {experience.map(
              ({
                sys: { id: key },
                fields: { logo, companyName, positionName, description, dateStart, dateEnd, location, url },
              }) => (
                <BmeExperience.Item
                  key={key}
                  logo={logo?.fields.file?.url}
                  companyName={companyName}
                  positionName={positionName}
                  description={description}
                  dateStart={new Date(dateStart)}
                  dateEnd={dateEnd && new Date(dateEnd)}
                  location={location}
                  url={url}
                />
              ),
            )}
          </BmeExperience>
        </BmeSection>
        <BmeSection header="Abilities">
          <BmeAbilities technologies={abilitiesCoding} languages={abilitiesLanguages} others={abilitiesOthers} />
        </BmeSection>
      </BmeContainer>
    </LayoutMain>
  );
}
