import React from "react";
import { BmeText } from "@/lib/components/index";
import styled from "styled-components";
import { DateFormatter } from "@/lib/service";
import { breakpoints, sizes } from "@/styles";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";

interface Props {
  logo: string;
  companyName: string;
  positionName: string;
  description?: Document;
  dateStart: Date;
  dateEnd?: Date;
  location?: String;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${sizes.lg} 0;

  &:not(:last-child) {
    border-bottom: rgba(var(--gray), 0.33) dotted 1px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${sizes.lg};

  @media (min-width: ${breakpoints.Tablet}) {
    flex-flow: row nowrap;
    align-items: center;
  }
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: ${sizes.sm} 0;

  @media (min-width: ${breakpoints.Tablet}) {
    margin: 0 auto 0 ${sizes.md};
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  @media (min-width: ${breakpoints.Tablet}) {
    align-items: flex-end;
  }
`;

const Logo = styled.figure`
  position: relative;
  width: 100%;
  margin-right: ${sizes.md};
  margin-bottom: ${sizes.md};
  background: rgb(var(--light));

  &::after {
    display: block;
    padding-bottom: 100%;
    content: "";
  }

  img {
    inset: 10% !important;
    max-width: 80%;
    max-height: 80%;
  }

  @media (min-width: ${breakpoints.MobileXl}) {
    max-width: 120px;
    margin-bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: ${breakpoints.MobileXl}) {
    flex-flow: row nowrap;
  }
`;

const Component: React.FC<Props> = ({ logo, companyName, positionName, description, dateStart, dateEnd, location }) => {
  return (
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
};

export default Component;
