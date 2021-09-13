import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    text-aling: center;
    max-width: 580px;
    margin: 0 auto;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
