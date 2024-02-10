import React, { useState } from "react";
import { BmeButton, BmeSelect, BmeText } from "@/lib/components/index";
import styled from "styled-components";
import { DateFormatter } from "@/lib/service";
import { clamp, firstElement, lastElement } from "bme-utils";
import { breakpoints, sizes } from "@/styles";
import Markdown from "react-markdown";
import Image from "next/image";

interface Props {
  logoUrl: string;
  companyName: string;
  positions: { name: string; startDate: Date; endDate?: Date; description: string }[];
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${sizes.lg} 0;

  &:not(:last-child) {
    border-bottom: rgba(var(--gray), 0.33) solid 1px;
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
  align-items: flex-end;
`;

const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin: ${sizes.md} 0 0;
`;

const Logo = styled.figure`
  position: relative;
  width: 100%;
  max-width: 120px;
  margin-right: ${sizes.md};

  &::after {
    padding-bottom: 100%;
    content: "";
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Component: React.FC<Props> = ({ logoUrl, companyName, positions }) => {
  const [selectedPositionIndex, setSelectedPositionIndex] = useState(0);
  const selectedPosition = positions[selectedPositionIndex];

  const firstPosition = lastElement(positions)!;
  const lastPosition = firstElement(positions)!;

  const hasFewPositions = positions.length > 1;

  const handlePrev = () => {
    setSelectedPositionIndex(clamp(selectedPositionIndex - 1, 0, positions.length - 1));
  };

  const handleNext = () => {
    setSelectedPositionIndex(clamp(selectedPositionIndex + 1, 0, positions.length - 1));
  };

  return (
    <Wrapper>
      <Header>
        <BmeText variant="header-medium">{companyName}</BmeText>
        <PositionWrapper>
          <BmeSelect
            value={selectedPosition.name}
            options={positions.map((position) => ({ label: position.name, value: position.name }))}
            onChange={(position) => setSelectedPositionIndex(positions.findIndex(({ name }) => name === position))}
          />
          {hasFewPositions && <BmeText variant="body">&More</BmeText>}
        </PositionWrapper>
        <DateWrapper>
          <BmeText variant="body-large">
            {new DateFormatter(selectedPosition.startDate).mediumMonth()} →{" "}
            {selectedPosition.endDate ? new DateFormatter(selectedPosition.endDate).mediumMonth() : "Now"}
          </BmeText>
          {hasFewPositions && (
            <BmeText variant="body-large">
              {new DateFormatter(firstPosition.startDate).mediumMonth()} →{" "}
              {lastPosition.endDate ? new DateFormatter(lastPosition.endDate).mediumMonth() : "Now"}
            </BmeText>
          )}
        </DateWrapper>
      </Header>
      <ContentWrapper>
        <Logo>
          <Image
            src={logoUrl ? require(`./../../../public${logoUrl}`) : require("./../../../public/assets/logo.svg")}
            alt={`${companyName} logo`}
            layout="fill"
          />
        </Logo>
        <Markdown>{selectedPosition.description}</Markdown>
      </ContentWrapper>
      {hasFewPositions && (
        <Controls>
          <BmeButton onClick={handlePrev}>
            <BmeText>← Prev</BmeText>
          </BmeButton>
          <BmeButton onClick={handleNext}>
            <BmeText>Next →</BmeText>
          </BmeButton>
        </Controls>
      )}
    </Wrapper>
  );
};

export default Component;
