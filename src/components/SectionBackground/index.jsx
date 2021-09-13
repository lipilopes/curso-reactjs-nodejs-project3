import P from "prop-types";
import { Container } from "./styles";
import { SectionContainer } from "../SectionContainer";

// const random = () =>
//   `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, "-");

export const SectionBackground = ({
  children,
  background = false,
  sectionId = "",
}) => {
  // const id = sectionId ? sectionId : random();

  return (
    <Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.prototype = {
  children: P.node.isRequired,
  background: P.bool,
  sectionID: P.string,
};
