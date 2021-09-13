import P from "prop-types";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import { Heading } from "../Heading";
import { Container, Html } from "./styles";

export const GridContext = ({
  title,
  html,
  background = false,
  sectionId = "",
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Html></Html>
        <TextComponent>{html}</TextComponent>
      </Container>
    </SectionBackground>
  );
};

GridContext.prototype = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
