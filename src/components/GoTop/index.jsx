/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";
export const GoTop = () => {
  return (
    <Container href="#" aria-label="Go to Top" title="Go to Top">
      <KeyboardArrowUp />
    </Container>
  );
};
