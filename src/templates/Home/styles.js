import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: red;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;
