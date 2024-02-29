import React from "react";
import { DateFormatter } from "@/lib/service";
import { BmeBox, BmeLink, BmeText } from "@/lib/components";
import { ExperienceItemProps } from "@/lib/components/experience/types";
import { ItemContent, ItemDate, ItemDateMobile, ItemDecoration, ItemGrid } from "@/lib/components/experience/styled";
import { duration } from "@/lib/utils";

const Component: React.FC<ExperienceItemProps> = ({
  logo,
  companyName,
  positionName,
  description,
  dateStart,
  dateEnd,
  location,
  url,
}) => (
  <ItemGrid>
    <ItemDate>
      <BmeBox paddingBottom="xs">
        <BmeText variant="body-large">
          {dateEnd ? new DateFormatter(dateEnd).mediumMonth() : "Current"} —{" "}
          {new DateFormatter(dateStart).mediumMonth()}
        </BmeText>
      </BmeBox>
      <BmeText>{duration(dateEnd ? dateEnd : new Date(), dateStart)}</BmeText>
    </ItemDate>
    <ItemContent>
      <BmeBox paddingBottom="xs">
        <BmeText variant="header-small">
          {positionName} @ <i>{companyName}</i>
        </BmeText>
      </BmeBox>
      <BmeBox paddingBottom="xs">
        <BmeText nowrap>
          {location}
          {url && (
            <span>
              {" "}
              |{" "}
              <BmeLink url={url} target="_blank" noStyledText>
                {url}
              </BmeLink>
            </span>
          )}
        </BmeText>
      </BmeBox>
      <ItemDateMobile>
        <BmeBox paddingBottom="xs">
          <BmeText>
            {dateEnd ? new DateFormatter(dateEnd).mediumMonth() : "Current"} —{" "}
            {new DateFormatter(dateStart).mediumMonth()}
          </BmeText>
        </BmeBox>
        <BmeText>{duration(dateEnd ? dateEnd : new Date(), dateStart)}</BmeText>
      </ItemDateMobile>
      <ItemDecoration />
    </ItemContent>
  </ItemGrid>
);

export default Component;
