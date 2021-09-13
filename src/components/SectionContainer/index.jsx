import P from "prop-types";
import { Container } from "./styles";

export const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

SectionContainer.prototype = {
  children: P.node.isRequired,
};
