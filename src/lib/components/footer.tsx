import { BmeContainer, BmeLink, BmeText } from "@/lib/components/index";
import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";
import { TimeFormatter } from "@/lib/service";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${sizes.md};

  @media (min-width: ${breakpoints.Desktop}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${sizes.xl};
  }
`;

const Section = styled.div<{ align: "flex-start" | "space-between" | "flex-end"; order: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${sizes.md};
  order: ${({ order }) => order};

  @media (min-width: ${breakpoints.Desktop}) {
    justify-content: ${({ align }) => align};
    order: initial;
    margin-bottom: 0;
  }
`;

const Spacer = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  margin: 0 ${sizes.lg};
  background: rgb(var(--foreground));

  @media (min-width: ${breakpoints.Desktop}) {
    max-width: ${sizes.lg};
    margin: 0 ${sizes.sm};
  }
`;

const Component = () => {
  const currentTime = new TimeFormatter(new Date()).mediumLocal();

  return (
    <BmeContainer>
      <Wrapper>
        <Section order={1} align="flex-start">
          <BmeText wrap={false}>Silesia, Poland 🇪🇺</BmeText>
          <Spacer />
          <BmeText wrap={false}>{currentTime} CEST</BmeText>
        </Section>
        <Section order={0} align="space-between">
          <BmeLink url="https://github.com/amadeuszblanik">Github</BmeLink>‧
          <BmeLink url="https://pl.linkedin.com/in/amadeuszblanik">LinkedIn</BmeLink>‧
          <BmeLink url="https://stackoverflow.com/users/14287518/amadeusz-blanik">Stackoverflow</BmeLink>‧
          <BmeLink url="https://ablanik.medium.com/">Medium</BmeLink>
        </Section>
        <Section order={2} align="flex-end">
          <BmeText wrap={false}>Blanik.me</BmeText>
          <Spacer />
          <BmeText wrap={false}>&copy; {new Date().getFullYear()}</BmeText>
        </Section>
      </Wrapper>
    </BmeContainer>
  );
};

export default Component;
