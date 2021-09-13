/* eslint-disable react/prop-types */
import P from "prop-types";
import { Container } from "./styles";

export const TextComponent = ({ children }) => {
  return <Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.prototype = {
  children: P.node.isRequired,
};
