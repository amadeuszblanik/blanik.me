import React from "react";
import { BmeText } from "@/lib/components";
import { DateFormatter } from "@/lib/service";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import {
  ContentWrapper,
  DateWrapper,
  Header,
  Logo,
  PositionWrapper,
  Wrapper,
} from "@/lib/components/experience/styled";

interface Props {
  logo?: string;
  companyName: string;
  positionName: string;
  description?: Document;
  dateStart: Date;
  dateEnd?: Date;
  location?: String;
}

const Component: React.FC<Props> = ({ logo, companyName, positionName, description, dateStart, dateEnd, location }) => (
  <Wrapper>
    <Header>
      <BmeText variant="header-medium">{companyName}</BmeText>
      <PositionWrapper>
        <BmeText variant="body-large">{positionName}</BmeText>
      </PositionWrapper>
      <DateWrapper>
        <BmeText variant="body-large">
          {new DateFormatter(dateStart).mediumMonth()} → {dateEnd ? new DateFormatter(dateEnd).mediumMonth() : "Now"}
        </BmeText>
        <BmeText>{location}</BmeText>
      </DateWrapper>
    </Header>
    <ContentWrapper>
      {logo && (
        <Logo>
          <Image src={logo} alt="aaa" layout="fill" />
        </Logo>
      )}
      {description && <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(description) }} />}
    </ContentWrapper>
  </Wrapper>
);

export default Component;
