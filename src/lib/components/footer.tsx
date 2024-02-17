import { BmeButtonLink, BmeContainer, BmeLink, BmeText } from "@/lib/components/index";
import styled from "styled-components";
import { breakpoints, sizes } from "@/styles";
import { TimeFormatter } from "@/lib/service";
import { useCallback, useContext } from "react";
import { ConfigContext } from "@/lib/context/config.context";
import { ThemeVariants } from "@/lib/model/theme-variants.model";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${sizes.md};
  margin-bottom: ${sizes.md};
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${sizes.sm};

  @media (min-width: ${breakpoints.Desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Section = styled.div<{ align: "flex-start" | "space-between" | "center" | "flex-end"; order: number }>`
  display: flex;
  justify-content: ${({ align }) => align};
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
  const { theme, setTheme } = useContext(ConfigContext);
  const isDarkMode = theme == ThemeVariants.Dark;
  const currentTime = new TimeFormatter(new Date()).mediumLocal();

  const switchTheme = useCallback(() => {
    setTheme(setTheme(isDarkMode ? ThemeVariants.Light : ThemeVariants.Dark));
  }, [theme, setTheme]);

  return (
    <BmeContainer>
      <Wrapper>
        <ContentRow>
          <Section order={0} align="center">
            <Spacer />
            <BmeButtonLink onClick={() => switchTheme()}>Switch to {isDarkMode ? "light" : "dark"} mode</BmeButtonLink>
            <Spacer />
          </Section>
        </ContentRow>
        <ContentRow>
          <Section order={1} align="flex-start">
            <BmeText nowrap>Silesia, Poland 🇪🇺</BmeText>
            <Spacer />
            <BmeText nowrap>{currentTime} CEST</BmeText>
          </Section>
          <Section order={0} align="space-between">
            <BmeLink url="https://github.com/amadeuszblanik">Github</BmeLink>‧
            <BmeLink url="https://pl.linkedin.com/in/amadeuszblanik">LinkedIn</BmeLink>‧
            <BmeLink url="https://stackoverflow.com/users/14287518/amadeusz-blanik">Stackoverflow</BmeLink>‧
            <BmeLink url="https://ablanik.medium.com/">Medium</BmeLink>
          </Section>
          <Section order={2} align="flex-end">
            <BmeText nowrap>Blanik.me</BmeText>
            <Spacer />
            <BmeText nowrap>&copy; {new Date().getFullYear()}</BmeText>
          </Section>
        </ContentRow>
      </Wrapper>
    </BmeContainer>
  );
};

export default Component;
