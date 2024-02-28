import React from "react";
import { LayoutMain } from "@/layout";
import { BmeContainer, BmeExperience, BmeHeader, BmeList, BmeText } from "@/lib/components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ApiContentfulService, { ExperienceEntrySkeleton } from "@/service/api-contentful.service";
import { Entry } from "contentful";

export const getStaticProps = (async () => {
  const experience = await new ApiContentfulService().experience;
  const data = experience.items.sort(
    ({ fields: { dateStart: dateA } }, { fields: { dateStart: dateB } }) =>
      new Date(dateB).getTime() - new Date(dateA).getTime(),
  );

  return { props: { data } };
}) satisfies GetStaticProps<{
  data: Entry<ExperienceEntrySkeleton>[];
}>;

export default function Page({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <LayoutMain>
      <BmeHeader title={<BmeText variant="title">About me</BmeText>} />
      <BmeContainer as="main">
        <BmeText variant="header">Experience</BmeText>
        <BmeList>
          {data.map(
            ({
              sys: { id: key },
              fields: { logo, companyName, positionName, description, dateStart, dateEnd, location },
            }) => (
              <>
                <BmeExperience
                  key={key}
                  logo={logo?.fields.file?.url}
                  companyName={companyName}
                  positionName={positionName}
                  description={description}
                  dateStart={new Date(dateStart)}
                  dateEnd={dateEnd && new Date(dateEnd)}
                  location={location}
                />
              </>
            ),
          )}
        </BmeList>
      </BmeContainer>
    </LayoutMain>
  );
}
