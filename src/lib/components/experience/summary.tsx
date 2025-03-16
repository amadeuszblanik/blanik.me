import React from "react";
import { BmeBox, BmeText } from "@/lib/components";
import { ExperienceSummaryItemProps } from "@/lib/components/experience/types";
import { durationAdvanced } from "@/lib/utils";
import { SummaryWrapper } from "@/lib/components/experience/styled";

const Component: React.FC<ExperienceSummaryItemProps> = ({ total, leadership, firstCodeExperience }) => {
  const totalExperience = durationAdvanced(total.map(({ dateStart, dateEnd }) => [dateStart, dateEnd ?? new Date()]));
  const leadershipExperience = durationAdvanced(
    leadership.map(({ dateStart, dateEnd }) => [dateStart, dateEnd ?? new Date()]),
  );
  const firstCodeExperienceDuration = durationAdvanced([[firstCodeExperience, new Date()]]);

  return (
    <SummaryWrapper>
      <BmeBox>
        <BmeText variant="header-small">{totalExperience}</BmeText>
        <BmeText>Total experience</BmeText>
      </BmeBox>
      <BmeBox>
        <BmeText variant="header-small">{leadershipExperience}</BmeText>
        <BmeText>Leadership experience</BmeText>
      </BmeBox>
      <BmeBox>
        <BmeText variant="header-small">{firstCodeExperienceDuration}</BmeText>
        <BmeText>First code experience</BmeText>
      </BmeBox>
    </SummaryWrapper>
  );
};

export default Component;
